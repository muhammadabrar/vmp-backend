exports.getById = async (req, res) => {
    try {
      let _id = req.params.id;
      if (!_id) {
        res.status(STATUS_CODE.BAD_REQUEST).json({
          message: "Id is required.",
          statusCode: STATUS_CODE.BAD_REQUEST,
        });
        return;
      }
      await userModel.findOne({ _id }).then((doc) => {
        if (doc) {
          res
            .status(STATUS_CODE.OK)
            .json({ data: doc, statusCode: STATUS_CODE.OK });
          return;
        }
        res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: "Not found", statusCode: STATUS_CODE.NOT_FOUND });
      });
    } catch (err) {
      console.log(err);
      res
        .status(STATUS_CODE.SERVER_ERROR)
        .json({ statusCode: STATUS_CODE.SERVER_ERROR });
    }
  };
  

  exports.updateAccount = async (req, res) => {
    try {
      let {fname, lname, dob, gender, profileImage, description} = req.body
  
      // let directoryPath =
  
      let data = {};
      if (fname) data.fname = fname;
      if (lname) data.lname = lname;
      if (dob) data.dob = dob;
      if (gender) data.gender = gender;
      if (description) data.description = description;

  
      if (req.file) {
        data.profileImage = await uploadThumbnails_Logos(req.file);
      }
      
  
      if (Object.entries(data).length === 0) {
        res.status(STATUS_CODE.BAD_REQUEST).json({
          message: `Please provide some data to modify`,
          statusCode: STATUS_CODE.BAD_REQUEST,
        });
        return;
      }
  
      let docs = await userModel.findOneAndUpdate(
        { _id: req.user._id },
        {
          $set: data,
        },
        { returnOriginal: false }
      );
  
      if (docs.isModified) {
        res.status(STATUS_CODE.OK).json({
          message: `Profile updated successfully`,
          statusCode: STATUS_CODE.OK,
          data: docs,
        });
        return;
      }
  
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: `Profile updatetion failed`,
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    } catch (err) {
      console.log(err);
      res.status(STATUS_CODE.SERVER_ERROR).json({
        message: `Server error occur`,
        statusCode: STATUS_CODE.SERVER_ERROR,
      });
    }
  };
  
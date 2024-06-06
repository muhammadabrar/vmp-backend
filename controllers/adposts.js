const Adpost = require("../models/adpost");

exports.addNewPost = async (req, res) => {
  try {
    let {
      Uid,
      Address_id,
      postTitle,
      category,
      price,
      images,
      Vechile,
      Spare_parts,
      country,
      city,
      postal_code,
      fulladdress,
    } = req.body;
    if (!Uid &
      !Address &
      !postTitle &
      !category &
      !price &
      !images &
      !country &
      !city &
      !postal_code &
      !fulladdress ) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "incomplete Info.",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    await Adpost.create({
      Uid,
      Address_id,
      postTitle,
      category,
      price,
      images,
      Vechile,
      Spare_parts,
      Address: {
        country,
        city,
        postal_code,
        fulladdress
      }
    }).then((doc) => {
      if (doc) {
        res
          .status(STATUS_CODE.OK)
          .json({ data: doc, statusCode: STATUS_CODE.OK });
        return;
      }
      res
        .status(STATUS_CODE.SERVER_ERROR)
        .json("something is wrong");
    });
  } catch (err) {
    console.log(err);
    res
      .status(STATUS_CODE.SERVER_ERROR)
      .json({ statusCode: STATUS_CODE.SERVER_ERROR });
  }
};


exports.getPost = async (req, res) => {
  const status = req.query.status || "Active";
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;

  const category = req.query.category || "Vechile";
  const title = req.query.title;
  const SortByupdateAT = parseInt(req.query.sort) || -1;

  const country = req.query.country;
  const city = req.query.city;
  const postal_code = req.query.postal_code;
  const fulladdress = req.query.fulladdress;
  const Make = req.query.Make;
  const Year = req.query.Year;
  const Model = req.query.Model;
  const Engine = req.query.Engine;
  const Category = req.query.Category;
  const BodyType = req.query.BodyType;
  const Mileage = req.query.Mileage;
  const Transmissions = req.query.Transmissions;
  const Colors = req.query.Colors;
  const Condition = req.query.Condition;



  let query = {};

  if (status) {
    query["status"]= status
    
  }

  if (Make) {
    query["Vechile.Make"]= Make
    
  }
  if (Year) {
    query["Vechile.Year"]= Year
    
  }
  if (Model) {
    query["Vechile.Model"]= Model
    
  }
  if (Engine) {
    query["Vechile.Engine"]= Engine
    
  }
  if (Category) {
    query["Vechile.Category"]= Category
    
  }
  if (BodyType) {
    query["Vechile.BodyType"]= BodyType
    
  }
  if (Mileage) {
    query["Vechile.Mileage"]= Mileage
    
  } if (Transmissions) {
    query["Vechile.Transmissions"]= Transmissions
    
  }
  if (Colors) {
    query["Vechile.Colors"]= Colors
    
  }
  if (Condition) {
    query["Vechile.Condition"]= Condition
    
  }

  if (title) {
    query["postTitle"] = {
      $regex: new RegExp("^" + title, "i"),
    };
  }
  if (country) {
    query["Address.country"] = { $regex: country, $options: "i" };
  }

  if (city) {
    query["Address.city"] = { $regex: city, $options: "i" };
  }
  if (postal_code) {
    query["Address.postal_code"] = { $regex: postal_code, $options: "i" };
  }
  if (fulladdress) {
    query["Address.fulladdress"] = { $regex: fulladdress, $options: "i" };
  }
  if (category) {
    query["category"] = category;
  }

  // Add additional filters based on query parameters


  try {



    const totalCount = await Adpost.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);
    const skip = (page - 1) * limit;

    let data = await Adpost.find(query)
      .sort({ updatedAt: SortByupdateAT })
      .skip(skip)
      .limit(limit);

    res.json({
      data,
      page,
      totalPages,
      totalCount,
    });

  } catch (err) {
    console.log(err);
    res
      .status(STATUS_CODE.SERVER_ERROR)
      .json({ statusCode: STATUS_CODE.SERVER_ERROR });
  }
};

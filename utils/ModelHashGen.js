const express = require("express")

const HashQueryModel = require("../model/HashQuery")


const HashLinkGen = async ({ modelID, ownerID }, next) => {
    try {
        let HashLinkData = new HashQueryModel({
            model: modelID,
            owner: ownerID
        })
        await HashLinkData.save()
        return HashLinkData
    } catch (err) {
        return false
    }
}

module.exports = HashLinkGen
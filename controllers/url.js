const nanoid = require('nanoid');
//model.id=nanoid();
const urlSchema = require('../models/url.js');
const url = require('nanoid/url.js');

//nanoid(8);

const handleGenerateShortId = async (req, res) => {
    const body = req.body;
    console.log("mai hu");
    if (!body) {
        return res.status(400).json("Url is not found");
    }

    const shortId = nanoid(8);
    const urlShort = await urlSchema.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitedHistory: []
    })
    console.log("shorturl", urlShort);
    return res.status(201).json(shortId);

}

const handleGetUrl = async (req, res) => {
    console.log('url hai');
    const shortId = req.params.id;
    const urlSearch = await urlSchema.findOneAndUpdate({ shortId, },
        {
            $push: {
                visitedHistory: { timeStamp: Date.now(), },
            }
        }
    );


    //console.log("redirecturl", redirectUrl);
    res.redirect(urlSearch.redirectUrl);
}

const handleGetNoClicks = async (req, res) => {
    console.log("hm hai k nahi");
    const shortId = req.params.id;
    const urlSearch = await urlSchema.findOne({ shortId });
    const noOfClicks = urlSearch.visitedHistory.length;
    return res.json({ noOfClicks });
}

module.exports = { handleGenerateShortId, handleGetUrl, handleGetNoClicks };
import express from "express";
import { ShortUrl } from "../models/shorturls.js";

const router = express.Router();
router
  .route("/Fullurl")
  .get(async (request, response) => {
    const fullurl = await ShortUrl.find();
    response.send(fullurl);
  })
  .post(async (request, response) => {
    const addUrl = request.body;
    // console.log(addUrl);

    const fullurl = new ShortUrl(addUrl);

    try {
      const newUrl = await fullurl.save();
      response.send(newUrl);
    } catch (err) {
      response.status(500);
      response.send(err);
    }
  });

router.route("/:shortUrl").get(async (request, respone) => {
  const { shortUrl } = request.params;
  const fullurl = await ShortUrl.findOne({ shortUrl });
  // respone.send(fullurl.FullUrl);
  // console.log(fullurl.FullUrl);
  respone.redirect(fullurl.FullUrl);
});

export const urlRouter = router;

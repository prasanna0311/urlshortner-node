import mongoose from "mongoose";
import shortid from "shortid";

const UrlSchema = new mongoose.Schema({
  FullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortid.generate,
  },
});

export const ShortUrl = mongoose.model("ShortUrl", UrlSchema);

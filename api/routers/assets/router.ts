import express, { Request } from "express";
import { Asset } from "../../interfaces.js";

interface RequestType extends Request {
  assets: Asset[];
}

const router = express.Router();

router.get("/", (req: RequestType, res, next) => {
  res.json(req.assets);
});

// get /ticker to get an asset

// post / to create an asset

// put /ticker to update an asset

// del /ticker to delete an asset

export default router;

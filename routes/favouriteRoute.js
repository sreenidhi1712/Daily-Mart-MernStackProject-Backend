import express from "express";
import {addToFavouriteList} from "../controllers/favouriteListController.js"
import authMiddleware from "../middleware/auth.js";

const favouriteRouter = express.Router();

favouriteRouter.post("/add", authMiddleware, addToFavouriteList);




export default favouriteRouter;

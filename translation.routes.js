import { Router } from "express";
import { translations } from "./translation.controller.js";



const router = Router();
router.route("/tofrench").get(translations).post(translations);
export default router
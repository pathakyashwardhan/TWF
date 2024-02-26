import { Router } from "express";
import { translations } from "./translation.controller.js";



const router = Router();
router.route("/tofrench").get(translations).post(translations);
router.get("/tofrench/:text", translations);
export default router
import express from "express";
const router= express.Router();
import SessionController from "../controllers/sessionController.js";

router.get("/sessioninfo", SessionController.get_session_info);

router.get("/setsession", SessionController.set_session_info);

router.get("/displaysession", SessionController.display_session);

router.get("/deletesession", SessionController.delete_session);

router.get("/newsession", SessionController.regn_session);
export default router;
import express from "express";
import passport from "passport";
import multer from "multer";
import Controller from "../controllers/controller";

const router = express.Router();
const upload = multer();
const controller = new Controller()

router.get('/login', (req, res) => {
    controller.showFormLogin(req, res);
})

router.post('/login', upload.none(), (req, res, next) => {
    controller.getDataLogin(req, res, next);
})

export default router;
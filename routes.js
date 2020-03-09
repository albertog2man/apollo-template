import express from "express";
import bodyParser from "body-parser";
import AuthController from "./controllers/AuthController"
import Logger from "./services/LoggerService"

const router = express.Router();

// REST MIDDLEWARE

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// ROUTES

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);


export default router;

import express from "express"
import { registrationController, loginController } from "../controllers/auth";


const router = express.Router()

// POST /api/v1/auth/registration
router.post("/registration", registrationController)

// POST /api/v1/auth/login
router.post("/login", loginController)


export default router;
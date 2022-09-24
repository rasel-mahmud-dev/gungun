import express from "express";

import song from "../routes/song";
import auth from "../routes/auth";
import artist from "../routes/artist";
import favorite from "../routes/favorite";
const router = express.Router()


router.use("/api/v1/auth", auth)
router.use("/api/v1/artists", artist)
router.use("/api/v1/songs", song)
router.use("/api/v1/favorite", favorite)


router.get("/", async (req, res, next)=>{
    try {
        res.send("hi")
    } catch (ex){
        next(ex)
    }
})


export default router;
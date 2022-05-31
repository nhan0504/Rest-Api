import express from "express";

const router = express.Router();

router.get('/', () => {
    res.send("Hello");
})

export default router;
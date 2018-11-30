import express from "express"
const router = express.Router()

import { getPlayers } from "../controllers/player.controller"

router.get("/", getPlayers)

module.exports = router

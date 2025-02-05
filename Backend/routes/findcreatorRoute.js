const express = require("express");
const router = express.Router();
const ensureUserLoggedIn = require("../middlewares/auth");
const {AddYoutuber,SearchYoutuber} = require("../controllers/YoutuberDetailsController")




router.post("/youtuber",AddYoutuber);


router.post("/searchyoutuber",SearchYoutuber);
module.exports = router
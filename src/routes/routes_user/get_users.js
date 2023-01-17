const { Router } = require("express");
const router = Router();
const User = require("../../models/user");

router.get('/user', async (req, res) => {
    try {
        const users = await User.find({
            deleteLogic: false
        })/* .populate("shoppingCart"); */
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router


const { signup, login, } = require("../controllers/AuthController");
const { signUpValidation, loginValidation } = require("../middlewares/AuthValidation");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signup", signUpValidation, signup);

module.exports = router;








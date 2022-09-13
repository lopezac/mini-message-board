const { format } = require("date-fns");
var express = require("express");

var router = express.Router();

const messages = [
  {
    text: "Hello world!",
    user: "Juan",
    added: format(new Date(), "PPpp"),
  },
  {
    text: "Aun que no te pueda ver",
    user: "Alex Ubago",
    added: format(new Date(), "PPpp"),
  },
  {
    text: "Tu eres mi religion",
    user: "Mana",
    added: format(new Date(), "PPpp"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const { msgAuthor, msgText } = req.body;
  messages.push({
    text: msgText,
    user: msgAuthor,
    added: format(new Date(), "PPpp"),
  });
  res.redirect("/");
});

module.exports = router;

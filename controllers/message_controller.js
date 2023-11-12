const Message = require("../models/message");

exports.getMessages = async (req, res, next) => {
  const messages = await Message.find();

  if (!messages) {
    const error = new Error("No messages found.");
    error.statusCode = 404;
    return next(error);
  }
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
};

exports.messageCreatGet = (req, res, next) => {
  res.render("form", {
    title: "New Message",
  });
};

exports.messageCreatePost = async (req, res, next) => {
  const message = new Message({
    user: req.body.user,
    message: req.body.message,
    createdAt: req.body.createdAt,
  });

  await message.save();

  res.redirect("/");
};

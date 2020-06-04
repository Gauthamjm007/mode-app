const { User } = require("../models/user");
const _ = require("lodash");

//localhost:8000/register

module.exports.register = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      if (user) {
        res.json({
          statusCode: "201",
          body: {
            message: "new user created",
          },
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

//localhost:8000/login

module.exports.login = (req, res) => {
  const body = req.body;

  User.findByCredentials(body.username, body.password)
    .then((user) => {
      return user.generateToken();
    })
    .then((token) => {
      res.json({
        statusCode: "200",
        body: {
          message: "success",
          accessToken: token,
        },
      });
    })
    .catch((err) => {
      res.json(err);
    });
};
//localhost:8000/account
module.exports.account = (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
};
//localhost:8000/logout

module.exports.logout = (req, res) => {
  const { user, token } = req;
  console.log("user", req);
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(() => {
      res.json({ notice: "successfully logged out" });
    })
    .catch((err) => {
      res.json(err);
    });
};

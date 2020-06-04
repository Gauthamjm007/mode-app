const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../../config/config.env" });
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function () {
        return "invalid email format";
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
  tokens: [
    {
      token: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
//own instance

userSchema.methods.generateToken = function () {
  const user = this;
  const tokenData = {
    _id: user._id,
    username: user.username,
  };

  const token = jwt.sign(tokenData, process.env.KEY);
  user.tokens.push({
    token,
  });
  return user
    .save()
    .then((user) => {
      return Promise.resolve(token);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

//pre hooks

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isNew) {
    bcryptjs.genSalt(10).then((salt) => {
      bcryptjs.hash(user.password, salt).then((encryptedPassword) => {
        user.password = encryptedPassword;
        console.log("encryptedPassword", encryptedPassword);
        next();
      });
    });
  } else {
    next();
  }
});

//own static method
userSchema.statics.findByCredentials = function (username, password) {
  const User = this;
  return User.findOne({ username })
    .then((user) => {
      if (!user) {
        return Promise.reject("invalid email / password");
      }
      return bcryptjs.compare(password, user.password).then((result) => {
        if (result) {
          return Promise.resolve(user);
        } else {
          return Promise.reject("invalid email / password");
        }
      });
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

//static
userSchema.statics.findByToken = function (token) {
  const User = this;
  let tokenData;
  try {
    tokenData = jwt.verify(token, process.env.KEY);
  } catch (err) {
    return Promise.reject(err);
  }
  return User.findOne({
    _id: tokenData,
    "tokens.token": token,
  });
};

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};

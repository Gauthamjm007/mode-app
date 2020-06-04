const Article = require("../models/article");

module.exports.list = (req, res) => {
  var pageNo = parseInt(req.query.pageNo);
  var size = parseInt(req.query.size);
  var query = {};
  if (pageNo < 0 || pageNo === 0) {
    response = {
      error: true,
      message: "invalid page number, should start with 1",
    };
    return res.json(response);
  }

  query.skip = size * (pageNo - 1);
  query.limit = size;

  if (req.query.pageNo) {
    Article.find({}, {}, query)
      .then((article) => {
        res.json(article);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    Article.find()
      .then((article) => {
        res.json(article);
      })
      .catch((err) => {
        res.json(err);
      });
  }
};

module.exports.create = (req, res) => {
  console.log(req.user, "user");
  const body = req.body;
  const article = new Article({
    title: body.title,
    body: body.body,
    author: body.author,
  });
  article
    .save()
    .then((article) => {
      if (article) {
        res.json({
          statusCode: "201",
          body: {
            message: "new article created",
          },
        });
      }

      res.status("404").json({ statusCode: "404" });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Article.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((article) => {
      if (article) {
        res.json(article);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

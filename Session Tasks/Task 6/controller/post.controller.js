const postModle = require("../database/models/Post");

class Post {
  static add = async (req, res) => {
    try {
      const post = new postModle(req.body);
      await post.save();
      res.status(200).send({
        apiStatus: true,
        data: post,
        message: "Post added successfully!",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "Error while adding",
      });
    }
  };

  static single = async (req, res) => {
    try {
      const id = req.params.id;
      const post = await postModle.findById(id);
      res.status(200).send({
        apiStatus: true,
        data: post,
        message: "Post showen!",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "Error while showing",
      });
    }
  };
  static showAll = async (req, res) => {
    try {
      const posts = await postModle.find();
      res.status(200).send({
        apiStatus: true,
        data: posts,
        message: "Posts showen!",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "Error while showing",
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const id = req.params.id;
      const post = await postModle.findByIdAndDelete(id);
      res.status(200).send({
        apiStatus: true,
        message: "Posts deleted!",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "Error while deleting",
      });
    }
  };
  static update = async (req, res) => {
    try {
      const id = req.params.id;
      const post = await postModle.findByIdAndUpdate(id, req.body, {
        runValidators: true,
      });
      if (post) {
        res.status(200).send({
          apiStatus: true,
          data: post,
          message: "Posts updated!",
        });
      } else throw new Error("Post not found");
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "Error while updating",
      });
    }
  };
}

module.exports = Post;

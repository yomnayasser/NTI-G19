const dealwithJson = require("../Controller/dealwithJson-controller");
const file = "models/posts.json";
class Post {
  static Home = (req, res) => {
    const data = dealwithJson.readFromFile("models/posts.json");
    res.render("Home", {
      pageTitle: "Home",
      data,
    });
  };
  static Add = (req, res) => {
    res.render("addPost", {
      pageTitle: "Add Post",
    });
  };
  static addPost = (req, res) => {
    const post = { ...req.body, id: Date.now() };
    const data = dealwithJson.readFromFile(file);
    data.push(post);
    dealwithJson.writeInFile(file,data);
    res.redirect("/");
  };
  static Single = (req, res) => {
    const id = req.params.id;
    const data = dealwithJson.readFromFile(file);
    const post = data.find((p) => p.id == id);
    res.render("Single", {
      pageTitle: "Single Post",
      post,
    });
  };
  static Delete = (req, res) => {
    const id = req.params.id;
    const data = dealwithJson.readFromFile(file);
    const post = data.filter((p) => p.id != id);
    dealwithJson.writeInFile(file, post);
    res.redirect("/");
  };
  static Edit = (req, res) => {
    const id = req.params.id;
    const data = dealwithJson.readFromFile(file);
    const post = data.find((p) => p.id == id);
    res.render("Edit", {
      pageTitle: "Edit Page",
      post,
    });
  };
  static editPost = (req, res) => {
    const id = req.params.id;
    const data = dealwithJson.readFromFile(file);
    const index = data.findIndex((p) => p.id == id);
    console.log(data[index]);
    data[index] = { ...req.body, id: id };
    dealwithJson.writeInFile(file, data);
    res.redirect("/");
  };
}
module.exports = Post;

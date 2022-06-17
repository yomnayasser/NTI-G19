const dbConnection = require("../database/conncection");
const {ObjectId} = require("mongodb");
const { stat } = require("fs");
class User {
  static home = (req, res) => {
    dbConnection((db) => {
      db.collection("users")
        .find()
        .toArray((error, data) => {
            if(error) console.log(error)
          res.render("home", {
            pageTitle: "All Users",
            data,
            isEmpty: !data.length
          });
        });
    });
  };

  static add = (req, res) => {
    res.render("addUser", {
      pageTitle: "Add New User",
    });
  };
  static addUser = (req, res) => {
    const newUser = req.body;
    console.log(newUser)
    dbConnection((db) => {
      db.collection("users")
        .insertOne(newUser)
        .then(() => res.redirect("/"))
        .catch((e) => console.log(e));
    });
  };
  static edit = (req,res) => {
    const userID=req.params.id
      dbConnection((db)=>{
          db.collection("users")
          .findOne({ _id: new ObjectId(userID)})
          .then(
              user=>
              res.render("editUser",{
                  pageTitle:"Edit User",
                  user
              })
          )
      })
  };
  static editUser = (req,res) => {
      const userID=req.params.id
      dbConnection((db)=>{
          db.collection("users")
          .updateOne({ _id: new ObjectId(userID)},{$set:req.body})
          .then(
              res.redirect("/")
          )
      })
  };
  static deleteUser = (req,res) => {
      const id=req.params.id
      dbConnection((db)=>{
          db.collection('users').deleteOne({_id:new ObjectId(id)})
          .then(()=>res.redirect("/"))
      })
  };
  static singleUser = (req,res) => {
    const userID=req.params.id
    dbConnection((db)=>{
        db.collection("users")
        .findOne({ _id: new ObjectId(userID)})
        .then(
            user=>
            res.render("single",{
                pageTitle:"Single User",
                user
            })
        )
    })  
  };

  static changeStatus=(req,res)=>{
    const userID=req.params.id
    let status=req.params.status
    if(status=="active")
    {
      console.log(status)
      status="inactive"
      console.log(status)
    }
    else{
      status="active"
    }
      dbConnection((db)=>{
          db.collection("users")
          .updateOne({ _id: new ObjectId(userID)},{$set:{"status":status}})
          .then(
              res.redirect("/")
          )
      })
  }
}
module.exports = User;

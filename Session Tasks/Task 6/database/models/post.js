const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
    trim:true
  },
  content:{
    type:String,
    required: true,
    trim:true
  },
  image:{
    type:String,
    trim:true
  }
},
{
    timestamps:true
})

postSchema.methods.toJSON = function () {
  const post = this.toObject()
  delete post.__v
  delete post._id
  return post
}

const postModle=mongoose.model("Post",postSchema)

module.exports= postModle;


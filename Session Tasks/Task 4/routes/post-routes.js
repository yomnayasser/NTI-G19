const postController=require('../Controller/post-controller')
const router = require("express").Router()

router.get("/",postController.Home)

router.get("/add",postController.Add)
router.post("/add",postController.addPost)

router.get("/edit/:id",postController.Edit)
router.post("/edit/:id",postController.editPost)

router.get("/delete/:id",postController.Delete)

router.get("/single/:id",postController.Single)

module.exports=router
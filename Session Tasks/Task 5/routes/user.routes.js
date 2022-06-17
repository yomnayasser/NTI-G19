const router = require("express").Router()
const userController=require('../controller/user.controller')

router.get("/",userController.home)

router.get("/addUser",userController.add)
router.post("/addUser",userController.addUser)

router.get("/editUser/:id",userController.edit)
router.post("/editUser/:id",userController.editUser)

router.get("/delete/:id",userController.deleteUser)

router.get("/single/:id",userController.singleUser)

router.get("/status/:id/:status",userController.changeStatus)

module.exports=router
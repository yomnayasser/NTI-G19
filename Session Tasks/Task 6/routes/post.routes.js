const postController = require('../controller/post.controller')
const router = require('express').Router()

router.post('/add',postController.add)

router.get('/single/:id',postController.single)

router.get('/all',postController.showAll)


router.delete('/delete/:id',postController.delete)

router.patch('/update/:id',postController.update)

module.exports=router;
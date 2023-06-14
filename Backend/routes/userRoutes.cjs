const express = require('express');

const Router = express.Router();
const authController = require('../controllers/authController.cjs')
const userController = require('../controllers/useController.cjs');
const cartController = require('../controllers/cartController.cjs')


// Router.get('/' ,  
// authController.protect, 
// userController.getAllusers );
// console.log(userController.getUser);
// console.log(authController.protect);
Router.
route("/").
get( authController.protect, userController.getUser )

// Router
// .route('/addToCart/:productId')
// .post( authController.protect, cartController.addToCart );




// Router.patch('/updateme' ,  authController.protect , upload.single('photo') , userController.updateMe)

Router.post('/signup', authController.signup)
Router.post('/login', authController.login)
Router.post('/reset', authController.resetPassword)
Router.post('/forgotpassword', authController.forgotPassword)

module.exports = Router;
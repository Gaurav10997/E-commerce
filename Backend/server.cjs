require('dotenv').config()
const app = require('./app.cjs')
const path = require('path')
const express = require('express')


const PORT_NO = process.env.PORT||1200 ;


// app.use(express.static(path.join(__dirname, "Frontend","dist")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "Frontend", 'dist', 'index.html'));
// });
// app.all('*',( req, res, next) => {
 
//     next(new AppError(`cant find the ${req.originalUrl} on this server`,404));
//    })
   
   
   // global error handling  mechanism 





app.listen(PORT_NO , ()=>{
    console.log(`App is running on port no ${PORT_NO}`);
})
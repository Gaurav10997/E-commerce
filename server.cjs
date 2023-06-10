const app = require('./app.cjs')

const express = require('express')
const PORT_NO = process.env.PORT || 1200;


app.use(express.static(path.join(__dirname , "./Frontend/dist")))
// app.use('./api/v1/bookings' , bookingRoutes )

app.get("*" , (req, res)=>{
    res.sendFile(path.join(__dirname , "./Frontend/dist/index.html"))
   
})
// app.all('*',( req, res, next) => {
 
//     next(new AppError(`cant find the ${req.originalUrl} on this server`,404));
//    })
   
   
   // global error handling  mechanism 
   app.use(globalErrorHandler)




app.listen(PORT_NO , ()=>{
    console.log(`App is running on port no ${PORT_NO}`);
})
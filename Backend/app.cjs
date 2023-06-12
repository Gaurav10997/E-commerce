const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');
const userRouter = require('./routes/userRoutes.cjs');
const productRouter = require('./routes/productroutes.cjs')
const cartRouter = require('./routes/cartRoutes.cjs')
const AppError = require('./utils/appError.cjs')
const bookingRoutes = require("./routes/bookingRoutes.cjs")
const globalErrorHandler = require('./controllers/errorController.cjs')
const app = express();
app.use(cors());
const assetsRouter = require("./routes/assets_router.cjs");
app.use(express.json());
app.use(morgan('dev'));

// ALL the  Routers 
app.use("/src", assetsRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);


module.exports = app;
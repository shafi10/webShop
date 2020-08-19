const express = require('express');
const data = require('./models/data');
const connectDatabase = require('./config/db');
const path = require('path');

const app = express();
connectDatabase();
app.use(express.json({ extended:false}))

const authRoutes = require('./routes/auth')
const productsRoutes = require('./routes/product');
const orderRoute = require('./routes/order')

app.use('/api',authRoutes);
app.use('/',productsRoutes);
app.use(orderRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
    }


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`surver running on port ${PORT}`)
})
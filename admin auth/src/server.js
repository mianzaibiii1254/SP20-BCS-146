const express = require('express');
const app = express();
const env = require('dotenv')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

//mongodb connection
//mongodb+srv://root:<password>@cluster0.jh15rap.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://root:NVuYWQFXkKHzAINU@cluster0.jh15rap.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log('Database connected');
});
env.config();
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);


// app.get('/',(req,res,next) =>{
//     res.status(200).json({
//         messsage: 'Hello From Server'
//     });
// })

// app.post('/data',(req,res,next) =>{
//     res.status(200).json({
//         messsage: req.body
//     });
// })



app.listen(2000,()=>{
    console.log('Server is running on port 2000')
});
const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');

const app = express();
const distrifunRoutes = require ('./routes/distrifun.routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(distrifunRoutes)

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})
app.listen(3000);

console.log('conectado');
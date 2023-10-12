const app = require('./config/express');


app.get('/', (req, res, next) => {
    res.send('Hello world!')
    next();
});

app.listen(process.env.PORT, console.log("API listening ", process.env.PORT));
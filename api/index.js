const app = require('./config/express');
(async () => {
    const database = require('./database/index.js');
    await database.sync({force: true});
})(); 

app.get('/', (req, res, next) => {
    res.send('Hello world!')
    next();
});

app.listen(process.env.PORT, console.log("API listening ", process.env.PORT));
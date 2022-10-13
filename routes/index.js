const userRoute = require('./users');

const constructorMethod = (app) => {
    app.use('/',userRoute);
    app.use('*',(req,res) => {
        res.status(404).json({error : 'Resource Not found'});
    })
}
module.exports = constructorMethod
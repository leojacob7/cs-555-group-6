const userRoute = require('./users');
const commentRoute = require('./comments');

const constructorMethod = (app) => {
    app.use('/',userRoute);
    app.use('/',commentRoute);
    app.use('*',(req,res) => {
        res.status(404).json({error : 'Resource Not found'});
    })
}
module.exports = constructorMethod
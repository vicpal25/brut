

//Expose Routes to event
module.exports = function(app) {

    app.use('/content', require('./api/content'));

}
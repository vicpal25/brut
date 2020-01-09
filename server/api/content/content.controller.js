const ContentItem = require("../../utils/db");

exports.index = function(req, res) {
    res.status(200).send("From Controller")
}

exports.post = function(req, res) {

        const newItem = new ContentItem({
          name: req.body.name
        });
      
        newItem.save().then(item => {
            res.status(200).send("ok");
        }); 
     
}
var SendMoneyModel = require('../models/sendMoney');

module.exports = {
    createSendMoney: function(req, res) {
        var sendMoneyDetails = req.body;
        console.log("In controller send money createSendMoney");
        SendMoneyModel.addSendMoney(sendMoneyDetails, function (err, result) {
            if (err) {
                console.log("Error creating money details trancsaction:: ", err);
                res.status(500).json(err);
            } else {
                console.log(" money transaction done:: ", result);
                setTimeout(function(){    // added to show the loading feature in UI
                    res.status(201).json(result);
                }, 5000);

            }
        });
    },

    getTransactionHistory: function(req, res) {
        console.log("In controller send money getTransactionHistory");
        SendMoneyModel.getTransactionHistory(function (err, result) {
            if (err) {
                console.log("Error getting money details trancsaction:: ", err);
                res.status(500).json(err);
            } else {
                console.log(" money transaction got:: ", result);
                res.status(200).json(result);
            }
        });
    }
};


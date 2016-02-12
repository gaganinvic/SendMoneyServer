/*!
 * Module dependencies.
 */

var sendMoney = require('./../app/controllers/sendMoney');


/**
 * Expose routes
 */

module.exports = function(app) {
    app.post('/sendMoney', sendMoney.createSendMoney);
    app.get('/history', sendMoney.getTransactionHistory);

}

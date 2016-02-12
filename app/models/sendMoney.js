module.exports = {
    addSendMoney: function(sendMoneyDetails, callback) {
        // from here we can call the Database to save
        // At present we are not using DB

        var data = {
            "message" : "Send Money successful"
        }
        callback (null, data);
    },

    getTransactionHistory: function(callback) {
        // from here we can call the Database to get data
        // At present we are not using DB

        var data = [
            {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },
            {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : "$"
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : "$"
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : "$"
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : "$"
            }
        ];
        callback(null, data);

    }

};
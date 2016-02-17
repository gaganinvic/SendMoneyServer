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
                "currency" : {id: '&pound;', name: 'EUR'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '&yen;', name: 'JPY'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '&pound;', name: 'EUR'}
            },
            {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '&yen;', name: 'JPY'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            },           {
                "sentOn" : "12/5/2013",
                "sentTo" : "John Doe",
                "amount" : 123.45,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "12/1/2013",
                "sentTo" : "Starbucks",
                "amount" : 3.34,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/22/2013",
                "sentTo" : "Jane Jones",
                "amount" : 10.00,
                "currency" : {id: '$', name: 'USD'}
            },
            {
                "sentOn" : "11/6/2013",
                "sentTo" : "Applebee",
                "amount" : 35.42,
                "currency" : {id: '$', name: 'USD'}
            }
        ];
        callback(null, data);

    }

};
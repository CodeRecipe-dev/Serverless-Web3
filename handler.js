var AWS = require('aws-sdk');
var lambda = new AWS.Lambda();
var web3 = require('web3');
var Tx = require('ethereumjs-tx');

exports.handler = function(event, context) {
		var toAddress = event['body']['toAddress']
		var ethAmount = event['body']['ethAmount']
		var web3js = new web3(new web3.providers.HttpProvider(process.env.ROPSTEN_INFURA_URL);
		var txData = web3js.utils.asciiToHex('sample web3 demo');

		web3js.eth.getTransactionCount(process.env.ETH_FROM_ADDRESS, function(err, nonce){
			var rawTransaction = {
				"from": process.env.ETH_FROM_ADDRESS,
				"nonce": nonce,
				"gasPrice": web3js.utils.toHex(30 * 1e9),
				"gasLimit": web3js.utils.toHex(210000),
				"to": toAddress,
				"value": web3js.utils.numberToHex(web3js.utils.toWei(ethAmount, 'ether')),
				"data": txData
			};

			var privateKey = new Buffer(process.env.ETH_PRIV_KEY, 'hex');
			var tx = new Tx(rawTransaction);
			tx.sign(privateKey);
			var serializedTx = tx.serialize();

			web3js.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
				if (!err)
				{
					context.succeed(hash);
					console.log(hash);
				}
				else
				{
					console.error(err);
					context.fail(err);
				}
			});
		})
};
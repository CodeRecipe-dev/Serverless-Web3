# Web3 on AWS Lambda for Serverless Ethereum Development
More info here: https://coderecipe.ai/architectures/57148351

**Problem Statment**

Build serverless apps using [Web3]([https://github.com/ethereum/web3.js/](https://github.com/ethereum/web3.js/)) library on AWS Lambda. Currently, the web3.js library requires native extensions which have to be manually installed in the same environment as AWS Lambda.

**Solution**

Using serverless-plugin-scripts and docker to precompile node modules and native extensions to build a working deployment of web3.js on AWS Lambda.

**Prerequisites**
```
npm install serverless

export AWS_ACCESS_KEY_ID=<your-key-here>

export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```
**Deploy**

```
serverless create --template-url https://github.com/CodeRecipe-dev/Serverless-Web3 --path serverless-web3

cd serverless-web3

npm install

serverless deploy --stage sample --ROPSTEN_INFURA_URL "https://ropsten.infura.io/v3/KEY" --ETH_PRIV_KEY PRIVATE_KEY --ETH_FROM_ADDRESS ETH_FROM_ADDRESS
```

**Invoke**

```
serverless invoke -f EthHandler -d {'body': {'toAddress':'0x', 'ethAmount': 0.001}} --stage sample --ROPSTEN_INFURA_URL "https://ropsten.infura.io/v3/KEY" --ETH_PRIV_KEY PRIVATE_KEY --ETH_FROM_ADDRESS ETH_FROM_ADDRESS
```

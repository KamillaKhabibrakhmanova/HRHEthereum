var web3 = new Web3();web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));web3.eth.defaultAccount = web3.eth.accounts[0];blockchain = {"testnet":false,"rpcHost":"localhost","rpcPort":8101,"gasLimit":500000,"gasPrice":10000000000000,"rpcWhitelist":"*","nat":[],"minerthreads":1,"genesisBlock":"config/genesis/dev_genesis.json","datadir":"/tmp/embark","chains":"config/chains/development.json","bootNodes":[],"deployTimeout":20,"networkId":47711,"maxPeers":4,"mine":false,"port":"30303","console_toggle":false,"mine_when_needed":true,"whisper":false,"account":{"init":true,"password":"config/password"},"geth_extra_opts":[],"deploy_synchronously":false};MeshWallAbi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"messages","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMessages","outputs":[{"name":"","type":"bytes32[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"messageId","type":"uint256"}],"name":"getMessage","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"recipient","type":"address"}],"name":"collectDonations","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"}],"name":"sendMessage","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"category","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMessageLength","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"messageId","type":"uint256"}],"name":"newMessage","type":"event"}];MeshWallContract = web3.eth.contract(MeshWallAbi);MeshWall = MeshWallContract.at('0x2cbf8d27a7955e49a67ba8c60380aec924dcd3fa');contractDB = {"MeshWall":{"args":[100],"types":["file"],"gasPrice":10000000000000,"gasLimit":500000,"compiled":{"code":"6060604052610409806100126000396000f3606060405236156100825760e060020a60003504630d80fefd81146100845780633dbcc8d1146100c15780635ff6cbf3146100ca57806386f79edb1461012f5780638da5cb5b14610173578063ae4b5cb814610185578063e12c9ca8146101d0578063ef430aa614610225578063f2fde38b14610284578063f5701ede146102c4575b005b6102ce60043560028054829081101561000257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015481565b6102ce60035481565b604080516020818101835260008252600280548451818402810184019095528085526102e0949283018282801561012357602002820191906000526020600020905b81600050548152602001906001019080831161010c575b505050505090506102cb565b6102ce60043560006002600050828154811015610002575090527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace8101545b919050565b61032a600054600160a060020a031681565b61008260043560243560005433600160a060020a03908116911614156103b557604051600160a060020a03821690600090849082818181858883f1935050505015156103b557610002565b6102ce600435600380546001908101909155600280549182018082556000929082818380158290116103b9578183600052602060002091820191016103b991905b808211156103d25760008155600101610211565b61034760018054604080516020601f6002600019868816156101000201909516949094049384018190048102820181019092528281529291908301828280156104015780601f106103d657610100808354040283529160200191610401565b61008260043560005433600160a060020a03908116911614156102c1576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6102ce6002545b90565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b5050565b505050600092835250602090912001829055508061016e565b5090565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b50505050508156","runtimeBytecode":"606060405236156100825760e060020a60003504630d80fefd81146100845780633dbcc8d1146100c15780635ff6cbf3146100ca57806386f79edb1461012f5780638da5cb5b14610173578063ae4b5cb814610185578063e12c9ca8146101d0578063ef430aa614610225578063f2fde38b14610284578063f5701ede146102c4575b005b6102ce60043560028054829081101561000257506000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015481565b6102ce60035481565b604080516020818101835260008252600280548451818402810184019095528085526102e0949283018282801561012357602002820191906000526020600020905b81600050548152602001906001019080831161010c575b505050505090506102cb565b6102ce60043560006002600050828154811015610002575090527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace8101545b919050565b61032a600054600160a060020a031681565b61008260043560243560005433600160a060020a03908116911614156103b557604051600160a060020a03821690600090849082818181858883f1935050505015156103b557610002565b6102ce600435600380546001908101909155600280549182018082556000929082818380158290116103b9578183600052602060002091820191016103b991905b808211156103d25760008155600101610211565b61034760018054604080516020601f6002600019868816156101000201909516949094049384018190048102820181019092528281529291908301828280156104015780601f106103d657610100808354040283529160200191610401565b61008260043560005433600160a060020a03908116911614156102c1576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b50565b6102ce6002545b90565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b5050565b505050600092835250602090912001829055508061016e565b5090565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b50505050508156","info":{"abiDefinition":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"messages","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMessages","outputs":[{"name":"","type":"bytes32[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"messageId","type":"uint256"}],"name":"getMessage","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"recipient","type":"address"}],"name":"collectDonations","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"}],"name":"sendMessage","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"category","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMessageLength","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"messageId","type":"uint256"}],"name":"newMessage","type":"event"}]}},"onDeploy":[],"deploy":true}};
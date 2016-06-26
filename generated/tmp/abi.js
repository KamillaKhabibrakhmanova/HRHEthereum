var web3 = new Web3();web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));web3.eth.defaultAccount = web3.eth.accounts[0];blockchain = {"testnet":false,"rpcHost":"localhost","rpcPort":8101,"gasLimit":500000,"gasPrice":10000000000000,"rpcWhitelist":"*","nat":[],"minerthreads":1,"genesisBlock":"config/genesis/dev_genesis.json","datadir":"/tmp/embark","chains":"config/chains/development.json","bootNodes":[],"deployTimeout":20,"networkId":24421,"maxPeers":4,"mine":false,"port":"30303","console_toggle":false,"mine_when_needed":true,"whisper":false,"account":{"init":true,"password":"config/password"},"geth_extra_opts":[],"deploy_synchronously":false};MeshWallAbi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"messages","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"sendMessage","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getMessages","outputs":[{"name":"messages","type":"bytes32[]"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"recipient","type":"address"}],"name":"collectDonations","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"category","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMessageLength","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"messageId","type":"uint256"}],"name":"newMessage","type":"event"}];MeshWallContract = web3.eth.contract(MeshWallAbi);MeshWall = MeshWallContract.at('0x8c2b0f6224bca9bb1b5d8cfcdf6fa983ae0557b7');contractDB = {"MeshWall":{"args":[100],"types":["file"],"gasPrice":10000000000000,"gasLimit":500000,"compiled":{"code":"60606040526105f0806100126000396000f3606060405236156100825760e060020a60003504630d80fefd81146100845780633dbcc8d114610117578063469c8110146101205780635ff6cbf3146101a35780638da5cb5b146101b9578063ae4b5cb8146101cb578063ce6d41de14610217578063ef430aa6146102b2578063f2fde38b14610311578063f5701ede14610350575b005b61036360043560028054829081101561000257506000819052604080517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909301805460206001821615610100026000190190911693909304601f8101849004840285018401909252818452918301828280156104755780601f1061044a57610100808354040283529160200191610475565b6103d160035481565b6040805160206004803580820135601f81018490048402850184019095528484526100829491936024939092918401919081908401838280828437509496505050505050506003805460019081019091556002805491820180825590919082818380158290116104b2578183600052602060002091820191016104b29190610521565b6103e36040805160208101909152600081525b90565b61042d600054600160a060020a031681565b610082600435602435600054600160a060020a039081163390911614156105b557604051600160a060020a03821690600090849082818181858883f1935050505015156105b557610002565b6103636040805160208101909152600080825260028054909190811015610002578190527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace80546040805160206001841615610100026000190190931694909404601f8101839004830285018301909152808452908301828280156105e45780601f106105b9576101008083540402835291602001916105e4565b61036360018054604080516020601f6002600019868816156101000201909516949094049384018190048102820181019092528281529291908301828280156104755780601f1061044a57610100808354040283529160200191610475565b61008260043560005433600160a060020a03908116911614156104af576000805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b6103d160038054600101908190556101b6565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b505050505081565b50506003546040519091507fb06d4e59b43a14f44108296b851e7b48a2afaa842f02996132f2fe83a348273590600090a25b50565b5050509190906000526020600020900160008390919091509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061058557805160ff19168380011785555b5061047d92915061056d565b50506001015b80821115610581576000818150805460018160011615610100020316600290046000825580601f10610553575061051b565b601f01602090049060005260206000209081019061051b91905b80821115610581576000815560010161056d565b5090565b8280016001018555821561050f579182015b8281111561050f578251826000505591602001919060010190610597565b5050565b820191906000526020600020905b8154815290600101906020018083116105c757829003601f168201915b505050505090506101b656","runtimeBytecode":"606060405236156100825760e060020a60003504630d80fefd81146100845780633dbcc8d114610117578063469c8110146101205780635ff6cbf3146101a35780638da5cb5b146101b9578063ae4b5cb8146101cb578063ce6d41de14610217578063ef430aa6146102b2578063f2fde38b14610311578063f5701ede14610350575b005b61036360043560028054829081101561000257506000819052604080517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909301805460206001821615610100026000190190911693909304601f8101849004840285018401909252818452918301828280156104755780601f1061044a57610100808354040283529160200191610475565b6103d160035481565b6040805160206004803580820135601f81018490048402850184019095528484526100829491936024939092918401919081908401838280828437509496505050505050506003805460019081019091556002805491820180825590919082818380158290116104b2578183600052602060002091820191016104b29190610521565b6103e36040805160208101909152600081525b90565b61042d600054600160a060020a031681565b610082600435602435600054600160a060020a039081163390911614156105b557604051600160a060020a03821690600090849082818181858883f1935050505015156105b557610002565b6103636040805160208101909152600080825260028054909190811015610002578190527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace80546040805160206001841615610100026000190190931694909404601f8101839004830285018301909152808452908301828280156105e45780601f106105b9576101008083540402835291602001916105e4565b61036360018054604080516020601f6002600019868816156101000201909516949094049384018190048102820181019092528281529291908301828280156104755780601f1061044a57610100808354040283529160200191610475565b61008260043560005433600160a060020a03908116911614156104af576000805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b6103d160038054600101908190556101b6565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103c35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b505050505081565b50506003546040519091507fb06d4e59b43a14f44108296b851e7b48a2afaa842f02996132f2fe83a348273590600090a25b50565b5050509190906000526020600020900160008390919091509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061058557805160ff19168380011785555b5061047d92915061056d565b50506001015b80821115610581576000818150805460018160011615610100020316600290046000825580601f10610553575061051b565b601f01602090049060005260206000209081019061051b91905b80821115610581576000815560010161056d565b5090565b8280016001018555821561050f579182015b8281111561050f578251826000505591602001919060010190610597565b5050565b820191906000526020600020905b8154815290600101906020018083116105c757829003601f168201915b505050505090506101b656","info":{"abiDefinition":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"messages","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"sendMessage","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getMessages","outputs":[{"name":"messages","type":"bytes32[]"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"recipient","type":"address"}],"name":"collectDonations","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"category","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getMessageLength","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"messageId","type":"uint256"}],"name":"newMessage","type":"event"}]}},"onDeploy":[],"deploy":true}};
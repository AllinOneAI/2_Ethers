//import {detectEthereumProvider} from "./detect-provider.min.js"
import {ethers} from "./ethers.js";
                                                                    
                                                                //regex functionality
const amount = document.getElementById("amount");
const to = document.getElementById("to");
to.addEventListener("input", getRegexChecker(to));                                                                
amount.addEventListener("input", getRegexChecker(amount));  

document.getElementById("connect").addEventListener("click", connect);
document.getElementById("submit").addEventListener("click", sendETH);

const bal = document.getElementById("bal");
const addr = document.getElementById("addr");
let accounts = [];

let provider;
let signer;
let wallet;

const meta = await detectEthereumProvider({
    mustBeMetaMask: true
});

if (meta) {
    console.log(meta); 
    init();
} else {
    console.log('Please install MetaMask!');
}


async function connect() {
    accounts = await provider.send("eth_requestAccounts", []);
    addr.textContent = String(accounts[0]); 
    let balance = await signer.getBalance();
    bal.textContent = ethers.utils.formatEther(balance) + " GETH";
}

async function sendETH(){
    const tx = {
        from: accounts[0],
        to: String(to.value),
        value: ethers.utils.parseEther(String(amount.value)),
        //nonce: await provider.getTransactionCount(DefaultAccount, "latest"),
        gasLimit: ethers.utils.hexlify(210000),
        //gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
    };
    signer.sendTransaction(tx);
}

async function init(){
    provider = new ethers.providers.Web3Provider(meta);
    signer = provider.getSigner();
}

function getRegexChecker(obj) {
    return () => {
        console.log("A");
        let reg = new RegExp(obj.pattern);
        if (!reg.test(obj.value)) {
            obj.value = "";
        }
    }
}

meta.on("accountsChanged", (a) => {
    accounts[0] = a;
    console.log("a");
    addr.textContent = String(accounts[0]);
});








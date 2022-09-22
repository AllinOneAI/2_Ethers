//import {detectEthereumProvider} from "./detect-provider.min.js"
import {ethers} from "./ethers.js";
    
document.getElementById("submit").addEventListener("click", petya);
const account = document.getElementById("account");

let accounts = [];


async function petya(){
    accounts = await ethereum.request({method: "eth_accounts"});
    //accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account.textContent = String(accounts[0]);
    console.log(accounts[0]);
} 

const meta = await detectEthereumProvider({
    mustBeMetaMask: true
});

if (meta) {
  console.log(meta); // initialize your app
  //accounts = await ethereum.request({ method: "eth_requestAccounts" });
   //console.log(accounts[0]);
} else {
  console.log('Please install MetaMask!');
}

meta.on("accountsChanged", (a) => {
    accounts[0] = a;
    account.textContent = String(accounts[0]);
});










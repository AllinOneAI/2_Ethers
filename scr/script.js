import {ethers} from "./ethers-5.6.esm.min.js";
//import detectEthereumProvider from "./detect-provider.min.js"

const to = document.querySelector("#to");
const check = document.querySelector("#button");
const reg   = new RegExp(to.pattern);

const address = document.querySelector("#address");
const balance = document.querySelector("#balance");



const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
//const signer = await provider.getSigner();
provider.on("accountsChanged", petro());

async function petro() {
    let signer = await provider.getSigner();
    let addr = await signer.getAddress();
    address.textContent = addr;
    console.log(addr);

}
 



to.oninput = () => {
    if (!reg.test(input.value)) {
        input.value = "";
        check.disabled = true
    } else {
        check.disabled = false
    }
};

check.onclick = () => {
    
};



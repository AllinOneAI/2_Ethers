import {ethers} from "./ethers.js";
//import detectEthereumProvider from "./detect-provider.min.js"

const connect = document.querySelector("#connect");
const to = document.querySelector("#to");
const amount = document.querySelector("#amount");
const submit = document.querySelector("#submit");
const reg   = new RegExp(to.pattern);

const address = document.querySelector("#address");
const balance = document.querySelector("#balance");

let accounts = [];

async function getAccs(){
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

let petro = new ethers.providers.Web3Provider(window.ethereum)

to.oninput = () => {
    if (!reg.test(to.value)) {
        to.value = "";
        submit.disabled = true
    } else {
        submit.disabled = false
    }
};



conect.onclick = () => {
    getAccs();
}



submit.onclick = () => {
    console.log(ethers.utils.parseEther(amount.value).toString());
    ethereum.request({
        method: "eth_sendTransaction",
        params:[
            {
                from: accounts[0],
                to: to.value,
                value: ethers.utils.parseEther(amount.value).toHexString(),
                gasPrice: "50000000000"
            },
        ],
    })
}



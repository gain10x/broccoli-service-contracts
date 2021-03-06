import * as uuid from 'uuid'
import rateLimit from '../../utils/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

const contract_abi = [{"inputs":[{"internalType":"address","name":"_investToken","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_minInvest","type":"uint256"},{"internalType":"uint256","name":"_maxInvest","type":"uint256"},{"internalType":"uint256","name":"_maxToCollect","type":"uint256"},{"internalType":"address","name":"_fundsRedeemer","type":"address"},{"internalType":"address","name":"_nrt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RedeemEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SaleEnabled","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositmLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundsRedeemer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxToCollect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mlaunchToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nrt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newfundsRedeemer","type":"address"}],"name":"setNewFundsRedeemer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_mlaunchToken","type":"address"}],"name":"setmLaunchToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalIssued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFundsRedeemer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawmLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contract_address = "0x02d602dF4748D18919Aa9277Dd4e4003d9797214";
const wavax_address = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
const invest_token_address = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";
const cadena = "0xa86a"
const amegnx_addres = "0x1c674c67E353cDB4e2d1A932FE087ECc312ec0c8";
const router_address = "0x60aE616a2155Ee3d9A68541Ba4544862310933d4";

//  ##############################################################  User READ
const _account = {
    chain: cadena,
    address: ""
    //   from_block: "8961689"
  }

//  ##############################################################  READ Functions

const _duration = {
    chain: cadena,
    address: contract_address,
    function_name: "duration",
    abi: [{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _end_time = {
    chain: cadena,
    address: contract_address,
    function_name: "endTime",
    abi: [{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _has_sale_ended = {
    chain: cadena,
    address: contract_address,
    function_name: "hasSaleEnded",
    abi: [{"inputs":[],"name":"hasSaleEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const _invest_token = {
    chain: cadena,
    address: contract_address,
    function_name: "investToken",
    abi: [{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
}


const _max_invest = {
    chain: cadena,
    address: contract_address,
    function_name: "maxInvest",
    abi: [{"inputs":[],"name":"maxInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _max_to_collect = {
    chain: cadena,
    address: contract_address,
    function_name: "maxToCollect",
    abi: [{"inputs":[],"name":"maxToCollect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _min_invest = {
    chain: cadena,
    address: contract_address,
    function_name: "minInvest",
    abi: [{"inputs":[],"name":"minInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _nrt = {
    chain: cadena,
    address: contract_address,
    function_name: "nrt",
    abi: [{"inputs":[],"name":"nrt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
}

const _num_invested = {
    chain: cadena,
    address: contract_address,
    function_name: "numInvested",
    abi: [{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _price = {
    chain: cadena,
    address: contract_address,
    function_name: "price",
    abi: [{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _redeem_enabled = {
    chain: cadena,
    address: contract_address,
    function_name: "redeemEnabled",
    abi: [{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const _sale_enabled = {
    chain: cadena,
    address: contract_address,
    function_name: "saleEnabled",
    abi: [{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const _start_time = {
    chain: cadena,
    address: contract_address,
    function_name: "startTime",
    abi: [{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_issued = {
    chain: cadena,
    address: contract_address,
    function_name: "totalIssued",
    abi: [{"inputs":[],"name":"totalIssued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}


const _total_raised = {
    chain: cadena,
    address: contract_address,
    function_name: "totalRaised",
    abi: [{"inputs":[],"name":"totalRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_redeem = {
    chain: cadena,
    address: contract_address,
    function_name: "totalRedeem",
    abi: [{"inputs":[],"name":"totalRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

//  ##############################################################  WRITE Functions

const _invest = {
    chain: cadena,
    address: contract_address,
    function_name: "invest",
    abi: [{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    params: { investAmount : ""}
}

const _redeem = {
    chain: cadena,
    address: contract_address,
    function_name: "redeem",
    abi: [{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"}]
}

//  ##############################################################  READ Functions for the stable coin (investToken)

const _allowance = {
    chain: cadena,
    address: invest_token_address,
    function_name: "allowance",
    abi: [{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
    params: {owner: "", spender: ""}
}

const _balance_of = {
    chain: cadena,
    address: "",
    function_name: "balanceOf",
    abi: [{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
    params: {account: ""}
}


//  ##############################################################  WRITE Functions for the stable coin (investToken)
const _approve = {
    chain: cadena,
    address: invest_token_address,
    function_name: "approve",
    abi: [{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],
    params: { spender : "", amount: "" }
}

//  ##############################################################  READ Functions for Router

const _get_amounts_out = {
    chain: cadena,
    address: router_address, 
    function_name: "getAmountsOut",
    abi: [{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"}],
    params: { amountIn : "", path: [wavax_address, invest_token_address]}
}



export default async function handler(req, res) {
    try {
      await limiter.check(res, 30, 'CACHE_TOKEN') // 10 requests per minute
      res.status(200).json({ id: uuid.v4(), 
                                account: _account,
                                duration: _duration, endTime: _end_time, hasSaleEnded: _has_sale_ended, investToken: _invest_token,
                                maxInvest: _max_invest, maxToCollect: _max_to_collect, minInvest: _min_invest, nrt: _nrt, numInvested: _num_invested, price: _price, redeemEnabled: _redeem_enabled, saleEnabled: _sale_enabled, 
                                startTime: _start_time, totalIssued: _total_issued, totalRaised: _total_raised, totalRedeem: _total_redeem,
                                allowance: _allowance, balanceOf: _balance_of, approve: _approve,
                                getAmountsOut: _get_amounts_out,
                                investTokenAddress: invest_token_address, contractAddress: contract_address, ameGNXAddress: amegnx_addres, contractABI: contract_abi, routerAddress: router_address})
    } catch {
      res.status(429).json({ error: 'Rate limit exceeded' })
    }
}

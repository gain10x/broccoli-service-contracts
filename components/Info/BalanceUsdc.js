import React from "react";
import { Moralis } from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";


export default function BalanceUsdc({ user }) {
    const [balance, setBalance] = useState(0)
    const Web3Api = useMoralisWeb3Api()

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
        try {
            const res = await fetch('/api/firstAuction')
            const options = await res.json()

            const options1 = options.balanceOf
            options1.address = options.investTokenAddress
            options1.params.account = user.get("ethAddress")
            const usdc_balance = await Web3Api.native.runContractFunction(options1)
            if (usdc_balance) {
                setBalance(Moralis.Units.FromWei(usdc_balance, 6))
            }
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <>
            <Text class="text-2xl" fontWeight="bold" color="dark">{balance && <b>{balance}</b>}</Text>
        </>
    )
}


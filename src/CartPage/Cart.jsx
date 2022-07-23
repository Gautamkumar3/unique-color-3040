import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartCard from './CartCard';

function Cart() {
    const [cartData, setCardData] = useState([]);
    useEffect(() => {
        axios.get("https://netmeds-new-api.herokuapp.com/cart").then((res) => {
            setCardData(res.data)
        })
    }, []);
    console.log(cartData)


    return (
        <Box>
            {cartData.length !== 0 ? <Box>
                {cartData.map((item) => <CartCard key={item.id} data={item} />)}
            </Box> : null}
        </Box>
    )
}

export default Cart

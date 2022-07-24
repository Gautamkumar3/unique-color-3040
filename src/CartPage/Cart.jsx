import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Authenticate/AuthContext';
import PaymentDetails from '../Payment/PaymentDetails';
import CartCard from './CartCard';

function Cart() {

    const { cartData, deleteCartItem, S = "Order Summary" } = useContext(AuthContext);

    // const IncreaseCartQty = (id) => {
    //     console.log(id)
    // }
    // const DecreaseCartQty = (id) => {
    //     console.log(id)
    // }

    // ################ for cart total ############ 
    // for (let el of cartData) {
    //     console.log(el.price.split("").filter((el) => el !== ",").join(""));
    //    agar number me comma laga ho to 
    // }

    const TotalPrice = cartData.reduce((acc, el) => (acc + Number(el.price.split("").filter((el) => el !== ",").join("")) * el.qty), 0)

    const fPrice = TotalPrice.toFixed(2);



    const FullPrice = cartData.reduce((acc, el) => (acc + Number(el.Fprice.split("").filter((el) => el !== ",").join("")) * el.qty), 0)
    const PwithoutDis = FullPrice.toFixed(2);




    return (

        <Flex gap={8} w="70%" margin="auto" marginTop={10}>


            <Box>
                <Heading marginBottom={10}>{S}</Heading>
                <Text>PRODUCTS</Text>
                {cartData.length !== 0 ? <Box>
                    {cartData.map((item) => <CartCard key={item.id} data={item} deleteCartItem={deleteCartItem} />)}
                </Box> : null}
            </Box>
            <PaymentDetails price={fPrice} total={PwithoutDis} />
        </Flex>
    )
}

export default Cart

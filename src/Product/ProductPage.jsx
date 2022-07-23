import { Box, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navlow from '../Components/Navlow'
import HealthConcern from '../Home/HealthConcern'
import ProductCard from '../Home/ProductCard'
import ProductCategoryName from '../Home/ProductCategoryName'

function ProductPage() {

    const [productPageData, setProductPageData] = useState([])

    useEffect(() => {
        axios.get("https://netmeds-new-api.herokuapp.com/products").then((res) => {
            setProductPageData(res.data)
        }).catch(er => {
            console.log(er)
        })
    }, [])


    return (
        <Box >
            <Navlow />
            <ProductCategoryName />
            <Flex>
                <Heading fontWeight={400} fontSize="25px" color="gray" marginLeft="50px">All Products  </Heading>
                <Heading fontWeight={400} fontSize="25px" color="gray" marginLeft="10px"> {productPageData.length}</Heading>
            </Flex>

            <Flex marginBottom="100px" w="95%" gap="20px" m="auto" marginTop={5} flexWrap="wrap" >
                {productPageData.map((item) => <ProductCard key={item.title} item={item} />)}
            </Flex>
            <Footer />
        </Box>

    )
}

export default ProductPage

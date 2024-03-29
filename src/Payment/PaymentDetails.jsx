import { Box, Button, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PaymentDetails({ price, total }) {

    const navigate = useNavigate()

    const Discount = (total - price).toFixed(2)

    return (
        <Box w="50%" maxH="320px" padding={5} borderRadius="10px" boxShadow='base' position="sticky" top="200px">
            <Text letterSpacing={1} color="gray.500" fontSize="sm" paddingBottom="20px">PAYMENT DETAILS</Text>
            <Flex justify="space-between" color="blackAlpha.700" paddingBottom="10px">
                <Text>MRP Total</Text>
                <Text>RS. {total}</Text>
            </Flex>
            <Flex justify="space-between" color="blackAlpha.700" paddingBottom="10px">
                <Text>Netmeds Discount</Text>
                <Text>RS. {Discount}</Text>
            </Flex>
            <Flex justify="space-between" fontWeight="bold" paddingBottom="10px">
                <Text>Total Amount *</Text>
                <Text>{price}</Text>
            </Flex>
            <Box marginTop={3} background="#f3f8ec" p="10px" color="#378f30"  >
                <Text fontSize="sm" fontWeight="bold">TOTAL SAVINGS RS <span>{Discount}</span></Text>
            </Box>
            <Grid p={2} marginTop={5} templateColumns="repeat(2,1fr)" templateRows="repeat(2,1fr)" columnGap={2} >
                <GridItem rowSpan={1} colSpan={1} padding={1}>
                    <Text fontSize="12px" letterSpacing="1px" color="gray">TOTAL AMOUNT</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} paddingTop={1}>
                    <Center>
                        <Button bg="teal" color="white" onClick={() => (navigate("/address"))}>PROCEED</Button>
                    </Center>

                </GridItem>
                <GridItem rowSpan={1} colSpan={1} >
                    <Text fontWeight="bold"  >RS. {price}</Text>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default PaymentDetails

import { Box, Grid, Image, VStack, HStack, Heading, Button, Text, Flex, Spacer } from "@chakra-ui/react";

export default function ImgCard() {
    return (
        <>
            <HStack w="90%" margin="auto" gap={10} marginTop={10} >
                <Image src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1643047630_Web_Banner_436x244pxl.jpg' alt='Dan Abramov' />
                <Image src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1654696818_Healthvit_436-px-224px-home-page.jpg' alt='Dan Abramov' />
                <Image src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1657800082_Mini-banner_web.jpg' alt='Dan Abramov' />
            </HStack>
            <Flex width="95%" margin="auto" marginTop={10}>
                <Text marginLeft="20px" fontSize='3xl'>Payment Partner Offers</Text>
                <Spacer />
                <Button display="flex" justifyContent="right" colorScheme='white' color="tomato" size='md'>View All</Button>
            </Flex>
            <HStack w="95%" margin="auto" marginTop={2} >
                <Flex boxShadow='base' p='6' rounded='md' bg='#f8f9fa'>
                    <Box width="100px" marginRight="25px">
                        <Image
                            borderRadius='full'
                            boxSize='50px'
                            src='https://www.netmeds.com/images/cms/offers/1657032164_Simpl_Icon.png'
                            alt='logo'
                        />
                    </Box>

                    <Box>
                        <VStack>
                            <Heading width="full" fontSize="sm">Get up to Rs. 1000 Simpl Cashback* (8%)!</Heading>
                            <Text fontSize="xs">Today only! Get up to Rs 1000 Simpl Cashback (8%) on FIRST-EVER payment made via Simpl towards ANY purchases* worth ANY value on Netmeds. </Text>
                        </VStack>
                    </Box>
                </Flex>
                <Spacer />
                <Flex boxShadow='base' p='6' rounded='md' bg='#f8f9fa'>
                    <Box width="100px" marginRight="25px">
                        <Image
                            borderRadius='full'
                            boxSize='50px'
                            src='https://www.netmeds.com/images/cms/offers/1657032164_Simpl_Icon.png'
                            alt='logo'
                        />
                    </Box>

                    <Box>
                        <VStack>
                            <Heading width="full" fontSize="sm">Get up to Rs. 1000 Simpl Cashback* (4%)!</Heading>
                            <Text fontSize="xs">Today only! Get up to Rs 1000 Simpl Cashback (4%) on FIRST-EVER payment made via Simpl towards ANY purchases* worth ANY value on Netmeds. </Text>
                        </VStack>
                    </Box>
                </Flex>
                <Spacer />
                <Flex boxShadow='base' p='6' rounded='md' bg='#f8f9fa'>
                    <Box width="100px" marginRight="25px">
                        <Image
                            borderRadius='full'
                            boxSize='50px'
                            src='https://www.netmeds.com/images/cms/offers/1616682689_paytm.png'
                            alt='logo'
                        />
                    </Box>

                    <Box>
                        <VStack>
                            <Heading width="full" fontSize="sm"> Get up to Rs. 300 Paytm Cashback!</Heading>
                            <Text fontSize="xs">TGet Paytm Cashback between max. Rs. 300 and min. Rs. 30 on a minimum purchase of ANY products* worth Rs. 899, when you only pay via Paytm wallet on Netmeds website/app </Text>
                        </VStack>
                    </Box>
                </Flex>
            </HStack>

        </>
    )

}
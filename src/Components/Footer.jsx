import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Box, Flex, Image, Spacer, Text, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box h="500px" w="85%" margin="auto" p="10px" marginTop={14} borderRadius="10px">
            <Flex>
                <Box>
                    <Image src='https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg' alt='logo' />
                </Box>
                <Spacer />
                <Box marginLeft="50px">
                    <Text color="gray.500">Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.</Text>
                </Box>
            </Flex>
            <br /><br />
            <hr />
            <Flex margin="40px 0px">
                <UnorderedList listStyleType="none" lineHeight="30px">
                    <ListItem fontWeight="bold" color="black">COMPANY</ListItem>
                    <ListItem>About Netmeds</ListItem>
                    <ListItem>Customers Speak</ListItem>
                    <ListItem>In the News</ListItem>
                    <ListItem>Career</ListItem>
                    <ListItem>Terms and Condition</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>Fees and Payments Policy</ListItem>
                    <ListItem>Shipping and Delivery Policy</ListItem>
                    <ListItem>Return, Refund and Cancellation Policy</ListItem>
                    <ListItem>Contact</ListItem>
                </UnorderedList>
                <Spacer />
                <UnorderedList listStyleType="none" lineHeight="30px">
                    <ListItem fontWeight="bold" color="black">SHOPPING</ListItem>
                    <ListItem>Browse by A-Z</ListItem>
                    <ListItem>Browse by Manufacturers</ListItem>
                    <ListItem>Health Articles</ListItem>
                    <ListItem>Offers / Coupons</ListItem>
                    <ListItem>FAQs</ListItem>
                </UnorderedList>
                <Spacer />
                <UnorderedList listStyleType="none" lineHeight="30px">
                    <ListItem fontWeight="bold" color="black">SOCIAL</ListItem>
                    <ListItem>Patients Alike</ListItem>
                    <ListItem>Facebook</ListItem>
                    <ListItem>Twitter</ListItem>
                    <ListItem>LinkedIn</ListItem>
                    <ListItem>Youtube</ListItem>
                    <ListItem>Refer & Earn</ListItem>
                </UnorderedList>
                <Spacer />
                <Box w="25%">
                    <Text fontWeight="bold" marginBottom="15px">SUBSCRIBE TO OUR NEWSLETTER</Text>
                    <Text>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</Text>
                    <InputGroup marginTop={8}>
                        <InputRightElement
                            pointerEvents='none'
                            children={<ArrowForwardIcon color='#32aeb1' w={6} />}
                        />
                        <Input type='tel' placeholder='Enter Your Email Address' border="hidden" borderRadius={0} borderBottom="1px solid gray" />
                    </InputGroup>
                    <Flex width="full" marginTop={5}>
                        <Image w={150} src='https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png' alt='logo' />
                        <Spacer />
                        <Image w={150} src='https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png' alt='logo' />
                    </Flex>
                </Box>
            </Flex>
            <br /><br />
            <Flex h="80px" borderY="1px solid gray" alignItems="center">
                <Text>Medicine</Text>
                <Spacer />
                <Text>Wellness</Text>
                <Spacer />
                <Text>Lab Tests</Text>
                <Spacer />
                <Text>Beauty</Text>
                <Spacer />
                <Text>Copyright© 2022. All Rights Reserved.</Text>
            </Flex>
        </Box >

    )
}
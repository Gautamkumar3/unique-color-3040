import { AddIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Box, Text, Center, Flex, Heading, Icon
} from '@chakra-ui/react'
import { useRef } from 'react'
import Cart from '../CartPage/Cart'
import Navbar from "../Components/Navbar"
import { RiLuggageCartFill } from 'react-icons/ri'
import { MdShoppingBasket } from 'react-icons/md'

function AddressSlider() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Box w="70%" margin="auto" marginTop={10} >
                <Box height="60px" background="black" color="white" borderRadius="10px" p="5px 20px">
                    <Flex justifyContent="space-between" >
                        <Box>
                            <Heading fontWeight={500}>Order Review</Heading>
                        </Box>
                        <Flex justify="space-between" w="30%">
                            <Box textAlign="center">
                                <Icon as={RiLuggageCartFill} w={8} h={6} color="white" />
                                <Text>Your Cart</Text>
                            </Box>
                            <Box textAlign="center">
                                <Icon as={MdShoppingBasket} w={8} h={6} color="white" />
                                <Text>Order Review</Text>
                            </Box>
                            <Box textAlign="center">
                                <Text fontSize="18px" fontWeight="bold">₹</Text>
                                <Text>Payment Details</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box margin="1%">
                    <Text marginBottom={3} color="gray.500">DELIVERY ADDRESS</Text>
                    <Flex justifyContent="space-around" ref={btnRef} w="25%" h="70px" border="1px solid black" onClick={onOpen} borderRadius="10px">
                        <Center><AddIcon color="teal" />  <Text marginLeft={5}>Add New Address</Text> </Center>
                    </Flex>
                </Box>
            </Box>
            <Cart />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>ADD ADDRESS</DrawerHeader>

                    <DrawerBody>
                        <Box>
                            <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">PIN CODE</Text>

                            <Input borderTop="none" w="90%" type='pin' placeholder='Pin Code' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="pin" />
                        </Box>
                        <Flex>
                            <Box>
                                <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">CITY</Text>

                                <Input borderTop="none" w="90%" type='text' placeholder='City' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="city" />
                            </Box>
                            <Box>
                                <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">STATE</Text>

                                <Input borderTop="none" w="90%" type='text' placeholder='State' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="state" />
                            </Box>
                        </Flex>
                        <Box>
                            <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">FIRST NAME</Text>

                            <Input borderTop="none" w="90%" type='text' placeholder='First Name' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="f_name" />
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">LAST NAME</Text>

                            <Input borderTop="none" w="90%" type='text' placeholder='Last Name' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="l_name" />
                        </Box>

                        <Box>
                            <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">ADDRESS</Text>

                            <Input borderTop="none" w="90%" type='text' placeholder='Address' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="address" />
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">LANDMARK</Text>

                            <Input borderTop="none" w="90%" type='text' placeholder='Landmark' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="landmark" />
                        </Box>
                        <Box>
                            <Text fontSize={12} fontWeight="bold" marginTop="20px" color="teal">PHONE NUMBER</Text>

                            <Input borderTop="none" w="90%" type='text' placeholder='Phone Number' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} name="landmark" />
                        </Box>
                        <Button marginTop="30px" w="full" colorScheme='teal'>SAVE ADDRESS</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default AddressSlider

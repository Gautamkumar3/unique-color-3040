import { Box, Container, Grid, GridItem, Heading, HStack, Text, Image, Spacer, VStack, InputLeftAddon, InputGroup, Input, Button, Flex, PinInput, PinInputField } from '@chakra-ui/react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../Authenticate/AuthContext';

export default function Signup() {

    const { pin, handlePin, verifyOtp, handleInput, mobile } = useContext(AuthContext);




    return (
        <Box background="#f6f6f7">
            <Flex w="70%" margin="auto" borderRadius={10} marginTop={10} background="#fff" p={5}>
                <Box>
                    <Image src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
                </Box>
                <Spacer />
                <Box width="40%">
                    <Heading size="md" margin="30px 0 10px 0" fontSize={28} fontWeight="500">Create Account</Heading>
                    <Box>
                        <Text fontSize={12} fontWeight="bold" marginTop="30px" color="teal">EMAIL ID</Text>

                        <Input borderTop="none" w="90%" type='email' placeholder='Enter your Email Id' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} onChange={handleInput} name="email" />
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight="bold" marginTop="30px" color="teal">FIRST NAME</Text>

                        <Input borderTop="none" w="90%" type='text' placeholder='Your First Name' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} onChange={handleInput} name="f_name" />
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight="bold" marginTop="30px" color="teal">LAST NAME</Text>

                        <Input borderTop="none" w="90%" type='text' placeholder='Your Last Name' _placeholder={{ color: 'gray.300' }} border="none" borderBottom="1px solid #b0abab" borderRadius="none" _focus={{ boxShadow: "none !important" }} onChange={handleInput} name="l_name" />
                    </Box>
                    <Box>
                        <Text fontSize={12} fontWeight="bold" marginTop="30px" letterSpacing={2}>VERIFYING NUMBER</Text>
                        <Text color="gray" fontSize={12} marginTop="5px">We have sent 6 digit OTP on +91-<span style={{ color: "black", fontSize: "15px" }}>{mobile}</span></Text>
                    </Box>
                    <HStack marginTop={3}>
                        <PinInput otp type='numeric' placeholder="" size='lg' onChange={handlePin} >
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                    <Button disabled={pin.length < 6} marginTop={10} colorScheme='teal' w="90%" onClick={verifyOtp}>
                        VERIFY
                    </Button>
                </Box>
            </Flex>
            <VStack marginTop={10}>
                <Text>By continuing you agree to our <span style={{ color: "#ef4281" }}>Terms of service</span> </Text>
                <Text>and <span style={{ color: "#ef4281" }}>Privacy & Legal Policy.</span> </Text>
            </VStack>
        </Box>
    )
}
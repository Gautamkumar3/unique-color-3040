import { Box, Container, Grid, GridItem, Heading, HStack, Text, Image, Spacer, VStack, InputLeftAddon, InputGroup, Input, Button, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authenticate/AuthContext'

export default function Login() {

    const { handleInputMobile, handleOtp } = useContext(AuthContext)



    return (
        <Box background="#f6f6f7">
            <Flex w="70%" margin="auto" borderRadius={10} marginTop={10} background="#fff">
                <Box>
                    <Image src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
                </Box>
                <Spacer />
                <Box width="40%">
                    <Heading size="md" margin="30px 0 10px 0" >Sign In / Sigh Up</Heading>
                    <Text fontWeight="light" w="90%">Sign up or Sign in to access your orders, special offers, health tips and more!</Text>
                    <Text fontSize={12} fontWeight="bold" marginTop="40px" color="teal">PHONE NUMBER</Text>
                    <InputGroup>
                        <InputLeftAddon children='+91' background="white" size="sm" />
                        <Input borderTop="none" type='number' placeholder='Enter your mobile number' onChange={handleInputMobile} _focus={{ boxShadow: "none !important" }} />
                    </InputGroup>
                    <Button marginTop={10} colorScheme='teal' w="90%" onClick={handleOtp}>
                        USE OTP
                    </Button>
                    <HStack m={12}>
                        <Flex border="1px solid gray" p="5px 20px" w="40%" borderRadius={5}>
                            <Image w="25px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /><Spacer />
                            <Text>Google</Text>
                        </Flex>
                        <Flex border="1px solid gray" p="5px 15px" w="40%" borderRadius={5}>
                            <Image w="25px" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" alt="" />
                            <Spacer />
                            <Text>Facebook</Text>
                        </Flex>
                    </HStack>
                </Box>
            </Flex>
            <VStack marginTop={10}>
                <Text>By continuing you agree to our <span style={{ color: "#ef4281" }}>Terms of service</span> </Text>
                <Text>and <span style={{ color: "#ef4281" }}>Privacy & Legal Policy.</span> </Text>
            </VStack>
        </Box>
    )
}
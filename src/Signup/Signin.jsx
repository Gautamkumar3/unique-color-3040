import { Box, Container, Grid, GridItem, Heading, HStack, Text, Image, Spacer, VStack, InputLeftAddon, InputGroup, Input, Button, Flex, PinInput, PinInputField } from '@chakra-ui/react'
import { useContext } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authenticate/AuthContext'

export default function Signin() {

    const navigate = useNavigate()
    const { mobile } = useContext(AuthContext);
    const [signIn, setSignIn] = useState("")

    const handleSignin = (e) => {
        setSignIn(e.target.value)
    }

    const handleClick = () => {
        if (signIn === mobile) {
            navigate("/")
        } else {
            alert("Wrong Credentials")
        }

    }

    return (
        <Box background="#f6f6f7">
            <Flex w="70%" margin="auto" borderRadius={10} marginTop={10} background="#fff">
                <Box>
                    <Image src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
                </Box>
                <Spacer />
                <Box width="40%">
                    <Heading size="lg" fontWeight={400} margin="30px 0 10px 0" >Sign in</Heading>
                    <Text fontWeight="light" w="90%">Sign up or Sign in to access your orders, special offers, health tips and more!</Text>
                    <Text fontSize={12} fontWeight="bold" marginTop="40px" color="teal">PHONE NUMBER</Text>
                    <InputGroup>
                        <InputLeftAddon children='+91' background="white" size="sm" />
                        <Input borderTop="none" type='number' placeholder='Enter your mobile number' _focus={{ boxShadow: "none !important" }} onChange={handleSignin} />
                    </InputGroup>
                    <Text fontSize='xs' color="gray" marginTop={10}>We have sent 6 digit OTP</Text>
                    <HStack marginTop={3}>
                        <PinInput otp type='numeric' placeholder="" size='lg'  >
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                    <Button onClick={handleClick} marginTop={10} colorScheme='teal' w="90%">
                        VERIFY
                    </Button>
                    <HStack m={12}>
                        <Flex border="1px solid gray" p="5px 20px" w="45%" borderRadius={5}>
                            <Image w="25px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /><Spacer />
                            <Text>Google</Text>
                        </Flex>
                        <Flex border="1px solid gray" p="5px 15px" w="45%" borderRadius={5}>
                            <Image w="25px" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" alt="" />
                            <Spacer />
                            <Text>Facebook</Text>
                        </Flex>
                    </HStack>
                </Box>
            </Flex >
            <VStack marginTop={10}>
                <Text>By continuing you agree to our <span style={{ color: "#ef4281" }}>Terms of service</span> </Text>
                <Text>and <span style={{ color: "#ef4281" }}>Privacy & Legal Policy.</span> </Text>
            </VStack>
        </Box >
    )
}
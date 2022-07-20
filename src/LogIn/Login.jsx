import { Box, Container, Grid, GridItem, Heading, HStack, Text, Image, Spacer, VStack, InputLeftAddon, InputGroup, Input, Button, Flex } from '@chakra-ui/react'

export default function Login() {
    return (
        <Flex w="70%" margin="auto">
            <Box>
                <Image src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
            </Box>
            <Spacer />
            <Box width="40%">
                <Heading size="md" margin="30px 0 10px 0" >Sign In / Sigh Up</Heading>
                <Text fontWeight="light">Sign up or Sign in to access your orders, special offers, health tips and more!</Text>
                <Text fontSize={12} fontWeight="bold" marginTop="40px" color="teal">PHONE NUMBER</Text>
                <InputGroup>
                    <InputLeftAddon children='+91' background="white" size="sm" />
                    <Input borderTop="none" type='tel' placeholder='Enter your mobile number' />
                </InputGroup>
                <Button marginTop={10} colorScheme='teal' w="80%">
                    USE OTP
                </Button>

            </Box>
        </Flex>

    )
}
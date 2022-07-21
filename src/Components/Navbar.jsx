import { Box, Container, Image, Grid, Input, GridItem, HStack, MenuButton, MenuList, MenuItem, Menu, Button, background, InputGroup, InputLeftElement, VStack, Flex, Text, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon, } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import "../Styles/Style.css"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authenticate/AuthContext";


export default function Navbar() {

    const { name } = useContext(AuthContext)

    const navigate = useNavigate()

    return (
        <Box h="15vh" bg="#32aeb1" sx={{ position: '-webkit-sticky', position: 'sticky', top: '0', }}>
            <Box display="flex" gap={20} paddingTop="30px">
                <Image marginLeft={20} w="15%" src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="logo" />

                <HStack w="40%" >
                    <Input type='text' background="White" size="lg" w="200%" placeholder="Search for medicine & wellness products…" />
                </HStack>
                <HStack gap="50px" marginLeft="100px">
                    <Flex >
                        <Icon as={MdShoppingCart} w={8} h={8} color="white" />
                        <Text marginLeft="10px" color="white" fontWeight="bold">Cart</Text>
                    </Flex>
                    <Flex onClick={() => (navigate("/login"))}>
                        <Icon as={MdAccountCircle} w={8} h={8} color="white" />
                        <Text marginLeft="10px" color="white" fontWeight="bold">{name || "Login/Signup"}</Text>
                    </Flex>
                </HStack>
            </Box>

        </Box >
    )
}
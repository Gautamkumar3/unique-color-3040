import { Box, Container, Image, Grid, Input, GridItem, HStack, MenuButton, MenuList, MenuItem, Menu, Button, background, InputGroup, InputLeftElement, VStack, Flex, Text, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon, } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';


export default function Navbar() {


    return (
        <Box h="25vh" bg="#32aeb1">
            <Box display="flex" gap={20} paddingTop="30px">
                <Image marginLeft={20} w="15%" src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="logo" />


                <HStack w="40%" >
                    <Input type='text' background="White" size="lg" w="200%" placeholder="Search for medicine & wellness products…" />
                </HStack>
                <HStack gap="50px" marginLeft="100px">
                    <Flex>
                        <Icon as={MdShoppingCart} w={8} h={8} color="white" />
                        <Text marginLeft="10px" color="white" fontWeight="bold">Cart</Text>
                    </Flex>
                    <Flex>
                        <Icon as={MdAccountCircle} w={8} h={8} color="white" />
                        <Text marginLeft="10px" color="white" fontWeight="bold">Login/Signup</Text>
                    </Flex>
                </HStack>
            </Box>
            <HStack h="80px" w="70%" margin="auto" marginTop="20px">
                <Flex>
                    <Flex alignItems="center">
                        <Image w="50px" h="50px" borderRadius='50%'
                            src='https://media.istockphoto.com/photos/prescriptionpills-picture-id894559892?b=1&k=20&m=894559892&s=170667a&w=0&h=ybtRlsaKlgHRlg2VOVGnx1uIHH3AXI9OX4aHYnxiSuM=' alt='logo' />
                        <Text marginLeft="20px" color="white">Medicine</Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex>
                    <Flex alignItems="center">
                        <Image w="50px" h="50px" borderRadius='50%'
                            src='https://images.unsplash.com/photo-1596370175676-bfc19ba489f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdlbGxuZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='logo' />
                        <Text marginLeft="20px" color="white">Wellness</Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex>
                    <Flex alignItems="center">
                        <Image w="50px" h="50px" borderRadius='50%'
                            src='https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFiJTIwdGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='logo' />
                        <Text marginLeft="20px" color="white">Lab Tests</Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex>
                    <Flex alignItems="center">
                        <Image w="50px" h="50px" borderRadius='50%'
                            src='https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='logo' />
                        <Text marginLeft="20px" color="white">Beauty</Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex>
                    <Flex alignItems="center">
                        <Image w="50px" h="50px" borderRadius='50%'
                            src='https://www.netmeds.com/images/cms/magefan_blog/main_image/1658233510_Ayurvedic-Indications_300x400.jpg' alt='logo' />
                        <Text marginLeft="20px" color="white">Health Corner</Text>
                    </Flex>
                </Flex>
                <Spacer />
            </HStack>
        </Box >
    )
}
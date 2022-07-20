import { Box, Heading, Image, Center } from "@chakra-ui/react";



export default function Card({ url, name, offer = "", w = "200px", m = "20px" }) {
    return (
        <Box maxW='sm' w="20%" textAlign="center" borderRadius='lg' overflow='hidden' boxShadow='md' p='6' rounded='md' bg='white' >
            <Center w='full'>
                <Image h={w} src={url} alt="product" />
            </Center>
            <Heading marginTop={m} size="sm">{name}</Heading>
            <Heading marginTop="20px" color="#5ba41c" size="sm">{offer}</Heading>
        </Box >
    )
}
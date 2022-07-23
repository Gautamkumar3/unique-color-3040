import { Box, Heading, Image, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



export default function Card({ url, name, offer = "", w = "200px", m = "20px" }) {

    const navigate = useNavigate()

    return (
        <Box maxW='sm' w="20%" textAlign="center" borderRadius='lg' overflow='hidden' boxShadow='md' p='6' rounded='md' bg='white' onClick={() => (navigate("/product"))} >
            <Center w='full'>
                <Image h={w} src={url} alt="product" />
            </Center>
            <Heading marginTop={m} size="sm">{name}</Heading>
            <Heading marginTop="20px" color="#5ba41c" size="sm">{offer}</Heading>
        </Box >
    )
}
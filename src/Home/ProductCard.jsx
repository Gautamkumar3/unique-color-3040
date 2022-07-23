import { Box, Image, Badge, Center, Text, Spacer, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../Authenticate/AuthContext"

export default function ProductCard(item) {

    const { addToCart } = useContext(AuthContext)

    return (
        <Box maxW='sm' borderWidth='1.5px' w="23%" p="20px" borderRadius='lg' overflow='hidden' background="white">
            <Badge borderRadius='5px' p="3px 5px" background="#84be52" color="white">
                {item.item.off}
            </Badge>
            <Center >
                <Image src={item.item.url} alt="img" />
            </Center>
            <Text fontSize="sm" height={10} fontWeight="600">{item.item.title}</Text>
            <Text as='em' color="gray.600" lineHeight="25px" fontSize="xs"> {item.item.mkt}</Text>
            <Text fontWeight="bold" color="#6f7284" lineHeight="25px">Best Price* <span style={{ color: "#ef4281" }}>{item.item.price}</span> </Text>
            <Text lineHeight="25px" color="gray.500" >MRP <span style={{ textDecoration: "line-through" }}>{item.item.Fprice}</span> </Text>
            <Button background="#24aeb1" color="white" marginTop="15px" width="full" onClick={() => addToCart(item.item)}>ADD TO CART</Button>
        </Box>
    )
}
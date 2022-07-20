import { Box, Image, Badge, Center, Text, Spacer, Button } from "@chakra-ui/react"

export default function ProductCard({ url, off, title, mkt, price, Fprice }) {

    return (
        <Box maxW='sm' borderWidth='1.5px' w="20%" p="20px" borderRadius='lg' overflow='hidden'>
            <Badge borderRadius='5px' p="3px 5px" background="#84be52" color="white">
                {off}
            </Badge>
            <Center >
                <Image src={url} alt="img" />
            </Center>
            <Text fontSize="sm" fontWeight="600" lineHeight="25px" >{title}</Text>
            <Text as='em' color="gray.600" lineHeight="25px" fontSize="xs"> {mkt}</Text>
            <Text fontWeight="bold" color="#6f7284" lineHeight="25px">Best Price* <span style={{ color: "#ef4281" }}>{price}</span> </Text>
            <Text lineHeight="25px" color="gray.500" >MRP <span style={{ textDecoration: "line-through" }}>{Fprice}</span> </Text>
            <Button background="#24aeb1" color="white" marginTop="15px" width="full">ADD TO CART</Button>
        </Box>
    )
}
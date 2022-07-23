import { Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Details = [
    {
        title: "Covid Essentials"
    },
    {
        title: "Diabetes"
    },
    {
        title: "Eyewear"
    },
    {
        title: "Ayush"
    },
    {
        title: "Ayurvedic"
    },
    {
        title: "Homeopathy"
    },

    {
        title: "Fitness"
    },
    {
        title: "Mom & Baby"
    },
    {
        title: "Devides"
    },
    {
        title: "Surgical"
    },
    {
        title: "Sexual Wellness"
    },
    {
        title: "Treatments"
    },
]

export default function ProductCategoryName() {
    const navigate = useNavigate()
    return (
        <Flex w="80%" h="60px" margin="auto">
            {Details.map((item) => <HStack onClick={() => (navigate("/product"))} key={item.title} margin="auto" _hover={{
                color: "teal.500",
                cursor: "pointer"
            }}>
                <Text size="xs">{item.title}</Text>
            </HStack>)}
        </Flex>
    )
}
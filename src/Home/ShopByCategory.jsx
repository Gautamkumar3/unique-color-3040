import { Center, HStack, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";

const categData = [
    {
        url: "https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg",
        name: "Ayush",

    },
    {
        url: "https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg",
        name: "Hair Care",

    },
    {
        url: "https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg",
        name: "Body Care",

    },
    {
        url: "https://www.netmeds.com/images/category/624/thumb/treatments_1.jpg",
        name: "Treatments",

    },
    {
        url: "https://www.netmeds.com/images/category/821/thumb/cold_and_fever.jpg",
        name: "Cold And Water",

    },
]

export default function ShopByCategory() {

    const navigate = useNavigate()

    return (
        <div style={{ marginTop: "30px" }}>
            <Text marginLeft="20px" fontSize='3xl'>Shop By Category</Text>
            <HStack w="95%" gap="20px" m="auto" marginTop={5} >
                {categData.map((item) => <Card key={item.name} url={item.url} name={item.name} />)}
            </HStack>
        </div>



    )
}
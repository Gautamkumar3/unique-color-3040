import { Center, HStack, Stack, Text } from "@chakra-ui/react";
import Card from "../Components/Card";

const ConData = [
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg",
        name: "Weight Care",

    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg",
        name: "Women Weight Care",

    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg",
        name: "Bone And Jonit Pain",

    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg",
        name: "Cold And Fever",

    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg",
        name: "Lung Care",

    },
]

export default function HealthConcern() {
    return (
        <div style={{ marginTop: "30px" }}>
            <Text marginLeft="20px" fontSize='3xl'>
                Health Concerns</Text>
            <HStack w="95%" gap="20px" m="auto" marginTop={5}>
                {ConData.map((item) => <Card key={item.name} url={item.url} name={item.name} w="100px" m="50px" />)}
            </HStack>
        </div>



    )
}
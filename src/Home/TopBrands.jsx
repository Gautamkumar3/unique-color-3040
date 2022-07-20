import { HStack, Text } from "@chakra-ui/react";
import Card from "../Components/Card";

const brandsData = [
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/head-shoulders.jpg?v=15",
        name: "Head-Shoulders",
        offeer: 'UP TO 5% OFF'
    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/coony.jpg?v=15",
        name: "Coony",
        offeer: 'UP TO 30% OFF'
    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/veet.jpg?v=15",
        name: "Veet",
        offeer: 'FLAT 10% OFF'
    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/st-dvence.jpg?v=15",
        name: "St-Dvence",
        offeer: 'UP TO 30% OFF'
    },
    {
        url: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/aroma-magic.jpg?v=15",
        name: "Aroma-Magic",
        offeer: 'UP TO 25% OFF'
    },
]

export default function TopBrands() {
    return (
        <div style={{ marginTop: "30px" }}>
            <Text marginLeft="20px" fontSize='3xl'>Top Brands</Text>
            <HStack w="95%" gap="20px" m="auto" marginTop={5}>
                {brandsData.map((item) => <Card key={item.name} url={item.url} name={item.name} offer={item.offeer} w="150px" m="30px" />)}
            </HStack>
            <br /><br />
            <hr />
        </div>
    )
}
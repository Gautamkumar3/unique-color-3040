import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import ProductCard from "./ProductCard"

const Pdata = [
    {
        url: "https://www.netmeds.com/images/product-v1/150x150/812809/pure_nutrition_progut_plus_for_healthy_digestion_veg_capsules_60_s_0.jpg",
        off: "30% OFF",
        title: "Pure Nutrition Progut(For Healthy Digestion)Capsules 60's",
        mkt: "Mkt: Herbs Nutriproducts Pvt. Ltd.",
        price: "₹ 1,049.30",
        Fprice: "₹ 1,499.00"
    },
    {
        url: "https://www.netmeds.com/images/product-v1/150x150/858567/inlife_triphala_extract_capsules_60_s_0.jpg",
        off: "47% OFF",
        title: "INLIFE Triphala Extract Capsules 60's",
        mkt: " Mkt: Inlife Pharma Private Limited",
        price: "₹ 243.27.30",
        Fprice: "₹ 459.00"
    },
    {
        url: "https://www.netmeds.com/images/product-v1/150x150/815204/healthvit_ginkgo_biloba_180_mg_capsules_60_s_0.jpg",
        off: "14% OFF",
        title: "HealthVit Ginkgo Biloba 180 mg Capsules 60's",
        mkt: "Mkt: West Pharmaceuticals Works Ltd",
        price: "₹ 1,000.00",
        Fprice: "₹ 860.00"
    },
    {
        url: "https://www.netmeds.com/images/product-v1/150x150/858568/inlife_guggul_extract_capsules_60_s_0.jpg",
        off: "34% OFF",
        title: "INLIFE Guggul Extract Capsules 180mg 60's",
        mkt: "Mkt: Herbs Nutriproducts Pvt. Ltd.",
        price: "₹ 329.34",
        Fprice: "₹ 499.00"
    },
    {
        url: "https://www.netmeds.com/images/product-v1/150x150/858539/inlife_diastan_plus_diabetic_care_powder_300_gm_78257_0_1.jpg",
        off: "50% OFF",
        title: "INLIFE Diastan Plus Diabetic Care Powder 300 gm",
        mkt: " Mkt: Inlife Pharma Private Limited",
        price: "₹ 450.00",
        Fprice: "₹ 900.00"
    }
]

export default function HomeProduct() {
    return (
        <div style={{ width: "95%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", margin: "auto", borderRadius: "10px", padding: "10px 0px", marginTop: "40px", }}>
            <Box w="95%" gap="20px" m="auto" marginTop={5}>
                <Text marginLeft="20px" fontSize='md' color="gray">TODAY'S EXCLUSIVE</Text>
                <Text marginLeft="20px" fontSize='xl'>Lightning Deals</Text>
                <Text marginLeft="20px" fontSize='sm' color="gray">Grab Before The Deal Ends
                </Text>
            </Box>

            <HStack w="95%" gap="20px" m="auto" marginTop={5}>
                {Pdata.map((item) => <ProductCard key={item.title} item={item} />)}
            </HStack>
        </div>
    )
}
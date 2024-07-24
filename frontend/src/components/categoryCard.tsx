import Link from "next/link";
import {
    Box,
    Heading,
    Text,
    Divider,
    Link as ChakraLink,
    LinkProps,
    Button,
} from '@chakra-ui/react';


function CategoryCard (props: { categoryName: any; categoryDescription: any; }) {
    const { categoryName, categoryDescription } = props;

    
    return (
        <Link href={`/categories/${categoryName.toLowerCase()}`}>
            <Box 
                w={"20vw"} 
                h={"20vh"} 
                boxShadow="2xl"
                borderRadius="xl"
                bgColor={"white"}
                p={"2%"}
                _hover={{
                    background: "#D3D3D3",
                }}
            >
                <Heading as='h2' size={'l'} m={"1%"}>{categoryName}→</Heading>
                <Divider m={"1%"} marginRight={"auto"} marginLeft={"auto"} w={"100%"}/>
                <Text m={"1%"} fontSize={"sm"}>{categoryDescription}</Text>

            </Box>
        </Link>
    )
}

export default CategoryCard;
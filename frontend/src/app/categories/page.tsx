'use client';
import {
    Box,
    Heading,
    Text,
    Link,
    Divider,
    Wrap,
    WrapItem,
    Flex,
} from '@chakra-ui/react';

import CategoryCard from '../../components/categoryCard';
import Header from '../../components/header';



function CategoriesPage() {

    const test_categories = [{"categoryName": "Anthropology", "categoryDescription": "The study of culture"}, 
                            {"categoryName": "Sociology", "categoryDescription": "The study of society"}, 
                            {"categoryName": "Mathematics", "categoryDescription": "The study of numbers"}, 
                            {"categoryName": "Economics", "categoryDescription": "The study of economies"}, 
                            {"categoryName": "Biology", "categoryDescription": "The study of life"}]


    return (
        <Box w={"100vw"} h={"100vh"}>
            <Header />
            <Flex w={"100%"} h={"85%"} bgColor={"#f6eee3"} padding={"2%"} flexDirection={"column"}>
                <Heading as='h1' size={'xl'} color={"#191922"} marginBottom={"2%"}>Categories</Heading>
                <Divider colorScheme="blackAlpha" size={"lg"} variant={"horizontal"}/>
                <Wrap spacing={"2vw"}>
                    {test_categories.map((category, idx) => (
                        <WrapItem key={idx}>
                            <CategoryCard 
                                categoryName={category["categoryName"]}
                                categoryDescription={category["categoryDescription"]}
                            /> {" "}
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>
        </Box>
        
    )};

export default CategoriesPage;
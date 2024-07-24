import React from 'react';
import Link from 'next/link';
import {
    Box,
    Flex,
    HStack,
    Link as ChakraLink,
    Button,
    Center,
    Input,
    InputGroup,
    InputRightAddon,
    IconButton,
    Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Header({isHomePage=false}) {
    return (
        <HStack justifyContent={'space-between'} alignItems={"center"} w={"100%"} h={"15%"} p={"2%"} bgColor={"#191922"}> {/*Consider #0e1111 vs #191922*/}
            <Center color={"#fffff8"} fontSize={"xl"} w={"10%"} h={"100%"}>
                AcademicDict
            </Center>
            {!isHomePage ? 
            
            <InputGroup w={"50%"} h={"100%"}>
                <Input placeholder="Search for something!" bgColor={"white"} w={"92%"} h={"120%"}/>
                <InputRightAddon p={0} w={"8%"} h={"120%"}>
                    <IconButton icon={<SearchIcon />} boxSize={"100%"} aria-label='Search Icon'/>
                </InputRightAddon>  
            </InputGroup> 
            
            : null}
            
            <HStack w={"25%"} h={"100%"} spacing={"10%"} flexDir={'row'} justify={'end'} color={"#fffff8"}>
                <Link href={"/categories"}>
                    <Text>Categories</Text>
                </Link>
                <Link href={"/"}>
                    <Text>About</Text>
                </Link>
                <Button>Log In</Button>
            </HStack>
        </HStack>
    )}

export default Header;
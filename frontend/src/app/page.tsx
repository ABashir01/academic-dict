'use client';

import React from 'react';

import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Input,
  Text,
  Center,
  Heading,
  VStack,
  InputGroup,
  InputRightAddon,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons';

import Header from '../components/header';


export default function Home() {
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"}>
            <Header isHomePage={true}/>
            <Center w={"100%"} h={"85%"} bgColor={"#f6eee3"} flexDir={"column"} padding={"10%"}> {/*Consider #fffff8 vs #f6eee3*/}
                <VStack spacing={"5vh"} h={"50%"} >
                    <Heading as='h1' size={'xl'} color={"#191922"}>The World's Academic Dictionary</Heading> {/*Consider #0e1111 vs #191922*/}
                    <InputGroup w={"60vw"} size="lg">
                        <Input placeholder="Search for something!" w={"92%"} m={0} bgColor={"white"}/>
                        <InputRightAddon p={0} w={"8%"}>
                            <IconButton icon={<SearchIcon />} boxSize={"100%"} aria-label='Search Icon'/>
                        </InputRightAddon>  
                    </InputGroup>
                </VStack>
                <Box h={"50%"}/>
            </Center>
        </Box>
    </ChakraProvider>
  );
}

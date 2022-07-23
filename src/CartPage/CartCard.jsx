import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Select, Spacer, Text, textDecoration } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function CartCard(data) {


    return (
        <Box width="60%" margin="auto" borderBottom="1px solid gray">
            <Grid templateColumns='repeat(6, 1fr)'>
                <GridItem p={5} colSpan={1}>
                    <Center>
                        <img width="50px" src="" alt="" />
                    </Center>
                </GridItem>
                <GridItem padding={5} colSpan={3}>
                    <Text fontSize={18}>Revital H Woman Tablet 30'S</Text>
                    <Text fontSize="xs" as="i">Mfr: Sun Pharmaceutical Industries Ltd</Text>
                    <Text h={10} marginTop={5} color="#f50271" fontSize="lg">RS293.25 <span style={{ color: "gray", fontSize: "14px", fontWeight: "400", textDecoration: "line-through" }}>1380:00</span></Text>


                    <Text fontSize="sm" color="gray">Delivery between Jul 23 6PM-Jul 24 10PM</Text>
                </GridItem>
                <GridItem padding={5} colSpan={2}>
                    <Flex gap={18} h="full" alignItems="flex-end">
                        <Button >Remove</Button>

                        <Flex border="1px solid black" borderRadius={10}>
                            <Center>
                                <Text marginLeft={4}>QTY</Text>
                            </Center>
                            <Spacer />
                            <Select width="full" border="none" _focus={{ boxShadow: "none !important" }}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Select>
                        </Flex>

                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default CartCard

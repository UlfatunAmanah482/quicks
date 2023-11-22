import { SearchIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, CardHeader, Flex, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { WhitePerson } from '../utils/Icons';

const ChatList = () => {
  return (
    <Flex justifyContent={"end"} width={"100%"}>
      <Card width="40%">
        <CardHeader>
          <InputGroup>
            <InputRightElement pointerEvents='none'>
              <SearchIcon color='gray.300' />
            </InputRightElement>
            <Input type='text' />
          </InputGroup>
        </CardHeader>

        <CardBody>
          <Flex justifyContent={"space-between"}>
            <IconButton
              isRound={true}
              variant='solid'
              fontSize='20px'
              bg={"#2F80ED"}
              icon={<WhitePerson color={"#FFFFFF"} />}
            />
            <Box ml='3' width="100%">
              <Text fontWeight='bold'>
                Segun Adebayo
              </Text>
              <Text fontSize='sm'>UI Engineer</Text>
              <Text fontSize='sm'>UI Engineer</Text>
            </Box>
            <VStack>
              <Text fontSize='sm'>UI Engineer</Text>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default ChatList
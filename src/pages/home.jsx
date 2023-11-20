import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react'
import React from 'react'
import BottomNavigator from '../components/BottomNavigator'

const Home = () => {
  return (
    <VStack bg={"#333333"} style={{ minHeight: "100vh", height: "100%", width: "100%" }}>
      <InputGroup p={3}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input />
      </InputGroup>

      <BottomNavigator />
    </VStack>
  )
}

export default Home
import { SearchIcon } from '@chakra-ui/icons'
import { Grid, GridItem, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import BottomNavigator from '../components/BottomNavigator'
import axios from 'axios'

const Home = () => {
  // const [list, setList] = React.useState([]);

  const fetchData = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts"
    })
      .then(response => {
        // setList(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={0} bg={"#333333"} style={{ minHeight: "100vh", height: "100%", width: "100%" }}>
      <GridItem borderRight="1px solid #F2F2F2"></GridItem>
      <GridItem colSpan={4}>
        <InputGroup bg="#4F4F4F" borderColor="#4F4F4F" borderRadius={0}>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input type='text' />
        </InputGroup>

        <BottomNavigator />
      </GridItem>
    </Grid>
  )
}

export default Home
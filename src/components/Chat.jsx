import { Box, Button, Card, CardBody, CardHeader, Flex, Input, Text, VStack } from '@chakra-ui/react';

const Chat = () => {
  return (
    <Card width="40%">
      <CardHeader>
        <Flex justifyContent="space-between" alignItems="center">
          <Button bg="transparent" p={0}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#333333" />
            </svg>
          </Button>
          <VStack gap={0} width="100%">
            <Text color="#2F80ED" fontSize="20px" fontWeight="500">Chat Kita</Text>
            <Text fontSize="small">3 Participants</Text>
          </VStack>
          <Button bg="transparent" p={0}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#333333" />
            </svg>
          </Button>
        </Flex>
      </CardHeader>

      <CardBody pt={0}>
        <Box pb={6} display="flex" flexDirection="column" gap={5}>
          <VStack display="flex" flexDirection="column" justifyContent="space-between" width="80%">
            <Text color="#E5A443" fontSize="12px" textAlign="left" width="100%">Ulfa</Text>
            <Box bg="#FCEED3" p={3} borderRadius="5px">
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
              <Text fontSize="small">19:40</Text>
            </Box>
          </VStack>
          
          <VStack display="flex" flexDirection="column" justifyContent="space-between" width="70%" marginLeft="auto">
            <Text color="#9B51E0" fontSize="12px" textAlign="right" width="100%">You</Text>
            <Box bg="#EEDCFF" p={3} borderRadius="5px">
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
              <Text fontSize="small">19:42</Text>
            </Box>
          </VStack>
        </Box>
        <Flex justifyContent="space-between" alignItems="center" gap={3}>
          <Input placeholder='medium size' size='md' />
          <Button bg="#2F80ED" color="#FFFFFF">Send</Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default Chat
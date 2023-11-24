import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Card, CardBody, CardHeader, Checkbox, Flex, IconButton, Select, Text } from '@chakra-ui/react';

const ToDoList = () => {

  return (
    <Flex justifyContent={"end"} width={"100%"}>
      <Card width="40%">
        <CardHeader>
          <Flex justifyContent={"space-between"} alignItems={"center"} gap={"3"}>
            <Select placeholder='My Task' width={"30%"}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </Select>
            <Button bg="#2F80ED" color="#FFFFFF">New Task</Button>
          </Flex>
        </CardHeader>

        <CardBody pt={0}>
          <Flex justifyContent={"space-between"} alignItems={"center"} gap={"3"}>
            <Checkbox defaultChecked />
            <Text as="b">Close off Case #012920- RODRIGUES, Amiguel</Text>
            <Text color="#EB5757" fontSize="12px">2 Days Left</Text>
            <Text fontSize="14px">12/06/2021</Text>
            <IconButton
              isRound={true}
              variant='solid'
              fontSize='20px'
              bg='transparent'
              icon={<ChevronUpIcon color={"#4F4F4F"} />}
            />
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default ToDoList
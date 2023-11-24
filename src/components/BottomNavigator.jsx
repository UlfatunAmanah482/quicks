import { Flex, IconButton, VStack } from '@chakra-ui/react';
import React from 'react';
import { InboxIcon, StartIcon, TaskIcon } from '../utils/Icons';
import ChatList from './ChatList';
import ToDoList from './ToDoList';

const BottomNavigator = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenToDoList, setIsOpenToDoList] = React.useState(false);

  return (
    <VStack width={"100%"} p={"28px"} style={{ position: "absolute", bottom: 0, right: 0 }}>
      {isOpen && showMenu ? (
        isOpenToDoList ? (
          <ToDoList />
        ) : (
          <ChatList />
        )
      ) : null}
      <Flex justifyContent={"end"} alignItems={"center"} width={"100%"} gap={3}>
        {showMenu && (
          <Flex gap={3}>
            <IconButton
              isRound={true}
              variant='solid'
              fontSize='20px'
              bg={"#F2F2F2"}
              icon={<TaskIcon color={"#F8B76B"} />}
              onClick={() => {
                setIsOpenToDoList(!isOpenToDoList);
                setIsOpen(true);
              }}
            />
            <IconButton
              isRound={true}
              variant='solid'
              fontSize='20px'
              bg={"#F2F2F2"}
              icon={<InboxIcon color={"#8885FF"} />}
              onClick={() => {
                setIsOpen(true);
                setIsOpenToDoList(false);
              }}
            />
          </Flex>
        )}
        <IconButton
          isRound={true}
          variant='solid'
          fontSize='20px'
          bg={"#2F80ED"}
          icon={<StartIcon color={"#FFFFFF"} />}
          onClick={() => {
            setShowMenu(!showMenu);
            setIsOpen(false);
          }}
        />
      </Flex>
    </VStack>
  )
}

export default BottomNavigator
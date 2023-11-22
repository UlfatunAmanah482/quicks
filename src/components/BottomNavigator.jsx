import { Flex, IconButton, VStack } from '@chakra-ui/react';
import React from 'react';
import { InboxIcon, StartIcon, TaskIcon } from '../utils/Icons';
import ChatList from './ChatList';

const BottomNavigator = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <VStack width={"100%"} p={"28px"} style={{ position: "absolute", bottom: 0 }}>
      {isOpen && showMenu ? (
        <ChatList />
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
            />
            <IconButton
              isRound={true}
              variant='solid'
              fontSize='20px'
              bg={"#F2F2F2"}
              icon={<InboxIcon color={"#8885FF"} />}
              onClick={() => setIsOpen(!isOpen)}
            />
          </Flex>
        )}
        <IconButton
          isRound={true}
          variant='solid'
          fontSize='20px'
          bg={"#2F80ED"}
          icon={<StartIcon color={"#FFFFFF"} />}
          onClick={() => setShowMenu(!showMenu)}
        />
      </Flex>
    </VStack>
  )
}

export default BottomNavigator
import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { InboxIcon, StartIcon, TaskIcon } from '../utils/Icons'

const BottomNavigator = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Flex justifyContent={"end"} alignItems={"center"} width={"100%"} p={"28px"} gap={3} style={{ position: "absolute", bottom: 0 }}>
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
  )
}

export default BottomNavigator
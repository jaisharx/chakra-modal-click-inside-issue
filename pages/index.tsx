import {
  Box,
  Button,
  Center,
  RadioGroup,
  Radio,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react'

import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [value, setValue] = useState('1')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="#EEE">
      <Center minH="100vh">
        <Button onClick={onOpen} colorScheme="blue">
          Open Modal
        </Button>
      </Center>

      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Empty box added could be real content */}
            <Box h="400vh" bg="gray.200" />

            {/* Radio group from chakra docs */}
            <RadioGroup my="4" onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">First</Radio>
                <Radio value="2">Second</Radio>
                <Radio value="3">Third</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home

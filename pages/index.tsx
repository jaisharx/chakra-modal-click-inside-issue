import { Box, Center, Container, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

import ModalWithCustomHeight from 'components/modal-with-custom-height'

const Home: NextPage = () => {
  return (
    <Box bg="#EEE" minH="100vh">
      <Container maxW="container.lg">
        <Center minH="100vh">
          <VStack spacing="12">
            
            <Text textAlign="center" fontWeight="semibold" fontSize="xl">
              Open each modals and select an item from the radio button to see
              the modal position move.
            </Text>
            
            {/* multiple modals, just a modal and button abstracted away as component */}
            <HStack>
              <ModalWithCustomHeight
                boxHeight="100vh"
                text="Slightly nudged modal"
              />
              <ModalWithCustomHeight
                boxHeight="150vh"
                text="Slightly visible modal"
              />
              <ModalWithCustomHeight
                boxHeight="200vh"
                text="Totally hidden modal"
              />
            </HStack>
          </VStack>
        </Center>
      </Container>
    </Box>
  )
}

export default Home

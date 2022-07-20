import {VStack, Container} from "@chakra-ui/react"

function Layout({children}) {
  return (
    <Container maxW="container.md" p={4}>
      <VStack gap={4}>{children}</VStack>
    </Container>
  )
}

export default Layout

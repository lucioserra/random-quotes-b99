import {Box, Text} from "@chakra-ui/react"

function Quote({text}) {
  return (
    <Box borderLeftWidth={8} borderLeftColor="yellow.300" p={6} paddingLeft={12}>
      <Text fontSize={["md", "lg", "xl", "2xl"]}>{text}</Text>
    </Box>
  )
}

export default Quote

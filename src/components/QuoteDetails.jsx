import {Flex, VStack, Text, IconButton} from "@chakra-ui/react"
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"

function QuoteDetails({character, episode}) {
  return (
    <Flex justify="space-between" align="center" w="full">
      <VStack align="flex-start">
        <Text fontSize="xl" fontWeight="bold">
          {character}
        </Text>
        <Text>{episode}</Text>
      </VStack>
      <Link to={`/${character}`}>
        <IconButton variant="ghost" icon={<FaArrowRight />} />
      </Link>
    </Flex>
  )
}

export default QuoteDetails

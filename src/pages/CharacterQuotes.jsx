import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import {Heading, IconButton, HStack, Spinner} from "@chakra-ui/react"
import {FaArrowLeft} from "react-icons/fa"
import Quote from "../components/Quote"
import {getQuotesFromCharacter} from "../services/getQuotesFromCharacter"

function CharacterQuotes() {
  const [quotes, setQuotes] = useState([])
  const {character} = useParams()

  useEffect(() => {
    getQuotesFromCharacter(character).then((quotes) => setQuotes(quotes))
  }, [])

  return (
    <>
      <HStack justify="space-between" w="full">
        <Heading as="h1">{character}</Heading>
        <Link to="/">
          <IconButton variant="ghost" icon={<FaArrowLeft />} />
        </Link>
      </HStack>
      {quotes.length > 0 ? (
        quotes.map((quote, index) => <Quote key={index} text={quote} />)
      ) : (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="yellow.300" size="xl" />
      )}
    </>
  )
}

export default CharacterQuotes

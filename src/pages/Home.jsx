import {useState, useEffect} from "react"
import {Button, Spinner} from "@chakra-ui/react"
import {FaRandom} from "react-icons/fa"
import Quote from "../components/Quote"
import QuoteDetails from "../components/QuoteDetails"
import {getRandomQuote} from "../services/getRandomQuote"

function Home() {
  const [quote, setQuote] = useState(null)

  const loadQuote = () => {
    getRandomQuote().then((quote) => setQuote(quote))
  }

  useEffect(() => {
    loadQuote()
  }, [])

  return (
    <>
      <Button onClick={loadQuote} alignSelf="flex-end" variant="ghost" rightIcon={<FaRandom />}>
        random
      </Button>
      {quote ? (
        <>
          <Quote text={quote.text} />
          <QuoteDetails character={quote.character} episode={quote.episode} />
        </>
      ) : (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="yellow.300" size="xl" />
      )}
    </>
  )
}

export default Home

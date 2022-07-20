export const getQuotesFromCharacter = (character) => {
  return fetch(
    `https://brooklyn-nine-nine-quotes.p.rapidapi.com/api/v1/quotes/all/from?character=${character}&PageSize=5`,
    {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      },
    },
  )
    .then((response) => response.json())
    .then((json) => {
      const quotes = json.Data ?? []
      return quotes.map((quote) => quote.QuoteText)
    })
}

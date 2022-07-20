export const getRandomQuote = () => {
  return fetch("https://brooklyn-nine-nine-quotes.p.rapidapi.com/api/v1/quotes/random", {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const {Character: character, Episode: episode, QuoteText: text} = json.Data || {}
      return {character, episode, text}
    })
}

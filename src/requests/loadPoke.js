const loadPoke = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let { prev, next, results } = await response.json()
    results = await results.map((e) => {
      var imgId = e.url.split('/').at(-2)
      return {
        ...e,
        img: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${imgId}.svg`,
      }
    })
    return { prev, next, results }
  } catch (err) {
    console.log('something went wrong ', err)
    return []
  }
}

export default loadPoke

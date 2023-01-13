import { useEffect, useState } from 'react'
import PokeCardList from './components/PokeCardList'
import loadPoke from './requests/loadPoke'
function App() {
  const [Pokes, setPokes] = useState([])

  useEffect(() => {
    ;(async () => {
      const { results } = await loadPoke()
      await setPokes(results)
    })()
  }, [])

  return (
    <div className='App'>
      <div className='pt-10 flex flex-col items-center'>
        <h1 className='text-center text-5xl md:text-6xl font-medium'>
          POKEAPI 2.0
        </h1>
        <div className='mx-10 w-fit mx-auto p-3 rounded-xl mt-4 flex flex-wrap shadow-xl bg-white'>
          <div className='pr-3 font-bold'>Ref.</div>
          <div>
            <div>
              API Documentation:{' '}
              <a
                rel='noreferrer'
                target='_blank'
                className=' text-blue-500'
                href='https://pokeapi.co/docs/v2'
              >
                https://pokeapi.co/docs/v2
              </a>
            </div>
            <div>
              API Request:{' '}
              <a
                rel='noreferrer'
                target='_blank'
                className=' text-blue-500'
                href='https://pokeapi.co/api/v2/pokemon'
              >
                https://pokeapi.co/api/v2/pokemon
              </a>
            </div>
            <div>
              Stackoverflow:{' '}
              <a
                rel='noreferrer'
                target='_blank'
                className=' text-blue-500'
                href='https://stackoverflow.com/a/74828121'
              >
                https://stackoverflow.com/a/74828121
              </a>
            </div>
          </div>
        </div>
      </div>
      <PokeCardList lists={Pokes} />
    </div>
  )
}

export default App

import PokeCard from './PokeCard'

const PokeCardList = ({ lists = [] }) => {
  const Pokes = lists.map((list) => <PokeCard key={list.name} poke={list} />)
  return (
    <div className='p-10 grid gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
      {Pokes}
    </div>
  )
}

export default PokeCardList

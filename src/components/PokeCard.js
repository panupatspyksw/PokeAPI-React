const PokeCard = ({ poke }) => {
  const { name, img } = poke
  return (
    <div className=' opacity-100 bg-white relative shadow-2xl rounded-3xl p-10  flex justify-end flex-col items-center hover:scale-[.9] duration-[.3s] grayscale hover:filter-none hover:opacity-100 opacity-70'>
      <img className='max-h-50' src={img} alt={name} />
      <h3 className='mt-4'>{name}</h3>
    </div>
  )
}

export default PokeCard

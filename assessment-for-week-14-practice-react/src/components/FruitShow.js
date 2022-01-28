

function FruitShow({fruits}) {
  return (
    <div className='fruit-show'>
      <h2>{fruits[0].name}</h2>
      <p>{fruits[0].color}</p>
      <p>{fruits[0].sweetness}</p>
      <p>{fruits[0].seeds}</p>
    </div>
  )
}

export default FruitShow;

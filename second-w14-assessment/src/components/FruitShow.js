function FruitShow({fruits}) {
  return (
    <div className='fruit-show'>
      {/* <h2>{fruits[0].name}</h2>
      <p>{fruits[0].color}</p>
      <p>{fruits[0].sweetness}</p>
      <p>{fruits[0].seeds}</p> */}
      <h2>{fruits[1].name}</h2>
      <p>{fruits[1].color}</p>
      <p>{fruits[1].sweetness}</p>
      <p>{fruits[1].seeds}</p>
    </div>
  );
}

export default FruitShow;

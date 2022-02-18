import { useHoroscope } from "../context/HoroscopeContext";

const Navbar = () => {
  const { currSign, setCurrSign } = useHoroscope();
  const horoscopes = Object.keys(horoscopeObj);

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={()=> setCurrSign(sign)}>{sign}</span>)
      )}
    </nav>
  )
};

export default Navbar;

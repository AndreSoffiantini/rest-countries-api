import { useAsyncValue } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryMain = () => {
  const { data } = useAsyncValue();
  //console.log(data[0].name.common);

  return (
    <>
      <Link to="/countries">Back</Link>
      <h1>{data[0].name.common}</h1>;
    </>
  );
};

export default CountryMain;

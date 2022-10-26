import { Link } from "react-router-dom";
import scrap from "../../assets/rusty-scrap-metal.jpg";
export default function NotFound() {
  return (
    <>
      <h1>404 - That page does not seem to exist...</h1>
      <img src={scrap} alt="scrap-metal" width="480"></img>
      <Link to="/">
        <button className="btn">Go home</button>
      </Link>
    </>
  );
}

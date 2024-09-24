// import {CCSProperties} from 'react'
// import ClipLoader from "react-spinners/ClipLoader"
// import BarLoader from "react-spinners/BarLoader"
// import BounceLoader from "react-spinners/BounceLoader"
// import BeatLoader from "react-spinners/BeatLoader"
import CircleLoader from "react-spinners/CircleLoader"
// import ClockLoader from "react-spinners/ClockLoader"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

export const Spinner = () => {

    // let [loading, setLoading] = useState(true);
  return (
    <CircleLoader
    // color={color}
    // loading={loading}
    cssOverride={override}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
    className="font-white text-white"
  />
  )
}

export default Spinner
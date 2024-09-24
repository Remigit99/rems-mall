import { Link } from "react-router-dom";
// import {Camera} from "lucide-react"
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
  let user = false;

  return (
    <nav className=" nav  w-full my-0 mx-auto fixed top-0 left-0 h-16 flex justify-between align-center ">
      <div className="container w-[96%] md:w-[90%] lg:w-[80%] flex justify-between align-center">
        <Link to="/" className="">
          <h2 className="text-[#3f4146]">
            Rem<span className="text-white">Mall</span>
          </h2>
        </Link>

        <ul className="flex gap-8 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/eletronic">Eletronic</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        {user ? (
          <div className="flex align-middle gap-6 text-white">
            <FaRegUser className="text-xl" />
            <CiHeart className="text-xl" />
            <LiaShoppingBagSolid className="text-xl" />
          </div>
        ) : (
          <div className="flex align-middle gap-6 text-white">
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/login"}>Login</Link>
            <LiaShoppingBagSolid className="text-xl" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

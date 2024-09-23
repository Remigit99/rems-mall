import headerImg from "../assets/header_image_o.png";
import { BsTruck } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-[#ef9e8580] ">
      <div className="header__container pt-28">
        <div className="main grid grid-cols-2 place-items-center gap-20">
          <div>
            <h1 className="text-[#0B0F28] font-extrabold text-6xl">
              The Best{" "}
            </h1>
            <h1 className="text-[#0B0F28] font-extrabold text-6xl">
              Collections 2024
            </h1>

            <p className="my-8">
              Luxury fashionable clothing and stationary items at an amazingly
              affordable prices
            </p>

            <div className="my-8">
              <Link to="/" className="px-5 py-5 text-white bg-[#F46F4D]">
                Shop Now
                <FiArrowUp className="text-white"/>
              </Link>
            </div>
          </div>

          <div>
            <img src={headerImg} alt="header_img" />
          </div>
        </div>
        <div className="flex justify-between items-center w-[80%] bg-white p-8 mx-auto my-0 border-x-2 border-dashed border-red-400 border-b-2 mt-[-2rem]">
          <div className="flex items-center gap-4">
            <div>
              <BsTruck className="text-[2.5rem] text-[#F46F4D]" />
            </div>
            <div>
              <h3 className="font-bold ">Free</h3>
              <p>Delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <MdPayment className="text-[2.5rem] text-[#F46F4D]" />
            </div>
            <div>
              <h3 className="font-bold ">Quick Payment</h3>
              <p>100% Secure Payment</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <IoGiftOutline className="text-[2.5rem] text-[#F46F4D]" />
            </div>
            <div>
              <h3 className="font-bold ">Gift Certificate</h3>
              <p>Buy Now $109.99</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <RiCustomerService2Fill className="text-[2.5rem] text-[#F46F4D]" />
            </div>

            <div>
              <h3 className="font-bold ">24/7 Support</h3>
              <p>Ready Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import headerImg from "../assets/header_image_o.png";
import { BsTruck } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <section className="bg-[#ef9e8580] ">
      <div className="header__container pt-28 grid grid-cols-2 place-items-center gap-20  ">
        <div>
          <h1 className="text-white text-5xl">The Best Collections 2024</h1>
        </div>

        <div>
          <img src={headerImg} alt="header_img" />
        </div>
      </div>

      <div>
        <BsTruck />
        <MdPayment />
        <IoGiftOutline />
        <RiCustomerService2Fill />
      </div>
    </section>
  );
};

export default Home;

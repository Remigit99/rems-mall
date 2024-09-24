import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { GoEyeClosed } from "react-icons/go";


const Signup = () => {
  const { formData, setFormData } = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

const [passwordVisibility, setPasswordVisibility] = useState(false)


  return (
    <div className="container pt-36 ">
      <div className="grid place-content-center items-center rounded-2xl color__sec1 w-2/4 my-0 mx-auto  pt-10 pb-6">
        <h1 className="text-3xl mt-8 mb-3">Create Your Account</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="my-6 bg-slate-100 flex items-center p-2 rounded-full">
              <div>
                <FaRegUser className="text-[1.5rem] border-r-xl" />
              </div>
              <input
                className="bg-transparent px-4 py-2 outline-none border-none"
                type="text"
                name="Full Name"
                id="fullName"
                placeholder="Full Name "
              />
            </div>
            <div className="my-6 bg-slate-100 flex items-center p-2 rounded-full">
              <div>
                <MdOutlineMail className="text-[1.5rem] border-r-xl" />
              </div>
              <input
                className="bg-transparent px-4 py-2 outline-none border-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="my-6 bg-slate-100 flex items-center p-2 rounded-full">
              <div>
                <RiLockPasswordLine className="text-[1.5rem] border-" />
              </div>
              <input
                className="bg-transparent px-4 py-2 outline-none border-none"
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />

              <div>
                {
                  passwordVisibility ? 
                <GoEyeClosed className="text-[1.5rem] cursor-pointer" onClick={() => setPasswordVisibility(false)}/>:

                <LuEye className="text-[1.5rem] cursor-pointer" onClick={() => setPasswordVisibility(true)} />
                }
              </div>
            </div>

            <div className="text-center">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

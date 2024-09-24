import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { GoEyeClosed } from "react-icons/go";

import { Spinner } from "../../lib/Spinner";
import { axiosInstance } from "../../lib/axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    try {
      const response = await axiosInstance.post("/auth/signup", formData);
      console.log(response, response.data);
      setIsLoading(false);
      toast.success("Sign Up Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error(error.message);
    }
    // setIsLoading(false)
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);

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
                name="fullName"
                id="fullName"
                placeholder="Full Name "
                value={formData?.fullName || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
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
                value={formData?.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
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
                value={formData?.password || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />

              <div>
                {passwordVisibility ? (
                  <GoEyeClosed
                    className="text-[1.5rem] cursor-pointer"
                    onClick={() => setPasswordVisibility(false)}
                  />
                ) : (
                  <LuEye
                    className="text-[1.5rem] cursor-pointer"
                    onClick={() => setPasswordVisibility(true)}
                  />
                )}
              </div>
            </div>

            <div className="text-center">
              <button className="btn" disabled={isLoading}>
                {isLoading ? <Spinner /> : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast";




export const useUserStore = create( (set)=>({

user: null,
isLoading: false,
checkingAuth: true,

signup: async({fullName, email, password}) =>{

    set({isLoading: true})

    try {
        const response = await axiosInstance.post("/auth/signup", {fullName, email, password});
        console.log("response", response.data);
        set({ user: response.data.user  ,isLoading: false});
        toast.success("Sign Up Successfully");
      } catch (error) {
        console.log(error.message);
        set({isLoading: false});
        toast.error(error.message);
      }
}

}))
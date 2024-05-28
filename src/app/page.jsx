import { RiArrowDownSLine } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";

function Loginpage() {
  return (
    <>
      <section>
        <header className="flex md:hidden w-screen justify-center mt-3 ">
          <span className="flex font-thin font-sans text-gray-600">
            English <RiArrowDownSLine className=" mt-1" />
          </span>
        </header>
        <section className="   md:items-center items-center relative w-screen h-[40rem]    mt-2 md:mt-60  lg:mt-auto flex flex-col">
          <span className=" mie hidden md:items-center md:justify-center   md:flex gap-2 absolute w-[30%] top-[55%] ">
            <FaSquareFacebook /> Log in with Facebook
          </span>
          <img
            className=" md:w-[18%] lg:w-[12%] absolute w-1/2 top-[6%] "
            src="/Instagram-Logo.png"
            alt="Instagram piture"
          />
          <span className=" md:hidden text-base font-sans absolute top-[22%] rounded-lg h-10 w-3/4 flex items-center justify-center gap-1 bg-[#0095F6]  text-white">
            <FaSquareFacebook /> Continue with Facebook
          </span>
          <span
            id="line"
            className=" md:top-[48%] lg:w-[24%] md:w-[40%] top-[32%] w-3/4  absolute flex justify-center items-center gap-2 "
          >
            <span className=" font-sans font-extralight  "> OR </span>
          </span>
          <section className=" md:items-center  flex gap-2 flex-col absolute  text-base w-3/4 top-[38%]  md:top-[20%]">
            <input
              type="text"
              className=" md:w-[50%] lg:w-[30%] border-none placeholder-gray-500 p-3 rounded-lg   outline-none bg-[#FAFAFA]"
              placeholder=" Phone number, username, or email"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#FAFAFA] md:w-[50%] lg:w-[30%]  placeholder-gray-500 border-none border rounded-lg p-3   outline-none"
            />
          </section>
          <span className="  absolute top-[55%] right-[15%] md:top-[60%] md:right-auto font-sans text-[#0095F6] text-base">
            Forgot password?
          </span>
          <span className=" md:w-[40%] lg:w-[24%] md:top-[38%] text-base font-sans absolute top-[63%] rounded-lg h-10 w-3/4 flex items-center justify-center bg-[#0095F6]  text-white">
            Log in
          </span>
          <span className=" text-base font-sans absolute md:top-[65%] top-[72%]  h-10 w-3/4 flex items-center justify-center gap-2 ">
            <span className=" text-gray-500">Don't have an account?</span>
            <span className="text-[#0095F6]">Sign up</span>
          </span>
        </section>
        <span className="  flex fixed  gap-1 flex-col items-center justify-center  w-full h-[11%] top-[89%] bg-[#FAFAFA] ">
          <span className="text-xs font-sans text-gray-500">from</span>
          <span className="flex gap-1 text-red-400">
            <FaMeta /> Meta
          </span>
        </span>
      </section>
    </>
  );
}

export default Loginpage;

import React from "react";
import FormSearchProduct from "../Form/FormSearchProduct";
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";
const Banner = () => {
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <div className="bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/84c449beda884aa8f9f72023e2d8b3fd-1705308514872/hero-lg-x1.png')] h-[668px] w-full bg-cover bg-center rounded-3xl flex justify-center items-center flex-col">
        <h3 className="text-white text-[30px] lg:text-[45px] xl:text-[60px] font-semibold">
          Scale your professional <br />{" "}
          <span className="relative -left-[20px] lg:-left-[35px]">
            workforce with freelancers
          </span>
        </h3>
        <div className="relative -left-[20px] lg:-left-[35px]">
          <WrapperSuggestJob>
            <FormSearchProduct />
          </WrapperSuggestJob>
        </div>
      </div>
    </div>
  );
};

export default Banner;

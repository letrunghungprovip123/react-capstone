import React, { useEffect, useState } from "react";
import { path } from "../../common/path";
import { useNavigate,Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { congViecService } from "../../services/congViec.service";
import useDebounce from "../../hooks/useDebounce";
const FormSearchProduct = ({ setOpenDropDown,handleGetValueChildren }) => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");


  useEffect(() => {
    if(!valueSearch){
      setOpenDropDown(false)
    }
    handleGetValueChildren(valueSearch)
  },[valueSearch])
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`${path.listJob}?tenCongViec=${valueSearch}`);
  };
  const handleChange = (event) => {
    setValueSearch(event.target.value);
    congViecService
      .layCongViecTheoTen(event.target.value)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
    if(!event.target.value){
        setOpenDropDown(false)
    }
  };
  return (
    <>
        <form onSubmit={handleSubmit} className="hidden lg:inline-flex mt-5">
          <div className="flex py-2 pl-5 w-[600px] bg-white rounded-lg">
            <input
              onChange={handleChange}
              className="flex-1 focus:border-none focus:outline-none"
              type="text"
              placeholder="Nhập tên công việc cần tìm kiếm"
            />
            <button className="py-3 px-4 mr-2 bg-[#003912] text-lg rounded-md text-white" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
    </>
  );
};

export default FormSearchProduct;

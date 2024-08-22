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
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between w-[500px] border rounded-md border-black pl-4">
            <input
              onChange={handleChange}
              className="flex-1 focus:border-none focus:outline-none"
              type="text"
              placeholder="Nhập tên công việc cần tìm kiếm"
            />
            <button className="p-2 text-sm" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
    </>
  );
};

export default FormSearchProduct;

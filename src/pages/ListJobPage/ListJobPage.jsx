import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";

const ListJobPage = () => {
  const [seachParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState();
  console.log(seachParam.get("tenCongViec"));
  useEffect(() => {
    let tenCongViec = seachParam.get("tenCongViec");
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [seachParam.get("tenCongViec")]);
  return <div className="container">
    <h1 className="text-5xl font-bold">Danh sách công việc dưạ theo từ khoá: {seachParam.get("tenCongViec") ? seachParam.get("tenCongViec") : ""}</h1>
    <div className="grid grid-cols-4 gap-5 mt-10">
        {listJob?.map((item,index) => {
            return (
              <div className="space-y-4 border rounded-md">
                <img src={item.congViec.hinhAnh} className="w-full" alt="" />
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <h4 className="font-bold text-lg">{item.tenNguoiTao}</h4>
                  </div>
                  <div>
                    <h3>{item.congViec.tenCongViec}</h3>
                    <p>
                      <span className="text-yellow-400 space-x-2">
                        <i class="fa-solid fa-star"> </i>
                        {item.congViec.saoCongViec}{" "}
                      </span>
                      <span className="text-gray-400">
                        ({item.congViec.danhGia})
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <i class="fa-solid fa-heart"></i>
                    <p>
                      Starting at <span>$15</span>
                    </p>
                  </div>
                </div>
              </div>
            );
        })}
    </div>
  </div>;
};

export default ListJobPage;

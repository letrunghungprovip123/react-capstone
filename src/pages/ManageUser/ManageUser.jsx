import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserApi } from "../../redux/nguoiDungSlice";
import nguoiDungSlice from "../../redux/nguoiDungSlice";
import { Space, Table, Tag } from "antd";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";

const ManageUser = () => {
  const { showNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);
  const { listNguoiDung } = useSelector((state) => state.nguoiDungSlice);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => {
        return (
          <img
            src={
              text == ""
                ? "https://raw.githubusercontent.com/Abdurrahman-Subh/mdx-blog/main/images/logo-fiverr.png"
                : text
            }
            alt=""
            width={100}
            height={50}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <Tag color={text == "USER" ? "cyan-inverse" : "red-inverse"}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-3">
          <button
            onClick={() => {
              nguoiDungService
                .deleteUser(record.id)
                .then((res) => {
                  console.log(res);
                  dispatch(getValueUserApi())
                  showNotification("Xoá thành công","successs")
                })
                .catch((err) => {
                  console.log(err);
                  showNotification(err.response.data.message || err.response.data.content,"error")
                });
            }}
            className="bg-red-500/85 text-white py-2 px-5 rounded-md"
          >
            Xoá
          </button>
          <button className="bg-yellow-500/85 text-white py-2 px-5 rounded-md">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={listNguoiDung} />
    </div>
  );
};

export default ManageUser;

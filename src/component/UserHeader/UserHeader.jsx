import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../icon/LogoIcon";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "antd";
import UserIcon from "../icon/UserIcon";
import LogOutIcon from "../icon/LogOutIcon";
import FormSearchProduct from "../Form/FormSearchProduct";
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";
const items = [
  {
    label: (
      <Link className="flex gap-2 items-center">
        <UserIcon color="black" />
        Thông tin cá nhân
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="flex gap-2 items-center">
        <LogOutIcon />
        Đăng xuất
      </Link>
    ),
    key: "0",
  },
];

const UserHeader = () => {
  const { inforUser } = useSelector((state) => state.authSlice);
  const checkUserLogin = () => {
    return inforUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar className="cursor-pointer hover:bg-orange-500 duration-500">
          {inforUser.user.name.charAt(0)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className="py-2 px-4 rounded-md hover:text-green-500 duration-300"
        >
          Sign In
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white"
        >
          Join
        </Link>
      </>
    );
  };
  return (
    <header className="py-5">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-5">
            <Link to={path.homePage}>
              <LogoIcon />
            </Link>
            <WrapperSuggestJob>
              <FormSearchProduct />
            </WrapperSuggestJob>
          </div>
          <nav className="header_navigate space-x-5">{checkUserLogin()}</nav>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;

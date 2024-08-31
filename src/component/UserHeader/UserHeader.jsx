import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../icon/LogoIcon";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "antd";
import UserIcon from "../icon/UserIcon";
import LogOutIcon from "../icon/LogOutIcon";

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
          className=" rounded-md hover:text-green-500 duration-300 pr-2"
        >
          Sign In
        </Link>
        <Link
          to={path.signUp}
          className="py-[5px] px-5 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white"
        >
          Join
        </Link>
      </>
    );
  };
  return (
    <header className="px-5 py-6 xl:px-0 border-b sticky">
      <div className="container">
        <div className="header_content flex items-center justify-between space-x-5 min-w-full">
          <div className="header_logo">
            <Link to={path.homePage}>
              <LogoIcon />
            </Link>
          </div>
          <div className="flex header_navigate gap-3 lg:gap-6 font-semibold text-lg justify-end items-center">
            <h3 className="flex items-center gap-1 hover:bg-gray-100 rounded-md py-[7px] px-4">
              Fiverr Pro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-4"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </h3>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown1"
              className="flex items-center gap-1 hover:bg-gray-100 rounded-md py-[7px] px-4"
              type="button"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-4"
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>
            <div
              id="dropdown1"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 sm:w-[300px] sm:h-[400px]"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <div className="gap-2 items-center hover-green hidden lg:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-4"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
              </svg>
              English
            </div>
            <h3 className="hover-green pr-2">Become a Seller</h3>
            {checkUserLogin()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;

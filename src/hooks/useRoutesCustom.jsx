import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../template/userTemplate/UserTemplate";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import { path } from "../common/path";
import LoginPage from "../pages/LoginPage/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import WrapperSuggestJob from "../component/Wrapper/WrapperSuggestJob";
import { Skeleton } from "antd";
import IndexPage from "../pages/IndexPage/IndexPage";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          index : true,
          element: <IndexPage />
        },
        {
          path: path.listJob,
          element: <ListJobPage />,
        },
      ],
    },
    {
      path: path.pageNotFound,
      element: <PageNotFound />,
    },
    {
      path: path.signIn,
      element: <LoginPage />,
    },

  ]);
  return routes;
};

export default useRoutesCustom;

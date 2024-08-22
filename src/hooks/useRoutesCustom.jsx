import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../template/userTemplate/UserTemplate";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import { path } from "../common/path";
import LoginPage from "../pages/LoginPage/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import WrapperSuggestJob from "../component/Wrapper/WrapperSuggestJob";
import AdminTemplate from "../template/userTemplate/AdminTemplate";
import { Skeleton } from "antd";
import CreateUser from "../pages/CreateUser/CreateUser";
const AdminLogin = React.lazy(() => import("../pages/AdminLogin/AdminLogin"))
const ManageUser = React.lazy(() => import("./../pages/ManageUser/ManageUser"));

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
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
    {
      path: path.admin,
      element: <AdminTemplate />,
      children: [
        {
          path: "manager-user",
          // index: true,
          element: (
            <Suspense fallback={<Skeleton active />}>
              <ManageUser />
            </Suspense>
          ),
        },
        {
          path:"create-user",
          element: <CreateUser />
        }
      ],
    },
    {
      path: "/admin-login",
      element: (
        <Suspense fallback={<Skeleton active />}>
          <AdminLogin />
        </Suspense>
      ),
    },
  ]);
  return routes;
};

export default useRoutesCustom;

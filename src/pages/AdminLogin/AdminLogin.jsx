import React, { useContext } from "react";
import InputCustom from "../../component/input/InputCustom";
import { useFormik } from "formik";
import Password from "antd/es/input/Password";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { getLocalStorage, setLocalStorage } from "../../utils/util";
import { useNavigate } from "react-router-dom";
import { getInforUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
const AdminLogin = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      authService
        .signIn(values)
        .then((res) => {
          console.log(res);
          if (res.data.content.user.role == "USER") {
            showNotification("Bạn không có quyền đăng nhập", "error");
            let soLanViPham = getLocalStorage("viPham");
            if (!soLanViPham) {
              setLocalStorage("viPham", 1);
            } else {
              soLanViPham++;
              soLanViPham == 3
                ? (window.location.href = "https://www.google.com/")
                : setLocalStorage("viPham", soLanViPham);
            }
          }else {
            setLocalStorage('admin',res.data.content)
            dispatch(getInforUser(res.data.content))
            navigate("/admin")
          }
        })
        .catch((err) => {
          console.log(err);
          showNotification("Có lỗi xảy ra vui lòng thử lại","error")
        });
    },
  });
  return (
    <div>
      <div className="container">
        <div className="admin_login flex h-screen">
          <div className="admin_login_image w-1/2"></div>
          <div className="admin_login_form w-1/2 flex flex-col h-full justify-center">
            <h2 className="text-3xl font-bold text-center mb-5">
              Đăng nhập dành cho admin
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputCustom
                labelContent="Tài khoản"
                name={"email"}
                onChange={handleChange}
                value={values.email}
              />
              <InputCustom
                labelContent="Mật khẩu"
                name={"password"}
                onChange={handleChange}
                value={values.password}
                typeInput="password"
              />
              <div>
                <button
                  className="py-3 px-5 w-full block bg-black text-white rounded-md"
                  type="submit"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

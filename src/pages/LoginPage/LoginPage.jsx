import React, { useContext } from "react";
import signInAnimation from "../../assets/animation/signInAnimation.json";
import { useLottie } from "lottie-react";
import InputCustom from "../../component/input/InputCustom";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { authService } from "../../services/auth.service";
import { setLocalStorage } from "../../utils/util";
import { NotificationContext } from "../../App";
import { getInforUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import useResponsive from "../../hooks/useResponsive";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const isResponsive = useResponsive({
    mobile : 576,
    tablet : 992,
    laptop : 1200,
})
console.log(isResponsive)
  const { showNotification } = useContext(NotificationContext);
  const options = {
    animationData: signInAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
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
            // Thực hiện lưu trữ localStorage
            setLocalStorage("user", res.data.content);
            dispatch(getInforUser(res.data.content));
            showNotification("Đăng nhập thành công!", "success", 2000);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
            showNotification(err.response.data.content, "error");
          });
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .required("Vui lòng không bỏ trống")
          .email("Vui lòng nhập đúng định dạng email"),
        password: yup.string().required("Vui lòng không bỏ trống"),
      }),
    });
  return (
    <div className="">
      <div className="container">
        <div className={`loginPage_content ${isResponsive.mobile ? "block" : "flex"} items-center h-screen`}>
          <div
            className={`loginPage_img ${
              isResponsive.mobile ? "w-full" : "w-1/2"
            }`}
          >
            {View}
          </div>
          <div
            className={`loginPage_form ${
              isResponsive.mobile ? "w-full" : "w-1/2"
            }`}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <h1 className="text-center text-4xl font-medium uppercase">
                Giao diện đăng nhập
              </h1>
              <InputCustom
                labelContent={"Email"}
                placeholder={"Vui lòng nhập Email"}
                id={"email"}
                name={"email"}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <InputCustom
                labelContent={"Password"}
                placeholder={"Vui lòng nhập mật khẩu"}
                typeInput="password"
                id={"password"}
                name={"password"}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
              <div>
                <button
                  className="inline-block w-full bg-black text-white py-2 px-5 rounded-md"
                  type="submit"
                >
                  Đăng nhập
                </button>
                <Link className="mt-5 inline-block">
                  Chưa có tài khoản?{" "}
                  <span className="text-blue-600 hover:underline">Đăng ký</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

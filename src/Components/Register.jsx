import React from "react";
import Helmet from "../Components/Helmet";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validRegister } from "../utils/Valid";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authRegister } from "../Redux/Auth/authSlide";
import { useSelector } from "react-redux";
import { BigLoading } from "../Components/Loading";
import { register } from "../api/auth";

const Register = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("ssss");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const currentUser = useSelector((state) => state.auth);

  const gotoLogin = () => {
    history.push("/login");
  };

  const Register = () => {
    const user = {
      username,
      name,
      email,
      password,
      phonenumber,
      firstName,
      lastName,
    };
    const result = validRegister(user);

    if (result.errLength) {
      toast.error(`${result.errMsg}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log("email", email);
      register({
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phonenumber,
        gender: gender,
      });
      // dispatch(authRegister(user))
      toast.success(
        "Đăng ký tài khoản thành công, tự động chuyển trang đăng nhập !",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setTimeout(() => {
        history.push("/login");
      }, 5000);
    }
  };

  return (
    <Helmet title={"Đăng Ký"}>
      <div className="login">
        <div className="login__top">
          {/* <div className="login__top__item">
                   <i class='bx bx-chevron-left'></i>
                   <h5>Quay lại</h5>
            </div> */}
          <div className="login__top__item">
            <div className="login__top__item__img">
              <img src={require("../assets/Img/logo.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="login__content">
          <form action="">
            <h1>Đăng ký</h1>
            {/* <p>
             Một tài khoản kết nối tất cả ứng dụng trực tuyến của Decathlon và người chơi thể thao!
          </p>  */}
            <label>Nhập username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="username"
              className=""
            />
            {/* <label>Nhập họ tên đầy đủ</label>
           <input onChange = {(e) => setName(e.target.value)}  value = {name} type="text" placeholder="Email" className=""/> */}
            <label>Nhập họ</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="họ"
              className=""
            />
            <label>Nhập tên lót</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="tên lót"
              className=""
            />
            <label>Nhập địa chỉ email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className=""
            />
            <label>Nhập mật khẩu</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              placeholder="mật khẩu"
              className=""
            />
            <label>Nhập số điện thoại</label>
            <input
              onChange={(e) => setPhonenumber(e.target.value)}
              value={phonenumber}
              type="text"
              placeholder="số điện thoại"
              className=""
            />
            <label>Giới tính</label>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ display: "flex", gap: "5px" }}>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  value="male"
                  type="radio"
                  placeholder=""
                  className=""
                  name="gender"
                />
                <label>Nam</label>
              </div>

              <div style={{ display: "flex", gap: "5px" }}>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  value="female"
                  type="radio"
                  placeholder="số điện thoại"
                  className=""
                  name="gender"
                />
                <label>Nữ</label>
              </div>
            </div>
            <Button
              backgroundColor={"blue"}
              size={"sm"}
              onClick={() => Register()}
            >
              Tiếp
            </Button>
            <div className="login__content__spare">
              <span></span>
              <p>Hoặc</p>
              <span></span>
            </div>
            <div className="login__content__social">
              <div className="login__content__social__item">
                <i className="bx bxl-facebook-circle"></i>
              </div>

              <div className="login__content__social__item">
                <i className="bx bxl-google"></i>
              </div>
            </div>
            <p className="login__content__register__txt">
              Bạn chưa có tài khoản?{" "}
              <span onClick={() => gotoLogin()}>Đăng nhập</span>!
            </p>
            Liên hệ đội ngũ chăm sóc khách hàng Thứ 2 - Thứ 7: từ 9h đến 22h;
            Chủ Nhật: từ 10h đến 19h 18009044
          </form>
        </div>
      </div>

      <ToastContainer />

      {loading ? <BigLoading /> : ""}
    </Helmet>
  );
};

export default Register;

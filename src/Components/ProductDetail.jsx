import React, { useEffect } from "react";
import Button from "./Button";
import Helmet from "../Components/Helmet";
import { useState } from "react";
import { addItem } from "../Redux/shopping-cart/cartitemSlide";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { BigLoading } from "./Loading";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageGallery from "react-image-gallery";
import { addCartItem } from "../api/cart";

const ProductDetail = (props) => {
  const dispatch = useDispatch();

  console.log("ProductDate", props.product);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const cartItems = useSelector((state) => state.cartItems.value);

  const [loading, setLoading] = useState(false);

  const images = props?.images;

  const [color, setColor] = useState("");

  const mainImage = props?.mainImage;

  useEffect(() => {
    setColor(props?.product?.color[0]);
  }, [props?.product]);

  const addToCart = async () => {
    addCartItem({
      product: {
        productId: props?.product?.id,
        quantity: 1,
      },
      color: color,
    })
      .then((res) => {
        toast.success("Thêm sản phẩm vào giỏ hàng thành công !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          toast.error("Bạn cần đăng nhâp để mua hàng !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    // if(!currentUser){
    //   toast.error("Bạn cần đăng nhâp để mua hàng !", {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // })
    // }else {
    //     setLoading(true)
    //     await dispatch(addItem({
    //     name : props.product.name,
    //     price : props.product.price,
    //     slug : props.product.slug,
    //     rate : props.product.rate,
    //     quantity : 1,
    //     image :  props.product.image[0],
    //     userId : currentUser.uid,
    //     order : cartItems.length
    //   }))
    //   setLoading(false)

    //   toast.success("Thêm sản phẩm vào giỏ hàng thành công !", {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // })

    // }
  };

  return (
    <Helmet title={props?.product?.name}>
      <div className="productdetail">
        <div className="productdetail__left">
          <div className="productdetail__left__top">
            {`Trang chủ / ${props?.product?.type} / ${props?.product?.name}`}
          </div>
          {
            props.images && props?.images.length > 0 && (
              <ImageGallery items={props?.images} fullscreen="false" />
            )
            // <ImageGallery items={props?.mainImage} fullscreen = 'false'/>
          }
        </div>

        <div className="productdetail__right">
          <div className="productdetail__right__item">
            <div className="productdetail__right__item__name">
              <div className="productdetail__right__item__name__company">
                <p>NABAIJI</p>
              </div>

              <div className="productdetail__right__item__name__nameproduct">
                <h4>{props?.product?.name}</h4>
              </div>

              <div className="productdetail__right__item__name__code">
                <p>Mã sản phẩm: 8574421</p>
              </div>
            </div>
          </div>

          <div className="productdetail__right__item">
            <div className="productdetail__right__item__rating">
              <span className="productdetail__right__item__rating__price">
                {props?.product?.money} VNĐ
              </span>
              <span className="productdetail__right__item__rating__chev"></span>
              <span className="productdetail__right__item__rating__start">
                <p>{props?.product?.rate}/5 </p>
                <img src={require("../assets/Img/start.png")} alt="" />
                11
              </span>

              <span>
                <p>XEM TẤT CẢ ĐÁNH GIÁ</p>
                <div className="productdetail__right__item__rating__start__img__more">
                  <img src={require("../assets/Img/startbrown.png")} alt="" />
                </div>
              </span>
            </div>
          </div>

          <div className="productdetail__right__item">
            <div className="productdetail__right__item__maintenance">
              <div className="productdetail__right__item__maintenance__img">
                <img src={require("../assets/Img/maintain.png")} alt="" />
              </div>

              <div className="productdetail__right__item__maintenance__text">
                <p>
                  <span className="color-blue">BẢO HÀNH </span>
                  <br></br>
                  <span className="color-orange">TỐI THIỂU 2 NĂM</span>
                </p>
              </div>
            </div>
          </div>

          <div className="productdetail__right__item">
            <div className="productdetail__right__item__size">
              <div className="productdetail__right__item__size__select">
                <h5>MÀU</h5>
                <select
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Chọn màu"
                  name=""
                  id=""
                >
                  {props?.product?.color.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="productdetail__right__item__size__chart">
                <div className="productdetail__right__item__size__chart__img">
                  <img
                    src={require("../assets/Img/chartsizeproduct.png")}
                    alt=""
                  />
                </div>
                <p className="color-blue">HƯỚNG DẪN CHỌN MÀU</p>
                <i className="bx bxs-chevron-right color-blue"></i>
              </div>
            </div>
          </div>

          <div className="productdetail__right__item">
            <div className="productdetail__right__item__button">
              {/* <div className="productdetail__right__item__button__procesing">
                                  <div></div>
                              </div> */}

              <div className="productdetail__right__item__button__list">
                <div className="productdetail__right__item__button__child">
                  <Button
                    icon={"bx bx-cart"}
                    backgroundColor={"yellow"}
                    size={"sm"}
                    onClick={() => addToCart()}
                  >
                    <p>THÊM VÀO GIỎ HÀNG</p>
                  </Button>
                </div>

                <div className="productdetail__right__item__button__child">
                  <Button backgroundColor={"white"} size={"sm"}>
                    <p>MUA TẠI CỬA HÀNG</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="productdetail__right__item">
            <div className="productdetail__right__item__delivery">
              <div className="productdetail__right__item__delivery__address">
                <div className="productdetail__right__item__delivery__address__left">
                  <h4>GIAO HÀNG</h4>
                  <p>Hình thức giao hàng có sẵn cho tỉnh & quận</p>
                  <span>
                    <span>
                      Hồ Chí Minh Quận 1
                      <img src={require("../assets/Img/check.png")} alt="" />
                    </span>

                    <p>Thay Đổi</p>
                  </span>
                </div>

                <div className="productdetail__right__item__delivery__address__right">
                  <div className="productdetail__right__item__delivery__address__right__item">
                    <div className="productdetail__right__item__delivery__address__right__item__img">
                      <img
                        src={require("../assets/Img/service-icon-3.png")}
                        alt=""
                      />
                    </div>
                    <p>
                      Freeship tối đa 100k <br></br> cho đơn trên 899k
                    </p>
                  </div>

                  <div className="productdetail__right__item__delivery__address__right__item">
                    <div className="productdetail__right__item__delivery__address__right__item__img pb-20">
                      <img
                        src={require("../assets/Img/service-icon-4.png")}
                        alt=""
                      />
                    </div>
                    <p>30 ngày trả hàng</p>
                  </div>
                </div>
              </div>

              <div className="productdetail__right__item__delivery__date">
                <div className="productdetail__right__item__delivery__date__icon">
                  <img
                    src={require("../assets/Img/detaildelivery.png")}
                    alt=""
                  />
                </div>

                <div className="productdetail__right__item__delivery__date__text">
                  <p>GIAO HÀNG TẠI NHÀ Từ Thứ sáu, 18/03</p>
                </div>
              </div>

              <div className="productdetail__right__item__delivery__receive">
                <div className="productdetail__right__item__delivery__receive__icon">
                  <img src={require("../assets/Img/receive.png")} alt="" />
                </div>

                <div className="productdetail__right__item__delivery__receive__text">
                  NHẬN HÀNG TẠI ĐIỂM CLICK & COLLECT Từ Ngày mai, <br></br>{" "}
                  16/03 <br></br>
                  <p>Vui lòng chọn khi thanh toán</p>
                </div>

                <div className="productdetail__right__item__delivery__receive__address">
                  <span className="productdetail__right__item__delivery__receive__address__wrapper">
                    <p>TẤT CẢ ĐIỂM LẤY HÀNG</p>
                    <i className="bx bxs-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="productdetail__right__item">
            <div className="productdetail__right__item__purpose">
              <h5>MỤC ĐÍCH SẢN PHẨM</h5>
              <p>
                Dành cho người bơi ở trình độ trung bình cần kính ổn định và có
                tầm nhìn rộng để tập luyện hoặc giữ dáng. Tính năng chống đọng
                sương Kính bơi SPIRIT có tầm nhìn rộng. Rất thoải mái nhờ thiết
                kế mềm dẻo, nhỏ gọn, đảm bảo khả năng kín nước tuyệt vời. Tròng
                kính tráng gương.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
      {loading && <BigLoading />}
    </Helmet>
  );
};

export default ProductDetail;

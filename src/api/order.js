import { Method } from "../utils/constants";
import axios from "axios";
import axiosClient from "./index";
import Cookies from "js-cookie";


const getOrder = async () => {
  const token = Cookies.get("accessToken")
  return axios({
    method: "GET",
    url: process.env.REACT_APP_PUBLIC_API_URL + '/v1/order',
    // params: params,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};



const addOrder = async (data) => {
  const token = Cookies.get("accessToken")
  return axios({
    method: "POST",
    url: process.env.REACT_APP_PUBLIC_API_URL + '/v1/order',
    data : data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    // params: params,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};


const updateOrder = async (data , status , id) => {
    const token = Cookies.get("accessToken")
    return axios({
      method: "PATCH",
      url: process.env.REACT_APP_PUBLIC_API_URL + `/v1/order/${status}/${id}`,
      data : data
      // params: params,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
};




const getDetailOrder = async (id) => {
  const token = Cookies.get("accessToken")
  return axios({
    method: "GET",
    url: process.env.REACT_APP_PUBLIC_API_URL + `/v1/order/${id}`,
    // params: params,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};




export {getOrder , getDetailOrder, updateOrder, addOrder};

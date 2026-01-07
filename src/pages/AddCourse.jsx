import React, { useState } from "react";
import { v4 as randomId } from "uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCourse = () => {
  let navigate = useNavigate();
  let [courseData, setCourseData] = useState({
    title: "",
    image: "",
    price: "",
    duration: "",
    author: "",
    desc: "",
    id: randomId(),
  });

  let { title, image, price, desc, duration, author } = courseData;

  let handleChange = (e) => {
    let name = e.target.name;
    setCourseData({ ...courseData, [name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title.trim() &&
      image.trim() &&
      price.trim() &&
      desc.trim() &&
      duration.trim() &&
      author.trim()
    ) {
      let res = await axios.post("", courseData);
      console.log(res);
      if (res.status == 201) {
        toast.sucess("course added sucessfully");
        navigate("/");
      }
    }
    setCourseData({
      title: "",
      image: "",
      price: "",
      duration: "",
      author: "",
      desc: "",
    });
  };

  return <div></div>;
};

export default AddCourse;

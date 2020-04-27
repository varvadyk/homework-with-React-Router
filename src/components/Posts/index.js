import React from "react";
import '../../components/Posts/style.css';
import { FaChevronCircleDown,FaChevronDown,FaRegComment,FaRegHeart } from "react-icons/fa";
import {FiRepeat,FiUpload}from "react-icons/fi";


const  Posts = ({photo,name,nickname,date,content,image} ) => {

return (
        <div className="wrapper">
        <div  className="box">
          <div className="header_container">
            <img className="photo_img" src={photo} alt="photo1"></img>
            <div className="header_flex">
            <div className="user_info">
              <div className="author">{name}</div>
            <div className="sub">  <FaChevronCircleDown  color="white"/></div>
              <div className="sub">{nickname}</div>
              <div className="sub">•</div>
              <div className=" sub ">{date}</div>
              <div className=" sub sub_down"><FaChevronDown /></div>
              </div>
               <div className="content">{content}</div>
              </div>
            </div>
            <img className="starwarms_image" src={image}  alt="photo1"></img>
          <div className="footer_icons">
  <div className ="comment"> <FaRegComment /><span className="number">482</span></div>
  <div className ="repeat"> <FiRepeat /><span className="number">146</span></div>
  <div className ="like"><FaRegHeart  /><span className="number">887</span> </div>
  <div className ="upload"><FiUpload /></div>
          </div>
        </div>
      </div>
        );
}
export default Posts;

import React from "react";
import '../../components/Posts/style.css';
import { FaChevronCircleDown } from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {FaRegComment}from "react-icons/fa";
import {FiRepeat}from "react-icons/fi";
import{FaRegHeart}from "react-icons/fa";
import {FiUpload}from "react-icons/fi";


function Posts(props) {
    return (
        <div className="wrapper">
        <div  className="box">
          <div className="header_container">
            <img className="photo_img" src={props.author.photo}></img>
            <div className="header_flex">
            <div className="user_info">
              <div className="author">{props.author.name}</div>
            <div className="sub">  <FaChevronCircleDown  color="white"/></div>
              <div className="sub">{props.author.nickname}</div>
              <div className="sub">•</div>
              <div className=" sub ">{props.date}</div>
              <div className=" sub sub_down"><FaChevronDown /></div>
              </div>
               <div className="content">{props.content}</div>
              </div>
            </div>
            <img className="starwarms_image" src={props.image}></img>
          <div className="footer_icons">
  <div className ="comment"> <FaRegComment /><span className="number">482</span></div>
  <div className ="repeat"> <FiRepeat /><span className="number">146</span></div>
  <div className ="like"><FaRegHeart  /><span className="number">887</span> </div>
  <div className ="upload"><FiUpload /></div>
          </div>
        </div>
      </div>
        )
}

export default Posts;
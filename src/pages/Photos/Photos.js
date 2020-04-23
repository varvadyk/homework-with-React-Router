import React from 'react';
import './style.css';
import SpringGargen from '../../assets/img/spring_photo1.jpg';
import SpringTrees from '../../assets/img/spring_photo2.jpg';
import SpringBloom from '../../assets/img/spring_photo3.jpg';
import SpringSakura from '../../assets/img/spring_photo4.jpg';
import SpringMoreFlowers  from '../../assets/img/spring_photo5.jpg';
import SpringFlowers from '../../assets/img/spring_photo6.jpg';
const Photos = () => {
    return (
         <>
        
         <div className="spring_colactions"> 
         <h2> Welcome! This is a spring</h2> 
              <img src={SpringGargen}  alt="photo"/>
              <img src={SpringSakura} alt="photo" />
              <img src={SpringBloom} alt="photo" />
              <img src={SpringFlowers} alt="photo" />
              <img src={SpringTrees} alt="photo" />
              <img src={SpringMoreFlowers} alt="photo" />
              </div> 
         </> 
            );
 }
  export default Photos;
  

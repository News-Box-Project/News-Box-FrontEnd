import React from "react";
import "./about.css"
import "bootstrap/dist/css/bootstrap.min.css";
import image from './abt-img/SuhiabAlnji.jpg';
import Ahmad from './abt-img/ahmad.jpg';
import Sedra from './abt-img/sedra1.jpg';
import Fahad from './abt-img/fahd.jpg';
import Qais from './abt-img/qais.jpg';
import Wlla from './abt-img/walla.jpg';
import Abdullah from './abt-img/abd.jpg';

export default class About extends React.Component {
  render() {
    return (
      <>
      <div className="about">
        
 <section id="ABOUT">
     <div class="about-1">
         <h1> ABOUT US </h1>
         <p id="discription" className="fs-4">Here we are to inform you what is happening in the world around you. <br/>All newly received or noteworthy information, especially about recent events you will found it here.</p>
         <br/>
         <p id="discription2" className="fs-4">Here's the best devs ever, We're full stack developer under construction.</p>
     </div>
     <div id="about-2">
     <div class="content-box-lg">
         <div class="container">
             <div class="row">
                 <div class="col-md-4">
                    <div class="about-item text-center">
                  
                     <h3>Suhaib Alnaji</h3>
                     <img src={image} height={100} width={100} />                   
                    <p>Computer Science.</p>
                    <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/SuhaibAln">https://github.com/SuhaibAln</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/suhaib-alnaji-0835181b9">https://www.linkedin.com/in/suhaib-alnaji-0835181b9</a>
                     </div>
                 </div>
                 <div class="col-md-4">
                    <div class="about-item text-center">
                   
                     <h3>Ahmad Jubran</h3>
                     <img src={Ahmad} height={100} width={100} /> 
                     <p>Computer Engineer.</p>
                     <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/ahmadjubran">https://github.com/ahmadjubran</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/ahmad-jubran-44202a168/">https://www.linkedin.com/in/ahmad-jubran-44202a168/</a>
                     </div>
                 </div>
                 <div class="col-md-4">
                    <div class="about-item text-center">
                     
                     <h3>Sedra Al-Sabbagh</h3>
                     <img src={Sedra} height={100} width={100} /> 
                     <p>Software Engineering.</p>
                     <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/Sadrah-Alsabagh">https://github.com/Sadrah-Alsabagh</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/sedra-al-sabbagh-a6987b246/">https://www.linkedin.com/in/sedra-al-sabbagh-a6987b246/</a>
                     </div>
                  </div>
                  <div class="col-md-4">
                    <div class="about-item text-center">
                     
                     <h3>Fahad Zidan</h3>
                     <img src={Fahad} height={100} width={100} /> 
                     <p>Electrical Power Engineer.</p>
                     <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/fha96">https://github.com/fha96</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/fahad-rimawe-9832a9172">https://www.linkedin.com/in/fahad-rimawe-9832a9172</a>
                     </div>
                  </div>
                  <div class="col-md-4">
                    <div class="about-item text-center">
                     
                     <h3>Qais Alsgher</h3>
                     <img src={Qais} height={100} width={100} /> 
                     <p>Software Engineering.</p>
                     <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/qais-alsgher">https://github.com/qais-alsgher</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/qais-alsgher-885902237/">https://www.linkedin.com/feed/</a>
                     </div>
                  </div>
                  <div class="col-md-4">
                    <div class="about-item text-center">
                     
                     <h3>wlla Talafha</h3>
                     <img src={Wlla} height={100} width={100} /> 
                     <p>Electronics engineer.</p>
                     <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/WllaTalafha">https://github.com/WllaTalafha</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/wlla-talafha-54b528246">https://www.linkedin.com/in/wlla-talafha-54b528246/</a>
                     </div>
                  </div>
                  <div class="col-md-4">
                    <div class="about-item text-center">
                     
                     <h3>Abdullah Smadi</h3>
                     <img src={Abdullah} height={100} width={100} /> 
                     <p>Computer Science.</p>
                     <p>Contact Info: <br/></p>
                    <p>Github: </p>
                    <a href="https://github.com/Abdsmadi4">https://github.com/Abdsmadi4</a>
                    <p>Linkedin: </p>
                    <a href="https://www.linkedin.com/in/abdallah-smadi-68b093111/">https://www.linkedin.com/in/abdallah-smadi-68b093111/</a>
                     </div>
                  </div>
              </div>
            </div>
         </div>
      </div>   
 </section>
        </div>
        </>
         
    ) 
  
  
  
  }}
      
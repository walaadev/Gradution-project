import React, { useEffect, useState } from "react";
import Header from "./Header";
import chooseus from './../../assets/chooseus.png';
import { Link } from 'react-router-dom';
import  './Home.css';
import SoilDetect from './../../assets/soildetect .png';
import blogimg from './../../assets/blog.png';
import Blog from "./Blog";
import Blogg from "./blogg";
import BlogDetails from "./BlogDetails";
import axios from "axios";
import { Axios } from './../../Api/axios';
import { blogs, baseURL } from "../../Api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function Home  ()  {
  //  const[blogs, setBlogs] = useState([]);
 
  //  useEffect(() => {
  //   Axios.get(`http://127.0.0.1:8000/api/blogs`)
  //   // Axios.get(`${baseURL}/blogs`)
  //       .then((data) => setBlogs(data.data.blogs));
        
  //   }, []);

  return (
    <>
      <Header />
      <section className="chosse us " style={{marginTop:'45px' }}>
        <div className="heade">
        <h1 className="text-center "
          style={{ color: "#6F9A61", fontSize: "60px", paddingTop: '50px',fontWeight:"bold" }}>
          Why Choose Us
        </h1>
        <p className="text-center " style={{marginBottom:'20px',width:'75%',textAlign:'center',color:'gray'}}>"Why choose our AgriGuide over others? Here are some of the features and services that the AgriGuide <br/>offers like 
        determining the type of soil and the appropriate crop and the articles<br/> that you provide to improve your planting "
        </p>
        </div>
        <div className="container" >

          <div className="row">
            <div className="col-md-6">
              <img src={chooseus} alt="chosse us"style={{maxWidth:'100%',height:'460px'}} />
            </div>
            <div className="col-md-6"style={{paddingTop:'25px',fontSize:'18px'}} >
              <p> You can know the type of soil and suitable crops for it</p>
              <p>The best condititions for the plant such the amount of water it needs</p>
              <p>The types of chemical fertilizers,The suitable one and the amount of usage the soil needs</p>
              <p> The ideal timing for planting each type pf plant and to take into account local climate conditions</p>     
              <p> Pests and diseases that can hurt he plant and how to deel with it</p>
              <p style={{fontSize:'22px'}}>you can learn more by trying our services:</p>
              <button style={{borderRadius:'15px'}}><Link to="/service">Service</Link></button>
              
             
          </div>
          </div>
        </div>

      </section>
      {/* <section className="ourBlog" >
        <div  className="heade">
         <h1 className="head" style={{color:'#6F9A61', fontSize:'60px',fontWeight:'bold',paddingTop:'40px',display:'flex',justifyContent:'center'}}>Our Blogs</h1>
         <p style={{color:'gray'}}>"Some blogs teach you more about farming include information on soil conditions,<br/> watering frequency, and other factors"</p>
         </div>
         <div className="container" >
          <div className="row">
            {blogs.map((blog)=>{
              return(
                <div className="col-4" key={blog.id} style={{marginBottom:'160px'}}>
                    <Blog  blog={blog}/>
                </div>
              )
            })}
                 
          </div>
         </div>  
      </section> */}
      <Blogg />
    </>
  );
}
export default Home;





/* <div className="content" style={{paddingTop:'80px'}}>
          <div className="row"> */
    //       <div className="col-4"  style={{paddingLeft:'200px'}}>
    //       <div className="blog" >
    //         <img src={SoilDetect}/>
    //         <div className="blogBody">
    //           <p className="head1"  style={{color:'#6F9A61',display:'flex',justifyContent:'center'}}>Hello to our work</p>
    //           <p className="blgText" style={{color:'black',padding:'6px'}}>
    //             hgu hiyhki iijghg mjhghnmk mnnbhuj nbvghmlkn nmvkhufthb vfgyurfghb bhjgub vggrfgh
    //           </p>
    //           <Link to="/home" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '20px',top:'50px' }}>Read More</Link>
    //         {/* </div>
    //       </div> */}
    //     </div>
    //   </div>
       

    //  </div>

    // style={{marginTop:'65px',width:'75%',display:'flex',marginLeft:'184px'}}


    // <CheckCircleOutlineIcon className="ico"/>
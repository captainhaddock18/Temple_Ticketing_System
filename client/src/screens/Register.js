import React, { useRef, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'; 
import Header from '../components/header'
import * as THREE from 'three';
import styles from  './Register.module.css';
import { ReactComponent as MySvg } from '../images/signin.svg';

export default function Login() {
  
  // const [isSignUpMode, setIsSignUpMode] = useState(false);

  // const handleSignUpClick = () => {
  //   setIsSignUpMode(true);
  // };

  // const handleSignInClick = () => {
  //   setIsSignUpMode(false);
  // };

  // const handleSignUpClick2 = () => {
  //   setIsSignUpMode(true);
  // };

  // const handleSignInClick2 = () => {
  //   setIsSignUpMode(false);
  // };

  // const canvasRef = useRef();
  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   const geometry = new THREE.PlaneGeometry(window.innerWidth / window.innerHeight * 10, 10);
  //   const texture = new THREE.TextureLoader().load('../images/HD-wallpaper-mahadev-lord-shiva-shiva-hindu-bhakti-devotional-god.jpg');
  //   const material = new THREE.MeshBasicMaterial({ map: texture });

  //   const plane = new THREE.Mesh(geometry, material);
  //   scene.add(plane);

  //   camera.position.z = 5;

  //   function animate() {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //   }

  //   animate();

  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;
  //     renderer.setSize(width, height);
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix();
  //     plane.geometry = new THREE.PlaneGeometry(width / height * 10, 10);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  
  return (
    <div>
      <Header/>
    
    <div className={styles.main}>
    
   
    <canvas id="background"></canvas> 
    <div className={styles.container}>
      <div className={styles.Signin_Signup}>
        <form action="" className={styles.sign_in_form}>
          <h2 className={styles.title}>Sign up</h2>
          <div className={styles.input_field}>
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username"/>
          </div>
          <div className={styles.input_field}>
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email"/>
            </div>
          <div className={styles.input_field}>
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password"/>
          </div>
          <input  type="submit" value="Sign up" className={styles.btn}/>
          <p className={styles.social_text}>Or Sign in with social platforms</p>
          <div className={styles.social_media}>
            <a href="#" className={styles.social_icon}>
              <i class="fab fa-google"></i>
            </a>
            <a href="" className={styles.social_icon}>
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" className={styles.social_icon}>
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" className={styles.social_icon}>
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className={styles.account_text}>Don't have an account?<a href="#" id="sign-up-btn2">Sign up</a></p>
        </form>
        <form action="" className={styles.sign_up_form}>
            {/* <h2 className={styles.title}>Sign up</h2>
            <div className={styles.input_field}>
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username"/>
            </div>
            <div className={styles.input_field}>
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email"/>
            </div>
            <div className={styles.input_field}>
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password"/>
            </div>
            <input  type="submit" value="Sign up" className={styles.btn}/>
            <p className={styles.social_text}>Or Sign in with social platforms</p>
            <div className={styles.social_media}>
                <a href="#" className={styles.social_icon}>
                    <i class="fab fa-google"></i>
                </a>
                <a href="" className={styles.social_icon}>
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="" className={styles.social_icon}>
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" className={styles.social_icon}>
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p className={styles.account_text}>Already have an account?<a href="#" id="sign-in-btn2">Sign in</a></p> */}
        </form>
       </div> 
       <div className={styles.panels_container}>
            <div className={`styles.panel styles.left_panel`}>
                <div className={styles.content}>
                    {/* <h3>Already a member?</h3>
                    <p> Sign in </p>
                    <button className={styles.btn} id="sign-in-btn">Sign in</button> */}
            </div>
            {/* <img src={require("../images/signin.svg")} alt="" className={styles.image}/> */}
            </div>
            <div>
                <div className={styles.content} styles={{paddingLeft : 65, alignItems : 'center'}}>
                    <br/><br/>  
                    <h3>Already a member?</h3>
                    {/* <p> Sign up</p> */}
                    <button className={styles.btn}><Link to="/login" style={{color:'white'}}>Sign in</Link></button>
            </div>
            <MySvg className={styles.svg}/>
            <img src={require("../images/signup.svg")} alt="" className={styles.image}/>
            </div>
       </div>
    </div>
    


    </div>
    </div>
  )
}
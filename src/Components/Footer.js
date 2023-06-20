import React from "react";
import { useState } from 'react'
import joinUs from "../Images/join_us_icon.png"
import contactUs from "../Images/contact_us_icon.png"
import impact from "../Images/impact_icon.png"
import insta from "../Images/insta_icon.png"
import aboutUs from "../Images/about_us_icon.png"
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import Main from "../Components/Main"

export default function Footer() {
  const [open, setOpen] = useState(false);
  const close = ()=>{
    setOpen(false);
  }
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/64906664cc26a871b023747c/1h3a0vv6u';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  return (
    <div
      style={{
        backgroundColor: "#7012c7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth:'100%'
      }}
    >
      <div className="flex" style={{ display: "flex",margin:'10px',  }}>
        <form action="" className="flex-item-1" style={{ flex: "70%" }}>
          <input
            type="text"
            placeholder="30+ brands in pipeline"
            size='28'
            style={{ borderRadius: "50px", padding: "5px", maxWidth:'100%' }}
          />
        </form>
        <button className="flex-item-2 btn" style={{ flex: "30%" }}>
          <strong>Subscribe</strong>
        </button>
      </div>
      <div className="flex" style={{ display: "flex", margin:'10px', justifyContent:'space-between'}}>
        <strong style={{color:'white', padding:'0 16px 0 5px'}}>EarthTag</strong>
        <img src={aboutUs} alt="" style={{height:'20px', padding:'0 16px'}}/>
        <img src={impact} alt="" style={{height:'20px', padding:'0 16px'}}/>
        <button className="icons-button" onClick={()=>{setOpen(true) }} style={{background:'transparent', border:'none'}}><img src={joinUs} alt="" style={{height:'20px', padding:'0 16px'}}/></button>
        <BottomSheet open={open} onClick={close}>
        Hey from App
      <Main />
      
      </BottomSheet>
        <img src={insta} alt="" style={{height:'20px', padding:'0 16px'}}/>
        <img src={contactUs} alt="" style={{height:'20px', padding:'0 16px'}}/>
      </div>
      
    </div>
  );
}

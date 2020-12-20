import React from "react";
import shutterstock from "../public/Background.jpg";
import logo from "../public/logo.png";
import tombstone from '../public/TOMBSTONE@1X (1).png'
import DropDownList from "../Components/DropDownList";
import LeftBody from "../public/LeftComponent.png";
import FormComponent from '../Components/FormComponent'
import "./Main.css";

const Main = () => {
  return (
    <div className="background">
      <img src={shutterstock} alt="shutterstock" />
      <div className="navigation-header">
        <img src={logo} alt="logo" />
        <p onClick={console.log("Link Clicked")}>Recipe Download</p>
        <DropDownList text='English'/>
      </div>
      <div className="Components">
        <div className="body">
          <img src={LeftBody} alt="LeftBody" useMap="workmap" />
        </div>
        <div className="right-component">
         <img src = {tombstone} alt="tombstone"/>
         <p>To Receive Promotional Coupons:</p>
         <ol>
           <li>Purchase participating specially marked Canada Dry and CPLUS 12-packs and find your PIN inside the carton.</li><br/>
           <li>Enter your PIN below</li><br/>
           <li>Click the GET YOUR COUPONS button and follow the online instructions to obtain the coupons</li>
         </ol>
         <FormComponent/>
        </div>
      </div>
    </div>
  );
};

export default Main;

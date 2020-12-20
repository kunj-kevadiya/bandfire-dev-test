import React, { useState } from "react";

const FormComponent = () => {
  const firstMethod = (e) => {
    const re = /[0-9a-fA-F]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
    console.log(e);
  };
  return (
    <form>
      <input
        name="newsLetter"
        type="text"
        size="45"
        placeholder="ENTER PIN*"
        onKeyUp={(e) => firstMethod(e)}
      />
      <br />
      <input
        style={{marginTop:'10px'}}
        name="email"
        size="45"
        type="text"
        placeholder="ENTER YOUR EMAIL ADDRESS"
      />
      <br />
      <input style={{marginTop:'px'}} type="text" id="company" placeholder="BIRTHDATE" />

      <input
        style={{ marginLeft: "6px", marginTop:'10px' }}
        type="text"
        placeholder="AGE RANGE"
        size="19"
      />
      <input  style={{marginTop:'10px'}} type="dropdown" placeholder="PROVINCE/TERRITORY" size="45" />
      <input
        style={{marginTop:'10px'}}
        type="dropdown"
        placeholder="WHAT IS YOUR PREFEERED FLAVOUR"
        size="45"
      />
      <br/>
      <input  type='checkbox' style={{marginTop:'10px'}}/>*I have understood and agree to <u>Terms of Use</u>and<u>Privacy Policy</u>
    </form>
  );
};

export default FormComponent;

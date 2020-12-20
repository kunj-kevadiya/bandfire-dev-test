import React from 'react'
import {Dropdown} from "semantic-ui-react"
import './DropDowList.css'

const DropDownList = (props) =>{
    return(
      <div className= 'DropDown'>
    <Dropdown text={props.text}>
    <Dropdown.Menu>
      <Dropdown.Item text='French'/>

    </Dropdown.Menu>
  </Dropdown>
  </div>
    )
};

export default DropDownList
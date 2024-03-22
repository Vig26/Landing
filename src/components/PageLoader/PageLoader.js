import React from 'react'
import Logo from "../../assets/images/tamil-logo.png";
import Style from './PageLoader.module.css';

export default function PageLoader() {
  return (
    <div className={Style.fullPageLoader}>
      <img width="200" src={Logo} alt="Brand Logo" />
    </div>
  )
}

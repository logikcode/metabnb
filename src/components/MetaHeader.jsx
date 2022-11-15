import React from 'react'
import { Header } from './MetaHeaderStyled'
import mbtokenicon from "../assets/icons/mbtokenicon.svg";
import metataskicon from "../assets/icons/metataskicon.svg";
import openseaicon from "../assets/icons/openseaicon.svg";
function MetaHeader() {
  return (
    <>
    <Header>
    <div>
    </div>
        <img src={mbtokenicon} alt="" className="header-image" />
        <img src={metataskicon} alt="" className="header-image" />
        <img src={openseaicon} alt="" className="header-image" />
    </Header>
        
    </>
  )
}

export default MetaHeader
import React from "react";
import header from "../../img/header.png";
import userImage from "../../img/userimg.png";
import Image from "next/image";

import "./PerfilPage.css";
export default function PerfilPage() {
  return (
    <div className="PerfilPage">
      <div className="profileImage">
        <Image src={header} width={500} alt="HeaderImage" />
      </div>

      <div className="profileName">
        <span>Alissa</span>
        <span>@AlissaArt</span>
      </div>

      <div className="followStts">
        <div className="follows">230 seguindo</div>
        <div className="vl"></div>
        <div className="follows">1500 seguidores</div>
      </div>
    </div>
  );
}

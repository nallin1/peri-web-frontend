import React from "react";
import Image from "next/image";

import homePeri from "./iconsNav/homePeri.png";
import bellPeri from "./iconsNav/bell.svg";
import createPeri from "./iconsNav/create.png";
import searchPeri from "./iconsNav/search.png";
import userPeri from "./iconsNav/user.png";

export default function searchTopo() {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <div className="leftIcons">
            <li>
              <a href="#">
                <Image src={homePeri} alt="home" width={36} height={36} />
              </a>
            </li>
          </div>
          <div className="centerIcons">
            <li>
              <a href="/NotificationsPage/notificationsPage">
                <Image src={bellPeri} alt="bell" width={36} height={36} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={createPeri} alt="create" width={36} height={36} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={searchPeri} alt="search" width={36} height={36} />
              </a>
            </li>
          </div>
          <div className="rightIcons">
            <li>
              <a href="#">
                <Image src={userPeri} alt="user" width={36} height={36} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

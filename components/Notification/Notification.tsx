import Image from "next/image";

import userPeri from "../SearchTopo/iconsNav/user.png";

export default function Notification() {
  return (
    <>
      <div className="notification">
        <Image src={userPeri} alt="user" height={56} />
        <div className="details">
          <h1 id="userName"> Guilherme Nallin</h1>
          <span id="notificationText">Curtiu sua postagem !</span>
        </div>
      </div>
    </>
  );
}

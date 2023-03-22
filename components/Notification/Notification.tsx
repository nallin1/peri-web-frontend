import Image from "next/image";

import userPeri from "../SearchTopo/iconsNav/user.png";

export default function Notification() {
  return (
    <>
      <div className="notification">
        <Image src={userPeri} alt="user" height={28} />
      </div>
    </>
  );
}

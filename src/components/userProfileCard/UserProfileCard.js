import React, { useContext } from "react";
import { userProfileContext } from "../../contexts/contexts";

const UserProfileCard = () => {
  const { userProfile } = useContext(userProfileContext);

  let profileData = userProfile ? (
    <>
      <p>Name: {userProfile.name}</p>
      <p>HD: {userProfile.hd}</p>
      <img src={userProfile.picture} width="100px" />
    </>
  ) : null;

  return <div className="userprofile-card">{profileData}</div>;
};

export default UserProfileCard;

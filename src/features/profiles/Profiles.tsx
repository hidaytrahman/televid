import { ProfilesContainer } from "./Profiles.styles";
import { profiles } from "data/index";

const Profiles = () => {
  return (
    <>
      <ProfilesContainer>
        <h1>Choose profile</h1>

        <div className="profiles-wrapper">
          {profiles.map((profile, index) => (
            <div className="profile-container" key={index}>
              <h3>{profile.title} </h3>
              <img src={profile.avatar} alt="" />

              <h4>{profile.type}</h4>
            </div>
          ))}
        </div>
      </ProfilesContainer>
    </>
  );
};

export default Profiles;

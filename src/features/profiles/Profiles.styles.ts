import styled from "styled-components/macro";

export const ProfilesContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 1rem;
  background: #c3c3c3;

  .profiles-wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .profile-container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5%;
    height: 300px;
    background: #fff;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;

    img {
      border-radius: 3px;
    }
  }
`;

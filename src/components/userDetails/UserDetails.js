import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import "./userDetails.css";

function UserDetails({ userData }) {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.github.com/users/${userData.login}/repos`
        );

        setRepo(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [userData.login]);

  return (
    <div className="udContainer">
      <div className="udWrapper">
        <div className="udDetails">
          <div className="udImgContainer">
            <img src={userData.avatar_url} alt="" className="udImg" />
            <span className="udLink">{userData.html_url}</span>
          </div>
          <div className="udDetailsItems">
            <span className="udName">
              {userData.name ? userData.name : userData.login}
            </span>
            <span className="udBio">
              {userData.bio ? userData.bio : "Bio goes here"}
            </span>
            <span className="udLocation">
              {userData.location ? userData.location : "Location goes here"}
            </span>
            <span className="udTwitter">
              {" "}
              {userData.twitter_username
                ? userData.twitter_username
                : "Twitter goes here"}
            </span>
          </div>
        </div>
        <div className="udRepository">
          <Cards repo={repo} />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";
const Home = () => {
  return (
    <div className="home">
      {/** Header  */}

      <div className="home__header">
        {/* left header  */}
        <div className="home__header_left">
          {/* link  */}
          <Link to="/about">About</Link>
          {/* link  */}
          <Link to="/store">Store</Link>
        </div>

        {/* right header */}

        <div className="home__header_right">
          {/* link  */}
          <Link to="/gmail">Gmail</Link>
          {/* link  */}
          <Link to="/images">Images</Link>
          {/* Icon  */}
          <AppsIcon />
          {/* Avatar */}
          <Avatar />
        </div>
      </div>

      {/** body */}

      <div className="home__body">
        <img
          src="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0"
          alt="google logo"
        />

        <div className="home__input_container">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;

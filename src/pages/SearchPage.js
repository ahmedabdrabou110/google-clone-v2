import React from "react";
import { useStateValue } from "../apps/StateProvider";
import useGoogleSearch from "./../apps/useGoogleSearch";
import Response from "../apps/response";
import Search from "./Search";
import "./SearchPage.css";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  //! Testing
  // const data = Response;

  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page_header">
        <Link to="/">
          <img
            className="search__page_header__logo"
            src="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0"
            alt="google logo"
          />
        </Link>

        <div className="search__page_body">
          <Search hideButtons />
          <div className="search__page_header_options">
            <div className="search__page_header_options_left">
              <div className="search__page_header_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page_header_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search__page_header_option">
                <ImageSearchIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search__page_header_option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="search__page_header_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="search__page_header_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="search__page_header_options_right">
              <div className="search__page_header_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search__page_header_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search__page_results">
          <p className="search__page_result_count">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.searchTime.toFixed(2)} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search__page_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search__page_image"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="search__page_result__title">
                <h2>{item.title}</h2>
              </a>
              <p className="search__page_result__sinppets">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

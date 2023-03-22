import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../apps/StateProvider";
import { actionType } from "../apps/reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("Button was clicked >> ", inputValue);

    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: inputValue,
    });

    //* push the url to search
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons && (
        <div className="search__buttons">
          <Button type="submit" onClick={searchHandler} variant="outlined">
            google search
          </Button>
          <Button variant="outlined"> I'm feeling lucky</Button>
        </div>
      )}

      {hideButtons && (
        <div className="search__buttons hidden">
          <Button type="submit" onClick={searchHandler} variant="outlined">
            google search
          </Button>
          <Button variant="outlined"> I'm feeling lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;

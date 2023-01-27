import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="sticky top-0 z-10 bg-slate-900 text-3xl flex justify-between items-center
     text-red-500 font-bold p-3 border-b-2 border-gray-500"
    >
      <span>
        the<span className="text-white">Movies</span>
      </span>
      <Link to={'./addmovie'}>
        <h1 className="text-lg  flex items-center cursor-pointer">
          <Button>
            <AddIcon className="mr-2 " />
            <span className="text-white">Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;

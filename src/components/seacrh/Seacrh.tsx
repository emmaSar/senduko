import React, { useEffect, useState } from "react";
import SearchIcon from '../../assets/svgs/Search.svg'
import "./SearchStyle.css";

function Search({
  value,
  onChangeValue,
}: {
  value: string;
  onChangeValue: (value: string) => void;
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavVisible, setNavVisibility] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1150px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
      setNavVisibility(false)
    } else {
      setIsSmallScreen(false);
    }
  };
  const toggleNav 
  = () => {
   setNavVisibility(true);
  };
  return (
    <div className={!isSmallScreen||!isNavVisible?"search":'content'}>
     <input className={!isSmallScreen||isNavVisible? "input":'noVisible'} placeholder="Search" />
     
      <img 
       onClick={toggleNav}
      src={SearchIcon} alt="Search" width={24} height={24} className="icon-header" />
      
    </div>
  );
}

export default Search;

import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Sendyko } from "../../assets/svgs/Sendyko.svg";
import Menu from "../../assets/svgs/Menu.svg";
import "./HeaderStyle.css";
import Search from "../seacrh/Seacrh";
import { Language } from "../language/Language";

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1350px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
      setNavVisibility(false);
    } else {
      setIsSmallScreen(false);
    }
  };
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  function useOutsideAlerter(ref: any, menuRef: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          isSmallScreen &&
          isNavVisible &&
          event?.target?.alt !== "menu"
        ) {
          setNavVisibility(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, !isSmallScreen || isNavVisible]);
  }
  const wrapperRef = useRef(null);
  const menuRef = useRef(null);
  useOutsideAlerter(wrapperRef, menuRef);
  return (
    <div className={"header"}>
      <Sendyko />
      <div className="rowContainer">
        <nav
          className={!isSmallScreen || isNavVisible ? "block" : "noVisible"}
          ref={wrapperRef}
        >
          <a
            href="#"
            className="title"
            onClick={() => {
              setNavVisibility(false);
            }}
          >
            Денежные переводы
          </a>
          <a href="#"
            onClick={() => {
              setNavVisibility(false);
            }}
          className="title">
            Онлайн банки
          </a>
          <a href="#"
            onClick={() => {
              setNavVisibility(false);
            }}
          className="title">
            Иммиграция
          </a>
          <a href="#"
            onClick={() => {
              setNavVisibility(false);
            }}
          className="title">
            О нас
          </a>
        </nav>
        <Search value="" onChangeValue={(cal: string) => {}} />
        <div className={"language"}>
          <Language />
        </div>
        <div onClick={toggleNav} className="menu" ref={menuRef}>
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;

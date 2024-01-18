import React from "react";
import "./MainStyle.css";

function TextComponent() {
  // const [from, setFrom] = useState("AM");
  // const [to, setTo] = useState("AM");
  // const [toCurrency, setToCurrency] = useState("");
  // const [fromCurrency, setFromCurrency] = useState("");
  // const [value, setValue] = useState("");
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 1150px)");
  //   mediaQuery.addListener(handleMediaQueryChange);
  //   handleMediaQueryChange(mediaQuery);

  //   return () => {
  //     mediaQuery.removeListener(handleMediaQueryChange);
  //   };
  // }, []);
  // const handleMediaQueryChange = (mediaQuery: any) => {
  //   if (mediaQuery.matches) {
  //     setIsSmallScreen(true);
  //   } else {
  //     setIsSmallScreen(false);
  //   }
  // };
  return (
    <div style={{width:'100%',display:"flex",flexDirection:'column'}}>
      <span className={"text-main"}>
        Мы проведем анализ среди самых популярных <br /> сервисов международных
        денежных переводов.
        <br />
        Сравним актуальные курсы и комиссии.
      </span>
      <a href="#" className={"textLink-main"}>
        Читайте о нас
      </a>
    </div>
  );
}

export default TextComponent;

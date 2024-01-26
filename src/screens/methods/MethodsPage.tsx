import React, { useEffect, useState } from "react";
import HeaderMethod from "./headerMethod/HeaderMethod";
import { styles } from "./MethodsPageStyle";
import PaymentList from "./paymentList/PaymentList";
import HeaderMethodSmall from "./headerMethod/HeaderMethodSmall";
function MethodsPage() {
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
    } else {
      setIsSmallScreen(false);
    }
  };
  return (
    <div style={styles.methodAll}>
      {isSmallScreen ? <HeaderMethodSmall /> : <HeaderMethod />}
      <PaymentList />
    </div>
  );
}

export default MethodsPage;

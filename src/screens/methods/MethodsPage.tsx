import React from "react";
import HeaderMethod from "./headerMethod/HeaderMethod";
import { styles } from "./MethodsPageStyle";
import PaymentList from "./paymentList/PaymentList";
function MethodsPage() {
  return (
    <div style={styles.methodAll}>
      <HeaderMethod />
      <span style={styles.subTitle}>
        В соответствии с текущими ограничениями НБУ для денежных переводов на
        банковские <br /> карты и счета: вы можете отправлять до 20 переводов в
        месяц, максимальная сумма <br /> которых не может превышать 29 999 UAH
        за перевод и 399 999 UAH в месяц.
      </span>
      <PaymentList />
    </div>
  );
}

export default MethodsPage;

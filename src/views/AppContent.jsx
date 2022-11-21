import LoginView from "views/LoginView";
import OrderTypeView from "views/OrderTypeView";
import LabelTypeView from "views/LabelTypeView";
import OrderContentView from "views/OrderContentView";
import SpecialOrderContentView from "views/SpecialOrderContentView";

export default function AppContent(props) {
  if (!props.isLoggedIn) {
    return (
      <LoginView
        changeUser={props.changeUser}
        changeOrderNumber={props.changeOrderNumber}
        order={props.order}
      />
    );
  }
  if (props.order.orderType.length < 1) {
    return (
      <>
        <p>Zamow:</p>
        <OrderTypeView
          order={props.order}
          changeOrderType={props.changeOrderType}
        />
      </>
    );
  }
  if (props.order.labelType.length < 1) {
    return (
      <>
        <p>Zamow:</p>
        <LabelTypeView
          order={props.order}
          changePrintLabel={props.changePrintLabel}
        />
      </>
    );
  }
  if (props.order.orderType === "Naklejki") {
    return (
      <>
        <OrderContentView
          content={props.content}
          changeContentText={props.changeContentText}
          changeContentAmmount={props.changeContentAmmount}
          addEmptyContent={props.addEmptyContent}
          emptyContent={props.emptyContent}
          printOverIP={props.printOverIP}
        />
      </>
    );
  } else if (props.order.orderType === "Oznaczenia plastikowe") {
    return (
      <>
        <OrderContentView
          content={props.content}
          changeContentText={props.changeContentText}
          changeContentAmmount={props.changeContentAmmount}
          addEmptyContent={props.addEmptyContent}
          emptyContent={props.emptyContent}
        />
      </>
    );
  } else {
    return (
      <>
        <SpecialOrderContentView order={props.order} content={props.content} />
      </>
    );
  }
}
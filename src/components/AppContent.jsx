import LoginView from 'components/LoginView'
import OrderTypeView from 'components/OrderTypeView'
import LabelTypeView from "components/LabelTypeView"
import OrderContentView from 'components/OrderContentView';

export default function AppContent(props) {


  if (!props.isLoggedIn) {
    return (
      <LoginView
        changeUser={props.changeUser}
        changeOrderNumber={props.changeOrderNumber}
        order={props.order} />
    );
  }
  if (props.order.orderType.length < 1) {
    return (<>

      <p>Zamow:</p>
      <OrderTypeView
        order={props.order}
        changeOrderType={props.changeOrderType}
      />

    </>)
  }
  if (props.order.labelType.length < 1) {
    return (<>

      <p>Zamow:</p>
      <LabelTypeView
        order={props.order}
        changePrintLabel={props.changePrintLabel}
      />

    </>)
  }
  if (props.order.orderType === ("Naklejki" || "Ozaczenia plastikowe")) {
    return (<>

      <OrderContentView
        order={props.order}
        addEmptyContent={props.addEmptyContent}
        emptyContent={props.emptyContent}
      />
    </>)
  }
  else {
    return (<>
      <h1>Zamowienia specjalne</h1>
    </>)
  }

}

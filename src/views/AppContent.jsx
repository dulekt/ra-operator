import { Text } from '@chakra-ui/react';
import LabelTypeView from 'views/LabelTypeView';
import LoginView from 'views/LoginView';
import OrderContentView from 'views/OrderContentView';
import OrderTypeView from 'views/OrderTypeView';
import SpecialOrderContentView from 'views/SpecialOrderContentView';

export default function AppContent(props) {
    if (!props.isLoggedIn) {
        return (
            <LoginView
                changeUser={props.changeUser}
                changeWorkcenter={props.changeWorkcenter}
                changeOrderNumber={props.changeOrderNumber}
                order={props.order}
            />
        );
    }

    if (props.order.orderType.length < 1) {
        return (
            <>
                <Text>Zamow:</Text>
                <OrderTypeView order={props.order} changeOrderType={props.changeOrderType} />
            </>
        );
    }

    if (props.order.labelType.length < 1) {
        return (
            <>
                <p>Zamow:</p>
                <LabelTypeView order={props.order} changePrintLabel={props.changePrintLabel} />
            </>
        );
    }

    if (props.order.orderType === 'Naklejki') {
        return (
            <>
                <OrderContentView
                    order={props.order}
                    content={props.content}
                    orderType={props.orderType}
                    labelType={props.labelType}
                    changeContentText={props.changeContentText}
                    changeContentAmmount={props.changeContentAmmount}
                    addEmptyContent={props.addEmptyContent}
                    emptyContent={props.emptyContent}
                    printOverIP={props.printOverIP}
                    removeContent={props.removeContent}
                    labelsAndTypes={props.labelsAndTypes}
                    handleLogout={props.handleLogout}
                />
            </>
        );
    }

    if (props.order.orderType === 'Oznaczenia plastikowe') {
        return (
            <>
                <OrderContentView
                    order={props.order}
                    content={props.content}
                    orderType={props.orderType}
                    labelType={props.labelType}
                    changeContentText={props.changeContentText}
                    changeContentAmmount={props.changeContentAmmount}
                    addEmptyContent={props.addEmptyContent}
                    emptyContent={props.emptyContent}
                    printOverIP={props.printOverIP}
                    removeContent={props.removeContent}
                />
            </>
        );
    }

    return (
        <>
            <SpecialOrderContentView order={props.order} content={props.content} />
        </>
    );
}

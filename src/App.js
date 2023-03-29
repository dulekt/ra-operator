// App.js
import { useEffect, useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import AppFooter from 'components/AppFooter';
import AppHeader from 'components/AppHeader';
import AppContent from 'views/AppContent';

import 'App.css';
// @TODO:
// - switch useStates to common reducers, e.g. Order Reducer, Content Reducer, etc.
// - extract functions to separate util files

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);

        SetOrderToNull();

        emptyContent();
    }

    function back() {
        emptyContent();

        setOrder({
            ...order,
            orderType: '',
            labelType: '',
            category: '',
            description: '',
        });
    }

    const [order, setOrder] = useState({
        user: '',
        orderNumber: '',
        orderType: '',
        labelType: '',
        category: '',
        description: '',
        workcenter: '',
    });

    useEffect(() => {
        console.log(order);
    }, [order]);

    const [content, setContent] = useState([
        {
            id: 1,
            text: '',
            ammount: 1,
        },
    ]);

    function changeContentText(id, e) {
        setContent(
            content.map(contentItem => (contentItem.id === id ? { ...contentItem, text: e.target.value } : contentItem))
        );
    }

    function changeContentAmmount(id, e) {
        setContent(content.map(contentItem => (contentItem.id === id ? { ...contentItem, ammount: e } : contentItem)));
    }

    function addEmptyContent() {
        if (content.at(-1).text !== '') {
            setContent([
                ...content,
                {
                    id: content.at(-1).id + 1,
                    text: '',
                    ammount: 1,
                },
            ]);
        }
    }

    function emptyContent() {
        setContent([
            {
                id: 1,
                text: '',
                ammount: 1,
            },
        ]);
    }

    function SetOrderToNull() {
        setOrder({
            user: '',
            orderNumber: '',
            orderType: '',
            labelType: '',
            category: '',
            description: '',
        });
    }

    function changeUser(e) {
        setOrder({
            ...order,
            user: e.target.value,
        });
    }

    function changeWorkcenter(e) {
        setOrder({
            ...order,
            workcenter: e.target.value,
        });
    }

    function changeOrderNumber(e) {
        setOrder({
            ...order,
            orderNumber: e.target.value,
        });
    }

    function changeOrderType(e) {
        setOrder({
            ...order,
            orderType: e.target.value,
        });

        console.log(order.orderType);
    }

    function changePrintLabel(e) {
        setOrder({
            ...order,
            labelType: e.target.value,
        });
    }

    return (
        <ChakraProvider>
            <Container centerContent maxHeight="100vh">
                <AppHeader order={order} isLoggedIn={isLoggedIn} back={back} />

                <AppContent
                    order={order}
                    content={content}
                    orderType={order.orderType}
                    labelType={order.labelType}
                    isLoggedIn={isLoggedIn}
                    changeOrderNumber={changeOrderNumber}
                    changeOrderType={changeOrderType}
                    changePrintLabel={changePrintLabel}
                    changeUser={changeUser}
                    changeWorkcenter={changeWorkcenter}
                    addEmptyContent={addEmptyContent}
                    emptyContent={emptyContent}
                    changeContentText={changeContentText}
                    changeContentAmmount={changeContentAmmount}
                    back={back}
                />

                <AppFooter
                    order={order}
                    isLoggedIn={isLoggedIn}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    back={back}
                />
            </Container>
        </ChakraProvider>
    );
}

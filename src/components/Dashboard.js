import React, {useReducer, useEffect} from "react";
import { Row } from 'react-bootstrap';
import Widget from "./Widget";
import { widgets } from './../common/config';
import {lineChartData, pieChartData} from "./../common/data";


const initialState = {
    data01: null,
    data02: null,
    data03: null,
    data04: null,
    data05: null,
    data06: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'setData01':
            return {...state, data01: 12323323};
        case 'setData02':
            return {...state, data02: 556556565};
        case 'setData03':
            return {...state, data03: 34334343};
        case 'setData04':
            return {...state, data04: 898988989};
        case 'setData05':
            return {...state, data05: lineChartData};
        case 'setData06':
            return {...state, data06: pieChartData};
        default:
            throw new Error();
    }
}

function App() {
    const widgetsWithPriority = widgets.sort((a, b) => a.priority - b.priority).map(item => item);
    const getPriorityInterval = id => {
        const item = widgetsWithPriority.find(item => item.id === id);
        return 1000*item.priority;
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const t01 = setInterval(() => {
            dispatch({type: 'setData01'})
        }, getPriorityInterval('01'));

        const t02 = setInterval(() => {
            dispatch({type: 'setData02'})
        }, getPriorityInterval('02'));

        const t03 = setInterval(() => {
            dispatch({type: 'setData03'})
        }, getPriorityInterval('03'));

        const t04 = setInterval(() => {
            dispatch({type: 'setData04'})
        }, getPriorityInterval('04'));

        const t05 = setInterval(() => {
            dispatch({type: 'setData05'})
        }, getPriorityInterval('05'));

        const t06 = setInterval(() => {
            dispatch({type: 'setData06'})
        }, getPriorityInterval('06'));

        setTimeout(() => {
            clearInterval(t01);
            clearInterval(t02);
            clearInterval(t03);
            clearInterval(t04);
            clearInterval(t05);
            clearInterval(t06);
        }, 7000);
    }, []);

    return (
        <div className="App">
            <Row>
                {widgets.sort((a, b) => a.order - b.order).map(item => {
                    return <Widget  {...item} key={item.id} data={state}  widgetsWithPriority={widgetsWithPriority}/>
                })}
            </Row>
        </div>
    );
}

export default App;

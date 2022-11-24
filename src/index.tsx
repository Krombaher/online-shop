import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {categoryBtnData} from "./redux/State";
import {Provider} from "react-redux";
import {store} from "./redux/Redux-store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App categoryBtnData={categoryBtnData}/>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();

import "./css/site.css";
import "bootstrap";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Counter } from "../ClientApp/components/Counter";
import { FetchData } from "../ClientApp/components/FetchData";
function renderApp(): void {
    ReactDOM.render(<Counter />,document.getElementById("counter-app"));
    ReactDOM.render(<FetchData />,document.getElementById("fetch-app"));
}
renderApp();
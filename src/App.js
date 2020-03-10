import React, { Component } from "react";
// import FirstComponent from "./components/learning-examples/FirstComponent";
// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
// import FourthComponent from "./components/learning-examples/FourthComponent";
import Counter from "./components/counter/Counter";
import "./App.css";

class App extends Component {
    //class component
    render() {
        return ( <
            div className = "App" >
            <
            Counter / >
            <
            /div>
        );
    }
}

export default App;
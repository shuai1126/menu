import React, { Component } from "react";
import FootBar from "../FootBar";
import "./index.scss";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "../../pages/home/index";
import KitchenStory from "../../pages/KitchenStory";
import Classification from "../../pages/classification";
import More from "../../pages/more";
import Vegetables from "../../pages/vegetables";
import Meat from "../../pages/meat";
import Robot from "../../pages/robot";
import Bake from "../../pages/bake";
import Question from "../../pages/question";
import Process from "../../pages/detail";
import TodoApp from "../../pages/user/index";
import Seafood from "../../pages/seafood";

export default class ConentWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "redTab",
            hidden: false,
            fullScreen: false
        };
    }
    render() {
        return (
            <div className="main-app">
                <Router>
                    <div className="main">
                        <Switch>
                            <Route exact path="/home" component={Home}></Route>
                            <Route
                                exact
                                path="/kitchenStory"
                                component={KitchenStory}
                            ></Route>
                            <Route
                                exact
                                path="/classification"
                                component={Classification}
                            ></Route>
                             <Route
                                exact
                                path="/more"
                                component={More}
                            ></Route>
                             <Route
                                exact
                                path="/vegetables"
                                component={Vegetables}
                            ></Route>
                            <Route
                                exact
                                path="/meat"
                                component={Meat}
                            ></Route>
                            <Route
                                exact
                                path="/bake"
                                component={Bake}
                            ></Route>
                              <Route
                                exact
                                path="/seafood"
                                component={Seafood}
                            ></Route>
                            <Route
                                exact
                                path="/process"
                                component={Process}
                            ></Route>
                             <Route
                                exact
                                path="/robot"
                                component={Robot}
                            ></Route>
                            <Route
                                exact
                                path="/question"
                                component={Question}
                            ></Route>
                             <Route
                                exact
                                path="/user"
                                component={TodoApp}
                            ></Route>
                            <Redirect exact path="/" to="/home"></Redirect>
                        </Switch>
                    </div>
                    <div className="foot">
                        <FootBar />
                    </div>
                </Router>
            </div>
        );
    }
}

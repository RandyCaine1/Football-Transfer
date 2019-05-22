import React, {Component, Fragment} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Transfers from "./Window";
import Rumors from "./Rumors";



class Main extends Component {
    render(){
        return(
            <HashRouter>
            <Fragment>
                <h1>Football Transfer</h1>

                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to= "/window"> Confirmed Transfers </NavLink></li>
                    <li> <NavLink to= "/rumors"> Rumored Transfers </NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                        <Route path="/window" component={Transfers} />
                        <Route path="/rumors" component={Rumors} />
                </div>
            </Fragment>
            </HashRouter>
        )
    }
}

export default Main;
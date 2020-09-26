import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter,Switch,Link} from "react-router-dom";
import Home from "./Home";
import Calculator from "./component/Calculator";
import Timer from "./component/Timer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <div className={'bar'}>
                        <Link className={'homeLink'} to={'/'}>HOME</Link>
                        <Link className={'calculatorLink'} to={'/calculator'}>在线计算器</Link>
                        <Link className={'timerLink'} to={'/timer'}>在线倒计时</Link>
                    </div>
                    <div className={'body'}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/calculator' component={Calculator}/>
                            <Route exact path='/timer' component={Timer}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

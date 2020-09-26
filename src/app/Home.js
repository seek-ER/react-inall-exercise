import React from 'react';
import './home.less';
import calculator from '../images/calculator.png';
import heroImage from '../images/hero-image.png';
import timer from '../images/timer.png';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className={'topPic'}>
                <img className={'heroImageClass'} src={heroImage} alt=""/><br/>
            </div>
            <div className={'bottomPic'}>
                <div className={'bottomPicChild'}>
                    <NavLink to={'/calculator'}>
                        <span className={'bottomClick'}>
                            <img className={'icon'} src={calculator} alt=""/>
                            <NavLink to={'/calculator'} className={'click'}>计算器</NavLink>
                        </span>
                    </NavLink>
                    <NavLink to={'/timer'}>
                        <span className={'bottomClick'}>
                            <img className={'icon'} src={timer} alt=""/>
                            <NavLink to={'/timer'} className={'click'}> 倒计时器</NavLink>
                        </span>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Home;
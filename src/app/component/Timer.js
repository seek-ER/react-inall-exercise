import React, {Component} from 'react';
import './timer.less';
import {NavLink} from "react-router-dom";

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setTime: '',
            showTime: 'Start'
        };
    }

    nIntervId;

    componentWillUnmount() {
        clearInterval(this.nIntervId)
    }

    handleSet = () => {
        this.setState(
            this.state = {
                setTime: event.target.value,
            }
        )
    };

    timeRun = () => {
        if (this.state.showTime > 0) {
            this.setState(this.state = {
                showTime: this.state.showTime - 1
            })
        } else {
            this.setState(this.state = {
                showTime: 'End'
            })
            clearInterval(this.nIntervId)
        }
    }

    handleClick = () => {
        this.setState(this.state ={
            showTime:parseInt(this.state.setTime )
        })
        this.nIntervId = setInterval(this.timeRun,1000)
    };

    render() {
        return (
            <div className={'timer'}>
                <h1>在线倒计时器</h1>
                <div className={'timeMiddle'}>
                    <div className={'timeMiddleLeft'}>
                        <div>
                            设置时间
                            <input type="text" onChange={this.handleSet}/>
                        </div>
                        <div>
                            <button onClick={this.handleClick}
                                    disabled={/\d+/.test(this.state.showTime)}
                            >
                                start
                            </button>
                        </div>
                    </div>
                    <div className={'timeMiddleRight'}>
                        <input type="text" value={this.state.showTime}/>
                    </div>
                </div>
                <div className={'timerEnd'}>
                    <NavLink to={'/'}>回到首页</NavLink>
                </div>
            </div>
        )
    }
}

export default Timer;
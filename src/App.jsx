import React from 'react';
import './App.scss';
import data from './data.json';
import { RainWith, Rain, Shape,Brightness } from "./svg/SmallWeatherIcons.jsx"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
            currentWeather:{},
            activeIndex: 0
        };
    }

    componentDidMount(){
        this.setState({
            data: data,
            currentWeather:data[0]
        });
    }

    handleClick(index, item){
        this.setState({
            currentWeather:item,
            activeIndex: index
        })
    }

    render() {
        let array = [null,<Brightness/>, <Shape/>, <Rain/>, <RainWith/>];
        const {weather, description,tem} = this.state.currentWeather;
       return (
	        <div className="weather">
                <div className="settings">Settings</div>

                <div className="current-day">
                    <div className="weather-icon">
                        <div className="big-image"> {array[weather]}</div>
                        <div className="weather-text-current">{description}</div>
                    </div>
                    <div className="temperature">
                        <div className="number">{tem}</div>
                        <div className="gradus">
                            <div className="sub">0</div>
                            <div className="sup">21/21</div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {
                        this.state.data.map((item, index) => {
                            const className = this.state.activeIndex === index ? 'active' : '';
                            return (
                                <div className={className + " column"} key={index} onClick={this.handleClick.bind(this,index, item)}>
                                    <div className="day">{item.day}</div>
                                    <div className="img">
                                        {array[item.weather]}
                                    </div>
                                    <div className="temperature-small">{item.tem}<sup>0</sup></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
	)
    }
}


export default App;

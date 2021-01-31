import React, {PureComponent as Component} from "react";
import "../../styles/box.scss";
import { withRouter } from "react-router-dom";

const tools = [
               {'烤箱':"/process", '砂锅':"",'微波炉':""},
               {'电饼铛':"",'电炖锅':"",'豆浆机':""},
               {'平底锅':"", '电饭煲':"",'料理机':""},
               {'电压力锅':"",'电磁炉':"",'蒸锅':""},
               {'面包机':"", '高压锅':"",'榨汁机':""},
               {'搅拌机':"", '炒锅':"",'煮锅':""},
               {'烤炉':"",'汤锅':"",'打蛋器':""},
               {'空气炸锅':"", '酸奶机':"",'咖啡机':""}
              ];

class Tools extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return(
            <div className="whole">
                <div className="table">
                    <div className="row">
                        {Object.keys(tools[0]).map(key => {
                            console.log(tools[0][key],typeof(tools[0][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[0][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[1]).map(key => {
                            console.log(tools[1][key],typeof(tools[1][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[1][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[2]).map(key => {
                            console.log(tools[2][key],typeof(tools[2][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[2][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[3]).map(key => {
                            console.log(tools[3][key],typeof(tools[3][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[3][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[4]).map(key => {
                            console.log(tools[4][key],typeof(tools[4][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[4][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[5]).map(key => {
                            console.log(tools[5][key],typeof(tools[5][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[5][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[6]).map(key => {
                            console.log(tools[6][key],typeof(tools[6][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[6][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(tools[7]).map(key => {
                            console.log(tools[7][key],typeof(tools[7][key]));
                            return <div className="col" onClick={() => {this.props.history.push(tools[7][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                </div>
            
            </div>
        )
    }
}

export default withRouter(Tools);
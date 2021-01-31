import React from "react";
import "../../styles/box.scss";
import { withRouter } from "react-router-dom";

const meat = [
               {'鱼香肉丝':"/process", '烤羊肉串':"",'孜然羊肉':""},
               {'莴笋炒肉':"",'蚂蚁上树':"",'冬瓜圆子汤':""},
               {'剁椒鱼头':"", '香菇滑鸡':"",'川香麻辣鱼':"",},
               {'鱼香猪肝':"",'椒香五花肉':"",'黄豆烧猪蹄':""},
               {'糖醋排骨':"", '麻辣小龙虾':"",'黄金炸猪排':""},
               {'红焖猪脚':"", '小炒黄牛肉':"",'鲜肉小笼包':""},
               {'秘制小排肉':"",'干贝罗宋汤':"",'葱爆羊肉':""},
               {'金针肥牛卷':"", '牛肉炒乌冬面':"",'玉米大骨汤':""}
              ];

class Meat extends React.Component {
    render() {
        return(
            <div>
                <div className="table">
                <div className="row">
                        {Object.keys(meat[0]).map(key => {
                            console.log(meat[0][key],typeof(meat[0][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[0][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[1]).map(key => {
                            console.log(meat[1][key],typeof(meat[1][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[1][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[2]).map(key => {
                            console.log(meat[2][key],typeof(meat[2][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[2][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[3]).map(key => {
                            console.log(meat[3][key],typeof(meat[3][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[3][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[4]).map(key => {
                            console.log(meat[4][key],typeof(meat[4][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[4][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[5]).map(key => {
                            console.log(meat[5][key],typeof(meat[5][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[5][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[6]).map(key => {
                            console.log(meat[6][key],typeof(meat[6][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[6][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(meat[7]).map(key => {
                            console.log(meat[7][key],typeof(meat[7][key]));
                            return <div className="col" onClick={() => {this.props.history.push(meat[7][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Meat);
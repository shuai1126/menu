import React from "react";
import "../../styles/box.scss";
import { withRouter } from "react-router-dom";

const interest = [
               {'鸭血粉丝汤':"", '牧羊人派':"",'驴肉火烧':""},
               {'泰式咖喱虾':"",'麻辣臭豆腐':"",'双皮奶':""},
               {'烤冷面':"", '麻辣烫':"", '北京豌豆黄':""},
               {'沙茶面':"", '肉夹馍':"",'巧克力派':""},
               {'担担面':"", '干炒牛河':"",'翡翠烧麦':""},
               {'驴打滚':"", '蟹壳黄烧饼':"",'虾扯蛋':""},
               {'西米寿司':"",'椰汁西米糕':"",'英式布丁':""},
               {'定胜糕':"", '爆炒花甲螺':"",'花甲丝瓜汤':""}
              ];

class Interest extends React.Component {
    render() {
        return(
            <div>
                <div className="table">
                <div className="row">
                        {Object.keys(interest[0]).map(key => {
                            console.log(interest[0][key],typeof(interest[0][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[0][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[1]).map(key => {
                            console.log(interest[1][key],typeof(interest[1][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[1][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[2]).map(key => {
                            console.log(interest[2][key],typeof(interest[2][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[2][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[3]).map(key => {
                            console.log(interest[3][key],typeof(interest[3][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[3][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[4]).map(key => {
                            console.log(interest[4][key],typeof(interest[4][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[4][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[5]).map(key => {
                            console.log(interest[5][key],typeof(interest[5][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[5][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[6]).map(key => {
                            console.log(interest[6][key],typeof(interest[6][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[6][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                    <div className="row">
                        {Object.keys(interest[7]).map(key => {
                            console.log(interest[7][key],typeof(interest[7][key]));
                            return <div className="col" onClick={() => {this.props.history.push(interest[7][key]);}} key={key}><h2>{key}</h2></div>
                        })} 
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Interest);
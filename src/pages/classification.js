import React, { PureComponent as Component } from "react";
import "../styles/classification.scss";
import { Icon } from "antd-mobile";
import SearchInp from "../components/SearchInp";

const types = {"name1": "蔬菜", "name2": "肉类"}

export default class Classification extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render(){
        return(
            <div className="home-main">
                <div className="title">
                    <h1>分类</h1>
                    <span className="text">要吃什么？这里都有</span>
                </div>
                <div className="top-ipt">
                    <div className="lt-icon" onClick={() => {this.props.history.push("/home");}}>
                        <Icon type="left" />
                    </div>
                    <div className="cen-searh">
                        <SearchInp />
                    </div>
                    <div className="rt-men" onClick={() => {this.props.history.push('/robot');}}>
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../assets/images/kefu.png").default}
                            alt=""
                        />
                    </div>
                </div>
                <div className="more">
                    <h3 onClick={() => {this.props.history.push("/more"); }}>更多分类</h3>
                </div>
                <div className="type">
                    <div className="type-box">
                        {
                            //Reflect.ownKeys(obj)
                            Object.getOwnPropertyNames(types).forEach((key)=>{
                                console.log(key,types[key]);
                                return <div className={key}>{types[key]}</div>
                            })
                        }
                       <div className="name1">水产</div>
                       <div className="name2" onClick={() => {this.props.history.push("/meat");}}>肉类</div>
                    </div>
                    <div className="type-box">
                       <div className="name3" onClick={() => {this.props.history.push("/vegetables");}}>蔬菜</div>
                       <div className="name4">主食</div>
                    </div>
                    <div className="type-box">
                       <div className="name5" onClick={() => {this.props.history.push('/bake');}}>烘焙</div>
                       <div className="name6">特色</div>
                    </div>
                </div>
            </div>
        );
    }
}
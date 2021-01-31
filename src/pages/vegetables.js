import React, { PureComponent as Component } from "react";
import "../styles/public.scss";
import { StarTwoTone } from '@ant-design/icons';
import Nav from '../components/Nav/nav';


const total = 100;
const dishes = [
    {"pic":"carrot","name":"胭脂萝卜","didCount":"75260","collect":"6714"},
    {"pic":"green","name":"青菜","didCount":"76260","collect":"1514"},
    {"pic":"cauliflower","name":"花菜","didCount":"23260","collect":"7414"},
    {"pic":"fennel","name":"茴香","didCount":"75260","collect":"8714"},
    {"pic":"okra","name":"秋葵","didCount":"76260","collect":"5514"},
    {"pic":"snow-bean","name":"荷兰豆","didCount":"3260","collect":"9414"},
    {"pic":"spinach","name":"菠菜","didCount":"75260","collect":"9714"},
    {"pic":"chives","name":"韭菜","didCount":"126260","collect":"4514"},
    {"pic":"fungus","name":"银耳","didCount":"29260","collect":"8414"}
];

export default class Vegetables extends Component{
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return(
            <div>
                <Nav />
                <div className="top">
                    <img alt="" src={require("../assets/images/vegetables.jpg").default}/>
                    <div className="info">
                        <h1>蔬菜</h1>
                        <p>蔬菜是指可以做菜、烹饪成为食品的一类植物或菌类，蔬菜是人们日常饮食中必不可少的食物之一。
                        蔬菜可提供人体所必需的多种维生素和矿物质等营养物质。
                        据国际物质粮农组织1990年统计，人体必需的维生素C的90%、维生素A的60%来自蔬菜。
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h2>{total}道菜</h2>
                    <div className="box">
                        {
                            dishes.slice(0,2).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                    <div className="box">
                        {
                            dishes.slice(2,4).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                    <div className="box">
                        {
                            dishes.slice(4,6).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                    <div className="box">
                        {
                            dishes.slice(6,8).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                </div>
            </div>
        )
    }
}
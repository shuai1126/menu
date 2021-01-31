import React from "react";
import "../styles/public.scss";
import { StarTwoTone } from '@ant-design/icons';
import Nav from '../components/Nav/nav';

const total = 40;
const dishes = [
    {"pic":"sea1","name":"爆辣海螺","didCount":"7520","collect":"9714"},
    {"pic":"sea2","name":"空气炸锅小黄鱼","didCount":"7660","collect":"1514"},
    {"pic":"sea3","name":"爆炒鱿鱼卷","didCount":"26320","collect":"7514"},
    {"pic":"sea4","name":"香辣扇贝肉","didCount":"75060","collect":"1714"},
    {"pic":"sea5","name":"香辣虾尾","didCount":"76260","collect":"5314"},
    {"pic":"sea6","name":"香辣花甲","didCount":"66260","collect":"2414"},
    {"pic":"sea7","name":"浇汁鲍鱼","didCount":"77260","collect":"9714"},
    {"pic":"sea8","name":"毛豆炒螃蟹","didCount":"12260","collect":"4544"},
    {"pic":"sea9","name":"酱炒螺蛳","didCount":"29262","collect":"8714"}
];

export default class Seafood extends React.Component{
    render() {
        return(
            <div>
                <Nav />
                <div className="top">
                    <img alt="" src={require("../assets/images/meat.jpg").default}/>
                    <div className="info">
                        <h1 className="title">水产</h1>
                        <p>水产食品是指海洋、江河中蕴藏着大量的鱼类、海带类、浮游生物、海藻等海生动植物，是取之不尽、用之不竭的天然宝库，这些食物资源将被人们科学的开发和利用，为人类的生存和生活服务。
                        海洋、江河中的水产食品也是未来食品的开发方向。</p>
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
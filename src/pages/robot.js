import React, { PureComponent as Component } from "react";
import "../styles/robot.scss";
import swal from 'sweetalert';
import $ from "jquery";
import Nav from "../components/Nav/nav";

var Words;
var TalkWords;
var question;

export default class Robot extends Component{

    InputPress() {
        if (window.event.keyCode === 13) {
            Robot.chatRoom();
        }
    }

    static chatRoom(){
        //定义空字符串
        var str = "";
        Words = document.getElementById("words");
        TalkWords = document.getElementById("talkwords");
        // console.log(TalkWords.value);
        if(TalkWords){
            if(!TalkWords.value){
                // 消息为空时弹窗
                swal({
                    text: '消息不能为空',
                    title: '',
                    type: 'warning',
                });
                return;
            }
        }
        
        str = '<div class="btalk"><span>' + TalkWords.value +'</span>&nbsp;<img src="../assets/images/boy.jpg" width="30" height="30"/></div>' ;
    
        // 将之前的内容与要发的内容拼接好 提交
        Words.innerHTML = Words.innerHTML + str;
        question =  $(" #talkwords").val("");
        $.get("http://api.tianapi.com/txapi/robot/index?key=a20db40d6c22a56b9e917a1b907d8502&" + question,
            function(data,status){
                console.log(data);
                $('#result').append(JSON.stringify(data)); //返回内容绑定到ID为result的标签
                 if (data.code === 200) {
                    str = '<div class="atalk"><img alt="" src="../assets/images/kefu.png" width="30" height="30"/>&nbsp;<span>' + data.newslist[0].reply +'</span></div>' ;
                    // 将之前的内容与要发的内容拼接好 提交
                    Words.innerHTML = Words.innerHTML + str;
                    $(" #talkwords").val("");
                }
                else {
                    str = '<div class="atalk"><img alt="" src="../assets/images/kefu.png" width="30" height="30"/>&nbsp;<span>' + data.newslist[0].reply +'</span></div>' ;
                    // 将之前的内容与要发的内容拼接好 提交
                    Words.innerHTML = Words.innerHTML + str;
                    $(" #talkwords").val("");
                    swal({
                        text: '客服出故障啦',
                        title: '',
                        type: 'error',
                    });
                }
            }
        );
    }

    render(){
        return(
            <div>
                <Nav />
                <div className="talk_con" id="talk_con_id">
                    <div className="talk_show" id="words">
                        <div className="atalk"><img src={require("../assets/images/kefu.png").default} alt="" width="30" height="30"/>&nbsp;<span id="asay">Hi,我是你的小助手Anatee，很高兴为你服务！想说什么，随时告诉我!回复88可以退出聊天。</span></div>
                        <div className="btalk"><span id="bsay">好的呢！</span>&nbsp;<img src={require("../assets/images/boy.jpg").default} alt="" width="30" height="30"/></div>
                    </div>
                    <div className="talk_input"  id="talk_input_id">
                        <input type="text" className="talk_word" id="talkwords" onKeyPress={this.InputPress}/>
                        <input type="button" value="发送" className="talk_sub" id="talksub" onClick={Robot.chatRoom}/>
                    </div>
                </div>
            </div>
        )
    }
}
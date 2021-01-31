import React, { Component, Fragment } from 'react';
import Nav from "../../components/Nav/nav";
import './style.css';

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dishImg:'',
      dishName: '鱼香肉丝',
      dishImgs: [
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201508/3114/311447276448.jpg/NjQweDA.webp',
          description: '1. 将里脊肉洗净切丝，加2克盐，料酒10克，鸡粉3克腌制10分钟。',
        },
        {
          src: 'http://s1.cdn.xiangha.com/caipu/201508/3114/311447286326.jpg/NjQweDA.webp',
          description: '2. 将冬笋，胡萝卜洗净切丝，泡发的木耳切丝，青椒洗净去蒂去筋膜，切丝备用',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201509/1310/13102417686.jpg/NjQweDA.webp',
          description: '3. 锅内加清水，大火烧开，放入切好的冬笋丝，木耳丝焯水捞出备用',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201509/1315/131507187313.jpg/NjQweDA.webp',
          description: '4. 葱姜蒜洗净，姜蒜切沫，葱切葱花',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201508/2817/281739413899.jpg/NjQweDA.webp',
          description: '5. 取小碗，加15克淀粉和少许水，调成水淀粉备用。',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201509/1310/131024179638.jpg/NjQweDA.webp',
          description: '6. 锅内下30克色拉油，大火将油烧至7成热（即油面有青烟大量上升时为7成热），放入腌好的肉丝，快速翻炒，待肉丝发白时盛出备用。',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201509/1310/131024184426.jpg/NjQweDA.webp',
          description: '7. 用余油继续加热，大火将油烧至7成热，放入豆瓣酱15克，煸炒出红油，下葱姜蒜沫，葱花留出一部分。加盐3克，味精3克，白糖10克，胡椒粉5克，老抽10克，生抽10克，待糖融化后，放香醋10克，加少许清水，倒入调好的水淀粉，开始熬汁。',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201509/1310/131024191669.jpg/NjQweDA.webp',
          description: '8. 待小料大火翻炒，炒出香味，放入炒好的肉丝',
        },
        {
          src: 'http://s3.cdn.xiangha.com/caipu/201509/1310/131025592801.jpg/NjQweDA.webp',
          description: '9. 放入焯好的笋丝和木耳丝、胡萝卜丝、青椒丝后，继续翻炒均匀即可出锅。撒些葱花，一道美味可口、色香味俱全的鱼香肉丝就展现在大家面前了。',
        },
      ],
      data: {
        猪里脊: 300,
        冬笋: 40,
        木耳: 100,
        胡萝卜: 100,
        尖椒: 100,
        葱: 10,
        姜: 10,
        蒜: 10,
        盐: 50,
        豆瓣酱: 15,
        老抽: 10,
        生抽: 10,
        香醋: 10,
        味精: 3,
        胡椒粉: 5,
        料酒: 10,
        白糖: 10,
        淀粉: 15,
      },
    };
  }

  render() {
    return (
      <Fragment>
        <Nav />
        {/*<Header> </Header>*/}
        <section>
          <img className="process-img" src="http://s1.cdn.xiangha.com/caipu/201508/3114/311447245823.jpg/NjQweDA.webp"></img>
          <h2 className="dish-title">{this.state.dishName} </h2>
        </section>
        <section>
          <h3 style={{fontSize : '20px'}}>用料</h3>
          <ul className="ingre-list">
            {Object.getOwnPropertyNames(this.state.data).map((key) => {
              return (
                <li>
                  <span>{key}</span>
                  <span>{this.state.data[key]} 克</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h3 style={{fontSize : '20px', margin: '16px'}}>做法</h3>
          <ul className="make-list">
            {this.state.dishImgs.map((item, index) => {
              return (
                <li className="step">
                  <div className="img-block">
                    {' '}
                    <img src={item.src} />
                  </div>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default Process;

// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React from 'react';
import './index.less';

const Sidebar = () => (
  <div>
    <div className="panel">
      <div className="inner">
        <p>CNode: Node.js专业中文社区</p>
        <div>
          您可以
          <a href="/">登录</a>
          或
          <a href="/">注册</a>
          也可以
          <a href="/">
            <span className="span-info">通过 Github 登录</span>
          </a>
        </div>
      </div>
    </div>
    <div className="panel">
    <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
    <img  src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
    <img  src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
      </div>
    <div className="panel">
      <div className="header">
        <span className="col-fade">无人回复的话题</span>
      </div>
      <div className="inner">
        node安装完成后npm-v检查报错
      </div>
    </div>
    <div className="panel">
      <div className="header">
        <span className="col-fade">积分榜 Top 100 >></span>
      </div>
      <div className="inner">
        21770    i5ting
      </div>
    </div>

    <div className="panel">
      <div className="header">
        <span className="col-fade">友情社区</span>
      </div>
      <div className="inner">
        <ol className="friendship-community">
          <li>
            <a
              href="https://ruby-china.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
            </a>
          </li>
          <div className="sep10"></div>
          <li>
            <a
              href="http://golangtc.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
            </a>
          </li>
          <div className="sep10"></div>
          <li>
            <a
              href="http://phphub.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
            </a>
          </li>
          <div className="sep10"></div>
          <li>
            <a
              href="https://testerhome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"
                alt="中国测试技术社区"
              />
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div className="panel">
      <div className="header">
        <span className="col-fade">客户端二维码</span>
      </div>
      <div className="inner cnode-app-download">
        <img
          width="200"
          src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
          alt="qrcode"
        />
        <br/>
        <a>
          客户端源码地址
        </a>
      </div>
    </div>
  </div>
);

export default Sidebar;

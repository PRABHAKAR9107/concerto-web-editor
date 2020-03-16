import React, { Component } from 'react';
import { Layout } from 'antd';
import './dashboard.css';
import Logo from './components/Logo';
import Toolbar from './components/Toolbar';
import DDArea from './components/DDArea';
import DGCode from './components/DGCode';
import Navbar from './components/Navbar';

const { Sider, Content } = Layout;

export default class App extends Component {
    render() {
        return (
            <div>
                <Layout className="bl" style={{ height: 635 }}>
                    <Sider width={260} >
                        <Content className="r" style={{ height: 100 }}>
                            <Logo />
                        </Content>
                        <Content className="toolbar" style={{ height: 535 }}>
                            <Toolbar />
                        </Content>
                    </Sider>
                    <Layout>
                        <Layout style={{ height: 80 }}>
                            <Content className="nbar">
                                <Navbar />
                            </Content>
                            <Sider className="r" width={360} >
                                Action buttons
                            </Sider>
                        </Layout>
                        <Layout style={{ height: 600 }}>
                            <Content className="ddarea">
                                <DDArea />
                            </Content>
                            <Sider className="b" width={360} >
                                <DGCode />
                            </Sider>
                            
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory
} from 'storm-react-diagrams';
//import TrayWidget from './graph/component/TrayWidget';
import TrayItemWidget from './graph/component/TrayItemWidget';
import './graph/srd.css';
require("storm-react-diagrams/dist/style.min.css");

const { SubMenu } = Menu;

export default class Toolbar extends Component {
  componentWillMount() {
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());
  }
  
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <PlusOutlined />
              <span>Add New Class</span>
            </span>
          }
        >
          
            <Menu.Item key="1"><TrayItemWidget model={{ type: 'in' , color: "rgb(49, 132, 255)", name:"Concept" }} name="Concept" color="rgb(49, 132, 255)" /></Menu.Item>
            <Menu.Item key="2"><TrayItemWidget model={{ type: 'out', color: "rgb(255, 62, 48)", name:"Asset" }} name="Asset" color="rgb(255, 62, 48)" /></Menu.Item>
            <Menu.Item key="3"><TrayItemWidget model={{ type: 'in', color: "rgb(255, 193, 6)", name:"Participant" }} name="Participant" color="rgb(255, 193, 6)" /></Menu.Item>
            <Menu.Item key="4"><TrayItemWidget model={{ type: 'out', color: "rgb(40, 181, 73)", name:"Transaction" }} name="Transaction" color="rgb(40, 181, 73)" /></Menu.Item>
            <Menu.Item key="5"><TrayItemWidget model={{ type: 'in', color: "rgb(133, 66, 162)", name:"Event" }} name="Event" color="rgb(133, 66, 162)" /></Menu.Item>
            <Menu.Item key="6"><TrayItemWidget model={{ type: 'out', color: "rgb(254, 41, 123)", name:"Enumerable" }} name="Enumerable" color="rgb(254, 41, 123)" /></Menu.Item>
          

        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <PlusOutlined />
              <span>Toolbox</span>
            </span>
          }
        >
          <Menu.Item key="7">Add a Field</Menu.Item>
          <Menu.Item key="8">Add a relation</Menu.Item>

        </SubMenu>
        
      </Menu>
    );
  }
}
import React, { Component } from 'react';
import { ZoomInOutlined, ZoomOutOutlined, UndoOutlined, CopyOutlined, FullscreenOutlined,AppstoreOutlined, CodeOutlined } from '@ant-design/icons';
import './Style.css';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><a href="#"><ZoomInOutlined /> </a></li>
                    <li><a href="#"><ZoomOutOutlined /> </a></li>
                    <li><a href="#"><UndoOutlined /> </a></li>
                    <li><a href="#"><CopyOutlined /> </a></li>
                    <li><a href="#"><FullscreenOutlined /> </a></li>
                    <li><a href="#"><AppstoreOutlined /> </a></li>
                    <li><a href="#"><CodeOutlined /></a></li>
                </ul>
            </nav>
        )
    }
}

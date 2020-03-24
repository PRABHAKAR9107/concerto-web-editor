import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import { code } from './CTO/CTOFile';
import "./Style.css";
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');



export default class DGCode extends Component {
    constructor(props){
        super(props);
        this.state={
            code:code                        //add node data and link data later
        }
    }
    render() {
        return (
               <CodeMirror
                    className="CodeMirror"
                    value={this.state.code}
                    options={{
                    mode: 'javascript',
                    lineNumbers: true,                   
                }}
                
            />
            
        )
    }
}

import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { code } from './CTO/CTOFile';
import "./Style.css";

export default class DGCode extends Component {
    constructor(props){
        super(props);
        this.state={
            code:code                        //add node data and link data later
        }
    }
    render() {
        const code = this.state.code;
        const options = {
          selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={(newValue,e)=>{
                console.log('onChange',newValue,e)
              }}
            editorDidMount={(editor,monaco)=>{
                console.log('editorDidMount',editor);
                editor.focus();
              }}
          />
            
        )
    }
}

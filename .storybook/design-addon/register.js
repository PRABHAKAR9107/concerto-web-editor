//.storybook/design-addon/register.js
import React, { useState } from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { code } from '../CTO/CTOFile';
import MonacoEditor from 'react-monaco-editor';


const editorDidMount=(editor, monaco)=> {
  console.log('editorDidMount', editor);
  editor.focus();
}



addons.register('my/design-addon', () => {
   
  addons.add('design-addon/panel', {
    title: 'CODE',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
            <MonacoEditor
                    width="100%"
                    height="100%"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    onChange={(newValue,e)=>{
                      console.log('onChange',newValue,e)
                    }}
                    editorDidMount={(editor,monaco)=>{
                      console.log('editorDidMount',editor);
                      editor.focus();
                    }}
            />
      </AddonPanel>
    ),
  });
});

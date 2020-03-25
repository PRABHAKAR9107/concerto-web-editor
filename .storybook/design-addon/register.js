//.storybook/design-addon/register.js
import React, { useState } from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import { code } from '../CTO/CTOFile';
import 'codemirror/theme/material.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

addons.register('my/design-addon', () => { 
  addons.add('design-addon/panel', {
    title: 'CODE',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
            <CodeMirror
                    className="CodeMirror"
                    value={code}                   
                    options={{
                    mode: 'javascript',
                    lineNumbers: true, 
                    theme:"material"                  
                    }}
                    onChange={(editor, data, value) => {
                      console.log("Changing code");
                    }}
            />
      </AddonPanel>
    ),
  });
});

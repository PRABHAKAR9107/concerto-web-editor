import React from 'react';
import  DDArea  from '../components/DDArea';
import TrayItemWidget from '../components/graph/component/TrayItemWidget';
import "./style.css"
import { create } from '@storybook/theming/create';

export default {
  title: 'Add New Class',
  component: DDArea,

};

 create({
  base: 'light',

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});


export const Class = () =>(
  <div className="widget">
    <ul>
      <li><TrayItemWidget model={{ type: 'out' , color: "rgb(49, 132, 255)", name:"Concept" }} name="Concept" color="rgb(49, 132, 255)" /></li>
      <li><TrayItemWidget model={{ type: 'out', color: "rgb(255, 62, 48)", name:"Asset" }} name="Asset" color="rgb(255, 62, 48)" /></li>
      <li><TrayItemWidget model={{ type: 'out', color: "rgb(255, 193, 6)", name:"Participant" }} name="Participant" color="rgb(255, 193, 6)" /></li>
      <li><TrayItemWidget model={{ type: 'out', color: "rgb(40, 181, 73)", name:"Transaction" }} name="Transaction" color="rgb(40, 181, 73)" /></li>
      <li><TrayItemWidget model={{ type: 'out', color: "rgb(133, 66, 162)", name:"Event" }} name="Event" color="rgb(133, 66, 162)" /></li>
      <li> <TrayItemWidget model={{ type: 'out', color: "rgb(254, 41, 123)", name:"Enumerable" }} name="Enumerable" color="rgb(254, 41, 123)" /></li>
    </ul>  
    
    <DDArea />
  </div>
);


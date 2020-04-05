import * as React from 'react';
import * as _ from 'lodash';
import { Application } from '../Application';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import './style.css';
import { AdvancedPortModel } from '../custom-link/Arrow';
import { JSCustomNodeModel } from '../custom-node-js/JSCustomNodeModel'
export interface BodyWidgetProps {
	app: Application;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	constructor(props){
		super(props);
		this.state={
		  items:[],
		  currentItem:{
			text:'',
			key:''
		  }
		}
		this.handleInput=this.handleInput.bind(this);
		this.addItem=this.addItem.bind(this);
		this.deleteItem=this.deleteItem.bind(this);
		this.setUpdate=this.setUpdate.bind(this);
	  }
	
	  handleInput(e){
		this.setState({
		  currentItem:{
			text:e.target.value,
			key:Date.now()
		  }
		})
	  }
	
	  addItem(e){
		e.preventDefault();
		const newItem=this.state.currentItem;
		
		if(newItem.text !==""){
		  console.log(newItem);
		  const newItems =[...this.state.items,newItem];
		  this.setState({
			items:newItems,
			currentItem:{
			  text:"",
			  key:""
			}
		  })
	
		}
	  }
	
	  deleteItem(key){
		const filteredItems=this.state.items.filter(item => 
			item.key!==key );
		this.setState({
		  items:filteredItems
		})
	  }
	
	  setUpdate(text,key){
		const items=this.state.items;
		items.map(item =>{
		  if(item.key === key){
			item.text=text;
		  }
		})
		this.setState({
		  items:items
		})
	  }
	render() {
		return (
					<div
						onDrop={event => {
							var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));

							var ports = [                                                
								{ text: "String Dela", color: "grey", isIn: true },
								 { text: "String Off", color: "grey", isIn: true },
							  ]

							var node = new JSCustomNodeModel({ name: data.name, color: data.color, ports });
							//node.addPort(new AdvancedPortModel(true, 'in'));
							node.addPort(new AdvancedPortModel(false, data.type)); //matlab isse arrow aa raha hai but true ,in set krne se ni aaraha
							

							var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
							node.setPosition(point);
							this.props.app
								.getDiagramEngine()
								.getModel()
								.addNode(node);
							this.forceUpdate();
						}}
						onDragOver={event => {
							event.preventDefault();
						}}>
							
						
							<CanvasWidget className="srd-demo-canvas" engine={this.props.app.getDiagramEngine()} />
							
					
					</div>
				
		);
	}
}
import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
//import { MdClose } from "react-icons/md";
import './style.css';
import { useState } from 'react';

const JSCustomNodeWidget = ({ engine, node }) => {
	var [list,setList]=useState(
		{
			items:[],
			currentItem:{ text: "", color: node.color, isIn: true, key:node.key },
		}                               
	)
	const addItem=()=>{
		const newItem=list.currentItem;
		setList(list.items=[...list.items,newItem])
		console.log(list);
	
	}

	const handleInput=(e)=>{
		//console.log(e.target.value)
		setList(list.currentItem.text=e)
		//node.portzo.text =e.target.value
	}

	const setUpdate=()=>{
		console.log("something")
	}

	const deleteItem=(key)=>{
		const filteredItems=list.items.filter(item =>           //list.filter is not a function
			item.key!==key );
		setList(list=filteredItems)

	  }

	const renderList = _ => {
		return node.portz.map(portzo => {
			return (
				<div className="port-row" key={portzo.key}>
					<p><input type="text"  value="enter the fields" onClick={ ()=>{deleteItem(portzo.key)} } onChange={ handleInput } /></p>
				</div>
			)
		})
	}
	const head_color=()=>{
		switch(node.name){
			case "Concept":
				return { background: "rgb(34, 92, 178)" }

			case "Asset":
				return { backgroundColor: "rgb(178, 43, 34)" }

			case "Event":
				return { backgroundColor: "rgb(93, 46, 113)" }

			case "Participant":
				return { background: "rgb(178, 135, 4)" }

			case "Enumerable":
				return {backgroundColor: "rgb(178, 29, 86)" }

			case "Transaction":
				return { background:"rgb(28, 127, 51)" }
			default:
				break
	}
}	

	return (
		<div className="custom-node" >
			
			<div className="node-header" style={ head_color() }>
				<PortWidget engine={engine} port={node.getPort('in')}>
						{ node.name }
				</PortWidget>
				
			</div>
			
			<div className="node-ports" style={{backgroundColor:node.color}}>
				{renderList()}
			</div>
			
		</div>
	);
}

export default JSCustomNodeWidget
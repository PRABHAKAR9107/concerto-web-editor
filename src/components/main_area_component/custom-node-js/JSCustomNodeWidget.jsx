import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
//import { MdClose } from "react-icons/md";
import './style.css';
import { useState } from 'react';

const JSCustomNodeWidget = ({ engine, node }) => {
	var [list,setList]=useState(
		[                                                
			{ text: "String eventId", color: "grey", isIn: true, key:1 },
			{ text: "DateTime timeStamp", color: "grey", isIn: true, key:2 },
		]
	)
	const addItem=(x)=>{
		setList(list=[...list,x])
		console.log(list);
		
	}

	const setUpdate=()=>{
		console.log("something")
	}

	const deleteItem=(key)=>{
		const filteredItems=list.filter(item => 
			item.key!==key );
		setList(list=filteredItems)

	  }

	const renderList = _ => {
		return node.portz.map(portzo => {
			return (
				<div className="port-row" key={portzo.key}>
					<p><input type="text"  value={ portzo.text } onClick={ ()=>{deleteItem(portzo.key)} } onChange={setUpdate} /></p>
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
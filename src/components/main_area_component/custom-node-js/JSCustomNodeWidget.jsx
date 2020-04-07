import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

import './style.css';

/* portzo.color is port color <PortWidget engine={engine} port={node.getPort('in')}>
						<div style={{background:'rgb(128, 128, 128)' }}  className="circle-port" /> 
			</PortWidget> */
const JSCustomNodeWidget = ({ engine, node }) => {
	const renderList = _ => {
		return node.portz.map(portzo => {
			return (
				<div className="port-row" key={portzo.key}>
					<p>{portzo.text}</p>
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
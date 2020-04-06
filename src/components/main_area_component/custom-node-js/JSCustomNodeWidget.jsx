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
var head_color="";	
switch(node.name){
		case "Concept":
			head_color="rgb(34, 92, 178)"
			break
		case "Asset":
			head_color="rgb(178, 43, 34)"
			break
		case "Event":
			head_color="rgb(93, 46, 113)"
			break
		case "Participant":
			head_color="rgb(178, 135, 4)"
			break
		case "Enumerable":
			head_color="rgb(178, 29, 86)"
			break
		case "Transaction":
			head_color="rgb(28, 127, 51)"
			break

	}
	return (
		<div className="custom-node" >
			
			<div className="node-header" style={{backgroundColor:head_color}}>
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
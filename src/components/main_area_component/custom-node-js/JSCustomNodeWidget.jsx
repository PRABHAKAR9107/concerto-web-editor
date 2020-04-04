import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

import './style.css';

/* portzo.color is port color */
const JSCustomNodeWidget = ({ engine, node }) => {
	const renderPorts = _ => {
		return node.portz.map(portzo => {
			return (
				<div className="port-row">
					<PortWidget engine={engine} port={node.getPort('in')}>
						<div style={{background: portzo.color}} className="circle-port" /> 
					</PortWidget>
					
					<p>{portzo.text}</p>
				</div>
			)
		})
	}
	return (
		<div className="custom-node" >
			<div className="node-header" style={{backgroundColor:node.color}}>
				{ node.name }
			</div>
			<div className="node-ports" style={{backgroundColor:node.color}}>
				{renderPorts()}
			</div>
		</div>
	);
}

export default JSCustomNodeWidget
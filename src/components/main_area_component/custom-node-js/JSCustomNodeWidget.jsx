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
				<div className="port-row">
					<p>{portzo.text}</p>
				</div>
			)
		})
	}
	return (
		<div className="custom-node" >
			<div>
				<PortWidget engine={engine} port={node.getPort('in')}>
					<div className="node-header" style={{backgroundColor:node.color}}>
						{ node.name }
					</div>
				</PortWidget>
			</div>
			<button style={{float:'right'}}>x</button>
			<div className="node-ports" style={{backgroundColor:node.color}}>
				{renderList()}
			</div>
			
		</div>
	);
}

export default JSCustomNodeWidget
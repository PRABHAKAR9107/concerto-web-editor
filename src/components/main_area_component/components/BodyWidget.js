import * as React from 'react';
import * as _ from 'lodash';
import { Application } from '../Application';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import './style.css';

export interface BodyWidgetProps {
	app: Application;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return (
					<div
						onDrop={event => {
							var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));

							var node: DefaultNodeModel = null;
							node = new DefaultNodeModel(data.name, data.color);
							switch(data.name){
								case 'Concept':
									{
										node.addInPort('String streetAddress','In');
										node.addOutPort('');
										node.addInPort('String postalCode','In');
										node.addOutPort('');
										node.addInPort('String postOfficeBoxNumber','In');
										node.addOutPort('');
										node.addInPort('String Address','In');
										node.addOutPort('');
										break;
									}

								case 'Participant':
									{
										node.addInPort('String identifier','In');
										node.addOutPort('');
										node.addInPort('String identifiedByField optional','In');
										node.addOutPort('');
										node.addInPort('TypeIdentifier superType optional','In');
										node.addOutPort('');
										node.addInPort(' Decorator[] decorators optional','In');
										node.addOutPort('');
										break;
									}
								case 'Transaction':
									{
										node.addInPort('String transactionId','In');
										node.addOutPort('');
										node.addInPort('DateTime timeStamp','In');
										node.addOutPort('');
										break;
										
									}
								case 'Event':
									{
										node.addInPort('String eventId','In');
										node.addOutPort('');
										node.addInPort('DateTime timeStamp','In');
										node.addOutPort('');
										break;
									}
								case 'Enumerable':
									{
										node.addInPort('String summerSeason','In');
										node.addOutPort('');
										node.addInPort('String winterSeason','In');
										node.addOutPort('');
										node.addInPort('String rainySeason','In');
										node.addOutPort('');
										break;
									}
								case 'Asset':
									{
										node.addInPort('String assetOne','In');
										node.addOutPort('');
										node.addInPort('String assetTwo','In');
										node.addOutPort('');
										break;
									}
							}

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
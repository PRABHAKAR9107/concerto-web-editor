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
	render() {
		return (
					<div
						onDrop={event => {
							var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));

							switch(data.name){
								case 'Concept':
									{
										var ports = [                                                
											{ text: "String Dela", color: "grey", isIn: false },
 											{ text: "String Off", color: "grey", isIn: false },
										  ]
										break;
									}

								case 'Participant':
									{
										var ports = [                                                
											{ text: "String Delay", color: "grey", isIn: true },
 											{ text: "String Offset", color: "grey", isIn: true },
										  ]
										break;
									}
								case 'Transaction':
									{
										var ports = [                                                
											{ text: "String Delay", color: "grey", isIn: true },
 											{ text: "String Offset", color: "grey", isIn: true },
										  ]
										break;
										
										
									}
								case 'Event':
									{
										var ports = [                                                
											{ text: "String Delay", color: "grey", isIn: true },
 											{ text: "String Offset", color: "grey", isIn: true },
										  ]
										break;
									}
								case 'Enumerable':
									{
										var ports = [                                                
											{ text: "String Delay", color: "grey", isIn: true },
 											{ text: "String Offset", color: "grey", isIn: true },
										  ]
										break;
									}
								case 'Asset':
									{
										var ports = [                                                
											{ text: "String Delay", color: "grey", isIn: true },
 											{ text: "String Offset", color: "grey", isIn: true },
										  ]
										break;
									}
							}

							var node = new JSCustomNodeModel({ name: data.name, color: data.color, ports });
							//node.addPort(new AdvancedPortModel(true, 'in'));
							node.addPort(new AdvancedPortModel(true, 'out')); //matlab isse arrow aa raha hai but true ,in set krne se ni aaraha
							

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
import * as React from 'react';
import { Application } from '../Application';
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
								case "Concept":
									var ports = [                                                
										{ text: "String streetAddress", color: "grey", isIn: true, key:1 },
										 { text: "String postalCode", color: "grey", isIn: true, key:2 },
										 { text: "String postOfficeBoxNumber", color: "grey", isIn: true, key:3 },
										 { text: "String Address", color: "grey", isIn: true, key:4 },
										 
										 
									  ]
									break
								case "Participant":
									var ports = [                                                
										{ text: "String identifier", color: "grey", isIn: true, key:1 },
										 { text: "String identifiedByField ", color: "grey", isIn: true, key:2 },
										 { text: "TypeIdentifier superType ", color: "grey", isIn: true, key:3 },
										 { text: "Decorator[] decorators", color: "grey", isIn: true, key:4 },
									  ]
									break
								case "Event":
									var ports = [                                                
										{ text: "String eventId", color: "grey", isIn: true, key:1 },
										 { text: "DateTime timeStamp", color: "grey", isIn: true, key:2 },
									  ]
									break
								case "Asset":
									var ports = [                                                
										{ text: "String assetOne", color: "grey", isIn: true, key:1 },
										 { text: "String assetTwo", color: "grey", isIn: true, key:2 },
									  ]
									break
								case "Enumerable":
									var ports = [                                                
										{ text: "String summerSeason", color: "grey", isIn: true, key:1 },
										 { text: "String winterSeason", color: "grey", isIn: true, key:2 },
										 { text: "String rainySeason", color: "grey", isIn: true, key:3 },
									  ]
									break
								case "Transaction":
									var ports = [                                                
										{ text: "String transactionId", color: "grey", isIn: true, key:1 },
										 { text: "DateTime timeStamp", color: "grey", isIn: true, key:2 },
									  ]
									break
						
							}  
							var node = new JSCustomNodeModel({ name: data.name, color: data.color, ports });
							
							node.addPort(new AdvancedPortModel(false, data.type)); 
							

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
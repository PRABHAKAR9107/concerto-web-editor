import React, { Component } from 'react';
import "./Style.css";
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DefaultNodeModel,
    DefaultPortModel
} from 'storm-react-diagrams';
import './graph/srd.css';

require("storm-react-diagrams/dist/style.min.css");
export default class DDArea extends Component {
    constructor(props) {
        super(props);
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
        this.engine.registerLinkFactory(new DefaultLinkFactory());
        
	}
    render() {
        return (
            <div
					className="diagram-layer"
					onDrop={event => {
						var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
						//var nodesCount = Lodash.keys(this.engine.getDiagramModel().getNodes()).length; //this is used to get the number of nodes
						var node = null;
						//alert(data.name);
						
						node = new DefaultNodeModel(data.name, data.color);
                        node.addPort(new DefaultPortModel(true, 'in-1', 'In'));
                        node.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
						
						var points = this.engine.getRelativeMousePoint(event);
						node.x = points.x;
						node.y = points.y;
						this.engine.getDiagramModel().addNode(node);
                        this.forceUpdate();
                        
                    }}
                    onDoubleClick={event=>{
                        //!------------- SERIALIZING ------------------
                        const str=JSON.stringify(this.engine.getDiagramModel().serializeDiagram())
                        console.log(str);

                        //!------------- DESERIALIZING ----------------
		                //we need this to help the system know what models to create form the JSON
		                //this.engine.registerInstanceFactory(new DefaultNodeInstanceFactory());
		                //this.engine.registerInstanceFactory(new DefaultPortInstanceFactory());
		                //this.engine.registerInstanceFactory(new LinkInstanceFactory());

		                //deserialize the model
		                //var model = new DiagramModel();
		                //model.deSerializeDiagram(JSON.parse(str), this.engine);
		                //this.engine.setDiagramModel(model);
                    }}

					onDragOver={event => {
						event.preventDefault();
					}}
				>
					<DiagramWidget className="srd-demo-canvas"  diagramEngine={this.engine} />
				</div>
        )
    }
}

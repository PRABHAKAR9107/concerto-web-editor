import * as SRD from '@projectstorm/react-diagrams';
import { AdvancedLinkFactory } from './custom-link/Arrow';
import { JSCustomNodeFactory } from './custom-node-js/JSCustomNodeFactory';

export class Application {
	activeModel= SRD.DiagramModel;
	diagramEngine= SRD.DiagramEngine;
	
	constructor() {
		this.diagramEngine = SRD.default();
		this.newModel();
	}

     newModel() {
		this.activeModel = new SRD.DiagramModel();
		//this.diagramEngine.getLinkFactories().registerFactory(new AdvancedLinkFactory());//by this line we converted default links into advanced links
		this.diagramEngine.getNodeFactories().registerFactory(new JSCustomNodeFactory());//by this line we converted the default nodes into customized nodes
		this.diagramEngine.setModel(this.activeModel);

		//this.activeModel.addAll(node1, node2, link1);
	}

	 getActiveDiagram(){
		return this.activeModel;
	}

	 getDiagramEngine(){
		return this.diagramEngine;
	}
}
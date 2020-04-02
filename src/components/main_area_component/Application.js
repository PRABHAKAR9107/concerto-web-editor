import * as SRD from '@projectstorm/react-diagrams';

/**
 * @author Dylan Vorster
 */
export class Application {
	activeModel= SRD.DiagramModel;
	diagramEngine= SRD.DiagramEngine;

	constructor() {
		this.diagramEngine = SRD.default();
		this.newModel();
	}

     newModel() {
		this.activeModel = new SRD.DiagramModel();
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
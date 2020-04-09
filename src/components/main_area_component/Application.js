import {DeleteItemsAction} from '@projectstorm/react-canvas-core';
import * as SRD from '@projectstorm/react-diagrams';

import { AdvancedLinkFactory } from './custom-link/Arrow';
import { JSCustomNodeFactory } from './custom-node-js/JSCustomNodeFactory';

export class Application {
	activeModel= SRD.DiagramModel;
	diagramEngine= SRD.DiagramEngine;
	
	constructor() {
		this.diagramEngine = SRD.default({
			registerDefaultDeleteItemsAction: false				//with this I am able to overwrite the default delete action
		});
		this.diagramEngine.getActionEventBus().registerAction(new DeleteItemsAction({keyCodes: [46]}));    //delete key value is 46 with this you will be able to delete node with delete key
		this.newModel();
	}

     newModel() {
		this.activeModel = new SRD.DiagramModel();
		this.diagramEngine.getLinkFactories().registerFactory(new AdvancedLinkFactory());//by this line we converted default links into advanced links
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
import {  NodeModel } from '@projectstorm/react-diagrams';
import { AdvancedPortModel } from '../custom-link/Arrow';
import { DefaultPortModel } from '@projectstorm/react-diagrams';
/**
 * Example of a custom model using pure javascript
 */

export class JSCustomNodeModel extends NodeModel {
	constructor(options = {}) {
		super({
			...options,
			type: 'js-custom-node'
		});
		this.name  = options.name;
		this.color = options.color ;
		this.portz = options.ports || [];

		options.ports.forEach(port => {/*yahan akar setting karn padhegi */
			this.addPort(
				new DefaultPortModel({    
					in: port,
					name: "in"
				})
			);
		})
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.options.color
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
		this.color = ob.color;
	}
}

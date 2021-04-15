import Component from '@glimmer/component';

export default class ConditionalComponent extends Component {
	get value() {
		return this.args.changeset?.get(this.args.fieldName);
	}
}
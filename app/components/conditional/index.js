import Component from '@glimmer/component';

export default class ConditionalComponent extends Component {
	activeCount = 0;
	notActiveCount = 0;

	get isActive() {
		console.log('executing', this.args.label)
		let isActive = this.args.fieldNames.find((name) => {
			return this.args.changeset?.get(name)
		})

		if(isActive) {
			this.activeCount++;
		} else {
			this.notActiveCount++;
		}

		return isActive;
	}
}
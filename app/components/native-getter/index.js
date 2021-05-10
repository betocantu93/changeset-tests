import Component from '@glimmer/component';

export default class NativeGetterComponent extends Component {
  activeCount = 0;
  notActiveCount = 0;

  get isActive() {
    console.log(
      `%cexecuting native getter ${this.args.label}`,
      'background: #222; color: orange'
    );
    let isActive = this.args.fieldNames.find((name) => {
      return this.args.changeset?.get(name);
    });

    if (isActive) {
      this.activeCount++;
    } else {
      this.notActiveCount++;
    }

    return isActive;
  }
}

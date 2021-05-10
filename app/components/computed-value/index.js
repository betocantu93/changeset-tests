import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { defineProperty } from '@ember/object';

export default class ConditionalComponent extends Component {
  activeCount = 0;
  notActiveCount = 0;

  constructor() {
    super(...arguments);
    const deps = this.args.fieldNames
      .map((ar) => `args.changeset.mirror.${ar}`)
      .join(',');
    console.log(deps);
    defineProperty(
      this,
      'isActive',
      computed(deps, () => {
        console.log(`%cexecuting computed ${this.args.label}`, 'background: #222; color: pink');
        let isActive = this.args.fieldNames.find((name) => {
          return this.args.changeset?.get(name);
        });

        if (isActive) {
          this.activeCount++;
        } else {
          this.notActiveCount++;
        }

        return isActive;
      })
    );
  }
}

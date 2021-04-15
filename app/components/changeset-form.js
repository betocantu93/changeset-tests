import Component from '@glimmer/component';
import EmberObject from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { Changeset } from 'ember-changeset';

window.changeset = Changeset;

export default class CFComponent extends Component {
  @tracked model;
  constructor() {
    super(...arguments);
    this.model = EmberObject.create({
      document: this.args.model,
      user: {
        address: {
          primary: false
        }
      }
    });
  }
}

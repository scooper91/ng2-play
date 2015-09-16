import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Zippy} from './zippy';

@Component({
    selector: 'hello'
})
@View({
    template: `<zippy title="details"></zippy>`,
    directives: [CORE_DIRECTIVES, Zippy]
})
export class Hello {
    name: string = 'World';
    constructor() {
        setTimeout(() => {
          this.name = 'NEW World'
        }, 2000);
    }
}

bootstrap(Hello);

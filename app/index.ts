import 'reflect-metadata';
import {Component, View, bootstrap} from 'angular2/angular2';
import './styles/app';

@Component({
	selector: 'app'
})
@View({
	template: 'Hello World'
})
class App {
}

bootstrap(App);
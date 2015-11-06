import {Component, View} from 'angular2/angular2';
import './styles/main';
import Header from '../header';
import Footer from '../footer';
var template:string = require('./partials/main');

@Component({
	selector: 'app',
})
@View({
	template,
	directives: [Header, Footer]
})
export default class App {
	constructor(){
	}
}
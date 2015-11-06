import { Component, View } from 'angular2/angular2';
var template:string = require('./partials/header');

@Component({
	selector: 'header'
})
@View({
	template
})
export default class Header {
	
}
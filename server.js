var zetta =require('zetta'); 
var LED = require('zetta-led-edison-driver');
var PIR = require('zetta-pir-edison-driver');
var homeSecurity = require('./app/homesecurity.js');

zetta()
.name('rumc')
.use(LED,13)
.use(PIR,6)
.use(homeSecurity) 
.listen(1337,function(){
	console.log("Heya, I'm up!");
});
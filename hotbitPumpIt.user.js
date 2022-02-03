// ==UserScript==
// @name         HotbitPumpIt
// @namespace    http://sloughi.io/
// @version      0.1
// @description  profet Pump!
// @author       You
// @match        https://www.hotbit.io/*
// @icon         https://www.google.com/s2/favicons?domain=hotbit.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let fixedQauntity = 20.000
let currentPrice = 0.0
let fees = 0.2

async function hotbitPumpIt(coin) {

currentPrice = parseFloat(document.title)
/// Calculate the quantity of the token
const quantityUSDT = fixedQauntity / ( 1.0005 + ( fees / 100) )
const quanitityToken = quantityUSDT / currentPrice


//const numberDecimal = document.querySelectorAll('dd')[4].querySelectorAll('p')[1].innerText.split(".")[1].split(" ")[0].length;

console.log("intial info =>",{quanitityToken,currentPrice})

let intialData = {
	price:currentPrice,
	quantity:quanitityToken,//.toFixed(numberDecimal),
	coin,
	side:'BUY',
};

const {price,quantity,side="BUY"} = intialData;

const body = `price=${price}&quantity=${quantity}&market=${coin}%2FUSDT&side=${side}&type=LIMIT&hide=false&use_discount=false`;

	console.log("Start BOTT");
	console.log('==',body,'==');
	// GET current price
	currentPrice = parseFloat(document.title)
	//
    	const coockie = document.cookie;
	const url = 'https://www.hotbit.io/v1/order/create?platform=web';

	console.log("send request wait 3la raz9ak 23%...");

	const response = await fetch(url, {
    		method: 'POST', //
    		credentials: 'same-origin', //
    		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'user-agent' :'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
			'referer' : 'https://www.hotbit.io',
		coockie,
	},
    body,
  });
  return response.json();
}

 function checkOrder(){
	const coin = localStorage.getItem("$coin");
	if(!coin)return alert("No any order here !!");
		setTimeout(_=>
		hotbitPumpIt(coin).then(data => {
			console.log("#Respons 100%..");
			console.info(data);
			localStorage.setItem("$coin","");
		}),
	5000)


}
    window.onload = checkOrder
//checkOrder();
    // Your code here...
})();

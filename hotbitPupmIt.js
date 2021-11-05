
let intialFixedQauntity = 20.000

let fees = 0.2

/*// active for fetch all data
fetch("https://www.hotbit.io/v1/public/market/status24h?platform=web", requestOptions)
  .then(response => response.json())
  .then((data=[]) => {
	globalThis.allCoins = (data.Content && data.Content.result) || [];
	console.log("Load all list Coins 10%....")
	 setTimeout(checkOrder,5000);
});

  .catch(error => console.log('error', error));
*/
async function hotbitPumpIt({coin="BNB",fixedQauntity=intialFixedQauntity}) {

	
let res_currentPrice = await fetch( "https://api.hotbit.io/api/v1/market.last?market="+coin+"/USDT");
    let {result:currentPrice=0.0} = await res_currentPrice.json();


/// Calculate the quantity of the token
const quantityUSDT = fixedQauntity / ( 1.0005 + ( fees / 100) )
const quanitityToken = quantityUSDT / currentPrice

//const numberDecimal = globalThis.allCoins[coin+"USDT"]
//const numberDecimal = currentPrice.toString().split('.')[1] && currentPrice.toString().split('.')[1].length || 8; //default 8
//const map = new Map(Object.entries(globalThis.allCoins));
//const getDecimal = map.get(coin+"USDT").base_volume.split('.')[1].length
const numberDecimal = document.querySelectorAll('dd')[4].querySelectorAll('p')[1].innerText.split(".")[1].split(" ")[0].length;

	
console.log("intial info =>",{quanitityToken,currentPrice})

let intialData = {
	price:currentPrice,
	quantity:quanitityToken.toFixed(numberDecimal),
	coin,
	side:'BUY',
};

const {price,quantity,side="BUY"} = intialData;

const body = `price=${price}&quantity=${quantity}&market=${coin}%2FUSDT&side=${side}&type=LIMIT&hide=false&use_discount=false`;

	console.log("Start BOTT");
	console.log('==',body,'==',{numberDecimal,intialData},);
	// GET current price
	//currentPrice = parseFloat(document.title)
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

async function hotbitPumpSell({coin="BNB"}) {

const checkCoin = document.querySelector('div.ordersO.exchange-card.layout-r > ul > li:nth-child(3) > table > tbody > tr ').querySelectorAll('td')[2].innerText
const price = document.querySelector('div.ordersO.exchange-card.layout-r > ul > li:nth-child(3) > table > tbody > tr ').querySelectorAll('td')[3].innerText
const quantity = document.querySelector('div.ordersO.exchange-card.layout-r > ul > li:nth-child(3) > table > tbody > tr ').querySelectorAll('td')[4].innerText.split(" ")[0]

let intialData = {
	price:price,
	quantity:fixedQauntity,
	coin,
	side:'SELL',
};

const {price,quantity,side="SELL"} = intialData;

const body = `price=${price}&quantity=${quantity}&market=${coin}%2FUSDT&side=${side}&type=LIMIT&hide=false&use_discount=false`;

	console.log("Start Sell BOTT");
	console.log('==',body,'==',{numberDecimal,intialData},);

    const coockie = document.cookie;
	const url = 'https://www.hotbit.io/v1/order/create?platform=web';

	console.log("sell request wait 3la raz9ak 23%...");
	const response;
	if( checkCoin == coin+"USDT" ){
	
		response = await fetch(url, {
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
	}
	
	return response.json();
}


function checkOrder(){

const fixedQauntity = prompt("Qauntity") || 20.00;
const coin = prompt("Coin").toUpperCase() || "BNB";

hotbitPumpIt({coin,fixedQauntity}).then(data => {
	console.log("#Response buy 100%..");
	console.info(data);
	
	hotbitPumpSell({coin}).then(data => {
		console.log("#Response sell 100%..");
	}

})


}
setTimeout(checkOrder,5000); // remove if active auto fetch all coins



}

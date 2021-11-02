///1 core
async function hotbitPumpIt(intialData) {

let fixedQauntity = 20.000
let currentPrice = 0.0
let fees = 0.2
const {price,quantity,coin,side="BUY"} = intialData;

const body = `price=${price}&quantity=${quantity}&market=${coin}%2FUSDT&side=${side}&type=LIMIT&hide=false&use_discount=false`;
//price=555&quantity=0.0536&market=BNB%2FUSDT&side=BUY&type=LIMIT&hide=false&use_discount=false

	console.log("Start BOTT");
	console.log('==',body,'==');
	// GET current price
	const responsePrice = await fetch("https://api.hotbit.io/api/v1/market.last?market="+coin+"/USDT", {
		method: 'GET', //
	    	headers: {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
		}
	}).then((response) => response.json()).then(data => { price = data.result } ))
	
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
			referer : 'https://www.hotbit.io',
		coockie,
	},
    body,
  });
  return response.json(); 
}
////// start

///  Get current price from dashboard
///const currentPrice = parseFloat(document.querySelector('.last.price-up').innerText);

/// Calculate the quantity of the token
const quantityUSDT = fixedQauntity / ( 1.0005 + ( fees / 100) )
const quanitityToken = quantityUSDT / currentPrice

console.log("quantity of token"+quanitityToken+ " " + "trade price "+ currentPrice)

let intialData = {
	price:currentPrice,
	quantity:quanitityToken,
	coin:"BNB",
	side:'BUY',
};

hotbitPumpIt(intialData).then(data => {
console.log("#Respons 100%..");
    console.info(data); 
});


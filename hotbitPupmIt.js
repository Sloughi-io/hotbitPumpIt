///1 core
async function hotbitPumpIt(intialData) {

const {price,quantity,coin,side="BUY"} = intialData;

const body = `price=${price}&quantity=${quantity}&market=${coin}%2FUSDT&side=${side}&type=LIMIT&hide=false&use_discount=false`;
//price=555&quantity=0.0536&market=BNB%2FUSDT&side=BUY&type=LIMIT&hide=false&use_discount=false

	console.log("Start BOTT");
	console.log('==',body,'==');
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
const currentPrice = parseFloat(document.querySelector('.last.price-up').innerText);

/// Get paid fees
const fees = parseFloat(document.querySelector(".limit-market-line.line-rate").querySelector(".price-down").innerText)

/// Get balance in USDT
const balance = parseFloat( document.querySelector(".right.right-balance").querySelector(".balance").querySelector('span').innerText)

/// Calculate the quantity of the token
const quantityUSDT = balance / ( 1.0005 + ( fees / 100) )
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


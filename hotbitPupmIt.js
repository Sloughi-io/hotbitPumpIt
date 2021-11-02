///1 core
let fixedQauntity = 20.000
let currentPrice = 0.0
let fees = 0.2

async function getCurrentPrice(coin) {
	const urlMarketPrice = "https://api.hotbit.io/api/v1/market.last?market="+coin+"/USDT";

	const marketPrice = await fetch(urlMarketPrice, {
    		method: 'GET', //
			mode:"no-cors",
    		credentials: 'same-origin', //
    		headers: {
			//	'Access-Control-Allow-Origin':'*',
			//		"Allow":"*",
			'Content-Type': 'application/x-www-form-urlencoded',
			'user-agent' :'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
			referer : 'https://www.hotbit.io',
		coockie:document.cookie,
	}
  })
const res =  await marketPrice.text() ;
  //document.write(res)
      const json = marketPrice === "" ? {} : JSON.parse(marketPrice);
      console.log("==========ssss=",json);
	   return json;
 

}

async function hotbitPumpIt(intialData) {
const coockie = document.cookie;

const {coin,side="BUY"} = intialData;

//price=555&quantity=0.0536&market=BNB%2FUSDT&side=BUY&type=LIMIT&hide=false&use_discount=false

	console.log("Start BOTT");
	console.log('get current price ....0%');
	// GET current price
	
	 
 // const resCurrentPrice = await marketPrice.json(); 
 const resCurrentPrice = await getCurrentPrice(coin);
	console.log("======>>>",resCurrentPrice)
  const {price:currentPrice} = resCurrentPrice || [];

  if(!currentPrice)return alert("not found price market :(")
  console.log("Price ==> "+currentPrice);

  const quantityUSDT = fixedQauntity / ( 1.0005 + ( fees / 100) )
const quantity = quantityUSDT / currentPrice;

	const body = `price=${currentPrice}&quantity=${quantity}&market=${coin}%2FUSDT&side=${side}&type=LIMIT&hide=false&use_discount=false`;
console.log('BODY ==>',body,'==');
	//
    	
	const url = 'https://www.hotbit.io/v1/order/create?platform=web';

	console.log("Send request wait 3la raz9ak 23%...");
	
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
//const quantityUSDT = fixedQauntity / ( 1.0005 + ( fees / 100) )
//const quantity = quantityUSDT / currentPrice


let intialData = {
	//price:currentPrice,
	//quantity,
	coin:"BNB",
	//side:'BUY',
};

hotbitPumpIt(intialData).then(data => {
console.log("#Respons Complet 100%..");
    console.table(data); 
});

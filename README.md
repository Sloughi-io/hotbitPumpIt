# hotbitIt
bott hootbit

# in console log browser

1) insert in console log code function hotbitPumpIt

```
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
```


2) run order in console log
```
	let intialData = {
	price:600,
	quantity:0.0511,
	coin:"BNB",
	side:'BUY',
	};

hotbitPumpIt(intialData).then(data => {
console.log("#Respons 100%..");
    console.info(data); 
  });
  
```
[![](https://raw.githubusercontent.com/Sloughi-io/hotbitIt/main/image.png)]

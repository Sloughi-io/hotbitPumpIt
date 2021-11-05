async function XTPumpSell(price, getToken, amount) {

    const url = "https://www.xt.com/xt-entrust/market/eth_usdt/order"
    const body = {
        "action": "limit",
        "system": "spot",
        "type": "sell",
        "price": price,
		"amount": amount
    }
    const headers = {
        'Content-Type': 'application/json',
        'user-agent' :'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'device': 'web',
        'token': getToken
    }
    
    console.log(headers)
	price = document.title.split('-')[0]
    const response = await fetch(url, {
    	method: 'POST', //
    	credentials: 'same-origin',
   		headers,
        body
    })
    return response.json()
}

async function XTTradeHistory(getToken) {

    const url = "https://www.xt.com/xt-entrust/market/cbc_usdt/order/_history?system=spot"
   
    const headers = {
        'Content-Type': 'application/json',
        'user-agent' :'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'device': 'web',
        'token': getToken
    }
    
    console.log(headers)
	price = document.title.split('-')[0]
    const response = await fetch(url, {
    	method: 'GET', //
    	credentials: 'same-origin',
   		headers
    })
    return response.json()
}

async function XTPumpIt(getToken) {

    const url = "https://www.xt.com/xt-entrust/market/cbc_usdt/order"
    const body = {
        'action': 'market',
        'system': 'spot',
        'type': 'buy',
        'value': '1'
    }
    const headers = {
        'Content-Type': 'application/json',
        'user-agent' :'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'device': 'web',
        'token': getToken
    }
    
    console.log(body)
    const response = await fetch(url, {
    	method: 'POST', //
    	credentials: 'same-origin',
   		headers: headers,
        body: JSON.stringify(body)
    })
    return response.json()
}
        
var startTime = performance.now()

var outpot = {}
var responseCode = 0
const getToken = localStorage.getItem("token").split('"')[1]
console.log(getToken)

var responseCode = XTPumpIt(getToken).then(data => {
	console.log("#Response buy 100%..");
	console.info(data);
	return data.code
})

if(responseCode == 200){
	outpot = XTTradeHistory(getToken).then(data => {
		console.log("#Response history 100%..");
		return data.item[0]
	})
}
console.log(outpot)

/*
const sellprice = amount * 2 
XTPumpSell(getToken, price, sellprice).then(data => {
	console.log("#Response sell 200%..");
	console.info(data);
})
*/
var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)


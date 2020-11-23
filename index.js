window.WebSocket = window.WebSocket || window.MozWebSocket;

const socket = new WebSocket('wss://ws.finnhub.io?token=buscd4n48v6r79u6sl80');

socket.onopen = function(event){
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
}

socket.onmessage = function(event){
    var result = event;
    var data = JSON.parse(result.data);
    
    document.getElementById("symbol").innerHTML = data.data[0].s;
    document.getElementById("lastPrice").innerHTML = data.data[0].p;
    document.getElementById("unix").innerHTML = data.data[0].t;
    document.getElementById("volume").innerHTML = data.data[0].v;
}

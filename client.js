const net = require('net');
const {IP, PORT} = require('./constants')

/**
 * Establishes connection with the game server
*/
const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //interpret incoming data as text
  conn.setEncoding('utf8')

  conn.on('connect',function(){
    console.log("Successfully connected to game server");
    conn.write("Name: EZ");
/*
    setTimeout(()=>{
      conn.write("Move: up");
    }, 50);
    setTimeout(()=>{
      conn.write("Move: up");
    }, 100);
    setTimeout(()=>{
      conn.write("Move: up");
    }, 150);
    setTimeout(()=>{
      conn.write("Move: up");
    }, 200);
    setTimeout(()=>{
      conn.write("Move: up");
    }, 250);
*/

/*
    setInterval(()=>{
      conn.write("Move: up");
    }, 50);
*/
  });
  return conn;
}


module.exports = {
  connect
}
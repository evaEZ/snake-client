const net = require('net');

/**
 * Establishes connection with the game server
*/
const connect = function(){
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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
}

const setupInput = function(){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput(data));
  return stdin;
}

const handleUserInput = function(key) {
  if(key && key.name === "c" && key.ctrl) {
    process.exit();
  }
}

module.exports = {
  connect
}
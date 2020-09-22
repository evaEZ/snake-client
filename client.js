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
  conn.setEncoding('utf8');

  const setupInput = function(){
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    return stdin;
  }

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

  const handleUserInput = function() {
    setupInput('data',() => {
      
    });
  }

}

module.exports = {
  connect
}
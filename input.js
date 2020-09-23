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
  setupInput
};

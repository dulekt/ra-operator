// function that prints to Zebra printer using ZPL and IP address

function printToZebra(ipAddress, port, zpl) {
  const net = require("net");
  const client = new net.Socket();
  client.connect(port, ipAddress, () => {
    client.write(zpl);
    client.destroy();
    console.log("Printed to Zebra");
  });
}

const ipAddress = "10.76.13.191";
const port = 9100;
const zpl =
  "^XA^CF0,60^FO220,50^FD Javascript 2^FS^CF0,50^FO220,115^FD Test ^FS^XZ";
printToZebra(ipAddress, port, zpl);

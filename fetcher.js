const request = require('request');
const fs = require('fs');

const argV = process.argv.slice(2);
const domain = argV[0];
const filePath = argV[1];

request(domain, (error, response, body) => {
  if (error) {
    throw error;
  }
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      throw error;
    }
    console.log(`Downloaded ${body.length} bytes to ${filePath}`);
  });
});
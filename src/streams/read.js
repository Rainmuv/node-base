import * as fs from 'node:fs';


const read = async () => {
  const files = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8');

  files.on('data', (itm) => {
    process.stdout.write(itm)
  })
  files.on('end', (itm) => {
    console.log('File read')
  })
 
};

await read();
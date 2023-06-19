import * as fs from 'node:fs';


const write = async () => {
  const files = fs.createWriteStream('src/streams/files/fileToWrite.txt')

  files.write('I love Serguy')
  files.end()
  process.stdin.pipe(files)
  files.on('finish', () => {
    console.log('finish!!!')
  })
  files.on('error', ()=> {
    throw new Error('Error')
  })
};

await write();
import * as fs from 'node:fs';

const rename = async() => {
  const wrongFilename = 'src/fs/files/wrongFilename.txt';
  const properFilename = 'src/fs/files/properFilename.md';

  fs.access(properFilename, err => {
    if(!err) throw new Error (`File note found`)
  })
  fs.access(wrongFilename, err => {
    if(err) {
      throw new Error (`File already rename`)
    } else {
      fs.renameSync(`${wrongFilename}`, `${properFilename}`)
    }
  })
  
}

await rename()
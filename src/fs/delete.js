import * as fs from 'node:fs';


const delet = async() => {
  fs.access('src/fs/files/fileToRemove.txt', err => {
    if(err) {
      throw new Error (`File not found`)
    } else {
      fs.unlinkSync('src/fs/files/fileToRemove.txt');
      console.log("File deleted")
    }
  })
}

await delet()
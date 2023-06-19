import * as fs from 'node:fs';

const read = async() => {
  fs.access('src/fs/files/fileToRead.txt', err => {
    if (err) {
      throw new Error ('File not found')
    } else {
        console.log(fs.readFileSync('src/fs/files/fileToRead.txt', "utf-8"))
    }
  })
}

await read()
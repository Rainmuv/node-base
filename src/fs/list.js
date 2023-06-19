import * as fs from "node:fs";

const list = async() => {
  fs.access('src/fs/files', err => {
    if(err) {
      throw new Error ("Folder undefined")
    } else {
      fs.readdir('src/fs/files', (err, item) => {
        item.forEach(elem => {
          console.log(elem)
        });
      })
    }
  })
}

await list()
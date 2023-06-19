import * as fs from 'node:fs';


const copy = async () => {

  fs.access('src/fs/files', err => {
    if (err) {
      throw new Error ('file not found')
    } else {
      fs.access('src/fs/files_copy', err => {
        if (err) {
          fs.mkdirSync('src/fs/files_copy')
          fs.readdir('src/fs/files', (err, item) => {
            item.forEach(elem => {
              fs.copyFileSync(`src/fs/files/${elem}`, `src/fs/files_copy/${elem}`)
            })});
        } else {
          throw new Error ('file exitis')
        }
      })
    }
  })
}

await copy()
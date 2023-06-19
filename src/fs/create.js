import * as fs from 'node:fs';

const create = async() => {
  
  fs.access("src/fs/files/fresh.txt", function(err) {
    if (err) {
      fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
        if(err) throw err;
    
        console.log('File created');
      })
    } else {
        console.log("Файл найден");
    }
});

  


}

await create()
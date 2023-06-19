import {Transform} from 'stream'

const transform = async () => {
  const tranf = new Transform({
    transform(chunck, encod, callback) {
      const revTranf = chunck.toString().split('').reverse().join('')
      callback()
      this.push(revTranf)
    }
  });
  process.stdin.pipe(tranf).pipe(process.stdout)
};

await transform();
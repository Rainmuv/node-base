import * as fs from 'node:fs'
import * as crypto from 'crypto'

const calculateHash = async () => {
  const FileHax = fs.readFileSync('src/hash/files/fileToCalculateHashFor.txt');
  const hexcry = crypto.createHash('sha256').update(FileHax).digest('hex')
  console.log(`Hax its file \"${FileHax}\": hax:${hexcry}`)
};

await calculateHash();
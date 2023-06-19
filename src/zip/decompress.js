import * as zlib from 'node:zlib'
import * as fs from 'node:fs'

const decompress = async (fileTxt, fileGzip) => {
  const ArchivGzip = zlib.createUnzip();
  const readFile = fs.createReadStream(fileTxt);
  const writeGzip = fs.createWriteStream(fileGzip);
  readFile.pipe(ArchivGzip).pipe(writeGzip);
  readFile.on('error', () => {
    throw new Error ('file not found')
  })
};

await decompress('src/zip/files/archive.txt.gz', 'src/zip/files/fileToCompress.txt' );
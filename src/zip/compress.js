import * as zlib from 'node:zlib'
import * as fs from 'node:fs'

const compress = async (fileTxt, fileGzip) => {
    const ArchivGzip = zlib.createGzip();
    const readFile = fs.createReadStream(fileTxt);
    const writeGzip = fs.createWriteStream(fileGzip);
    readFile.pipe(ArchivGzip).pipe(writeGzip);
    readFile.on('error', () => {
      throw new Error ('file not found')
    })
};

await compress('src/zip/files/fileToCompress.txt', 'src/zip/files/archive.txt.gz');
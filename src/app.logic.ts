import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b:base, l:limit, s:showTable } = yarg;

const headerContent = `
=================================
    Tabla del ${ base }
=================================
`;
let content: string = headerContent;

for(let i = 1; i <= limit; i++) {
    content += `\n ${ base } x ${ i } = ${ base * i }`;
}


showTable && console.log(content);

const outputPath = `outputs`;

fs.mkdirSync( outputPath, { recursive: true }); // recursive: true - para que se pueda crear cualquier árbol de directorios
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, content);
console.log('File created!');


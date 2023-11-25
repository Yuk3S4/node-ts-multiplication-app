import fs from 'fs';

export interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileDestination: string;
    fileContent: string;
    fileName: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(
        /** repository: StorageRepository */    
    ) {}

    execute({ 
        fileContent, 
        fileDestination, 
        fileName
    }: Options): boolean {

        try {
            fs.mkdirSync( fileDestination, { recursive: true }); // recursive: true - para que se pueda crear cualquier árbol de directorios    
            fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent);        

            return true;
        } catch ( err ) {
            console.error( err );
            return false;
        }
    }

}

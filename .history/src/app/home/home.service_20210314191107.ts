import { Injectable } from '@angular/core';

export interface ExtendedFile extends File{
    fileSize: string;
    fileExtension: string;
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    processFiles(files: ExtendedFile){
        const data = this.readJSON(files[0]);
        console.log(data);
    }

    readJSON(file: ExtendedFile): Promise<any>{

        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = () => {
                resolve(JSON.parse(fileReader.result.toString()))
            }
            fileReader.onerror = (error) => {
                reject(error);
            }

        })
        
    }

}
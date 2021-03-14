import { Injectable } from '@angular/core';

export interface ExtendedFile extends File{
    fileSize: string;
    fileExtension: string;
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    async processFiles(files: ExtendedFile[]){
        console.log("xx")
        const data = await this.readJSON(files[0]);
        console.log(data);
    }

    readJSON(file: ExtendedFile): Promise<any>{

        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = () => {
                console.log(fileReader.result)
                resolve(JSON.parse(fileReader.result.toString()))
            }
            fileReader.onerror = (error) => {
                reject(error);
            }

        })
        
    }

}
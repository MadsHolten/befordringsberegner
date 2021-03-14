import { Injectable } from '@angular/core';

export interface ExtendedFile extends File{
    fileSize: string;
    fileExtension: string;
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    async processFiles(files: ExtendedFile[], matchString: string){
        let dataP = [];
        files.forEach(file => {
            dataP.push(this.readJSON(file));
        })
        
        const data = await Promise.all(dataP);

        let obj = {};
        let counter = 0;
        data.forEach((d, i) => {
            const month = files[i].name.split("_")[1].split('.json')[0];
            const dates = this.extractVisitDates(d, matchString);
            obj[month] = dates;
            counter+= dates.length;
        });
        obj["TOTAL"] = counter;

        console.log(obj)

        return obj;

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

    extractVisitDates(data: any, matchString: string){

        const visits = data.timelineObjects
            .filter(item => item.placeVisit)
            .filter(item => item.placeVisit.location)
            .filter(item => item.placeVisit.location.name)
            .filter(item => item.placeVisit.location.name.toLowerCase().includes("niras"));
    

        const dates = visits.map(item => {
            const duration = item.placeVisit.duration;
            let date: any = new Date(parseInt(duration.startTimestampMs));
            date = date.toDateString();
            return date;
        });

        const uniqDates = [...new Set(dates)];
        
        return uniqDates;

    }

}
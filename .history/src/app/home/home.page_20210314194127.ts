import { Component } from '@angular/core';
import { ExtendedFile, HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ HomeService ]
})
export class HomePage {

  public searchString: string = "niras";
  public files: ExtendedFile[] = [];
  public rejectedFiles: ExtendedFile[] = [];
  public acceptedTypes = ["json"];

  public fileEvaluation: string;
  public result: any;

  public months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  public year;
  public showDetails; // Month to display details for

  constructor(
    private _s: HomeService
  ) {}

  async onSelect(ev){
    const added = ev.addedFiles
          .map(f => this.addMetadata(f))
          .filter(f => this.filterByType(f));

    this.files = this.files.concat(added);
    
    this.evaluateFiles(this.files);

  }

  public async processFiles(){
    try{
      this.result = await this._s.processFiles(this.files, this.searchString);
    }catch(err){
      console.log(err);
      this.fileEvaluation = "Noget gik galt ved læsing af filerne";
    }
  }

  public setShowDetails(month: string){
    console.log(month)
    this.showDetails = month;
  }

  public getShowDetails(month: string): boolean{
    return this.showDetails == month ? true : false;
  }

  private evaluateFiles(files: ExtendedFile[]){
    
    if(files.length > 12){
      this.fileEvaluation = "Det er kun muligt at evaluere ét år og du har uploadet over 12 filer";
      return false;
    }

    let seenMonths = [];
    files.forEach(f => {
      this.year = f.name.split("_")[0];
      const month = f.name.split("_")[1].split('.json')[0];

      if(this.months.indexOf(month) == -1){
        this.fileEvaluation = "Ukendt filnavn. Filer bør være navngivet ÅR_MÅNED.json (fx 2020_APRIL.json)";
        return false;
      }

      if(seenMonths.indexOf(month) != -1){
        this.fileEvaluation = "Fandt mere end én fil for måneden " + month;
        return false;
      }

      seenMonths.push(month);

    });
  }

  private addMetadata(file: ExtendedFile){
    file.fileExtension = file.name.match(/\.[0-9a-z]+$/i)[0].split('.')[1].toLowerCase();
    file.fileSize = this.humanFileSize(file.size)
    return file;
  }

  private filterByType(file: ExtendedFile){
    if(this.acceptedTypes.length){
      const accept = this.acceptedTypes.indexOf(file.fileExtension) != -1;
      if(!accept) this.rejectedFiles.push(file);
      return accept;
    }
    return true;
  }

  private humanFileSize(size: number) {
    let i: number = size == 0 ? 0 : Math.floor( Math.log(size) / Math.log(1024) );
    const s: any = size / Math.pow(1024, i);
    return s.toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
  }

}

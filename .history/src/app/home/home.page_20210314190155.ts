import { Component } from '@angular/core';

export interface ExtendedFile extends File{
  fileSize: string;
  fileExtension: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public searchString: string = "niras";
  public files: ExtendedFile[] = [];
  public rejectedFiles: ExtendedFile[] = [];
  public acceptedTypes = ["json"];

  public fileEvaluation: string;

  public months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  constructor() {}

  onSelect(ev){
    const added = ev.addedFiles
          .map(f => this.addMetadata(f))
          .filter(f => this.filterByType(f));
    
    this.evaluateFiles(added);
    
    this.files.push(...added);

  }

  private evaluateFiles(files: ExtendedFile[]){
    
    if(files.length > 12){
      this.fileEvaluation = "Det er kun muligt at evaluere ét år og du har uploadet over 12 filer";
      return false;
    }

    let seenMonths = [];
    let year;
    files.forEach(f => {
      const year = f.name;
      console.log(year);
      // this.months.
    })
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

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
  public files;
  public rejectedFiles;
  public acceptedTypes = ["json"];

  constructor() {}

  onSelect(ev){
    const added = ev.addedFiles
          .map(f => this.addMetadata(f))
          .filter(f => this.filterByType(f));
    
    this.files.push(...added);

    // this.onChange.emit(this.files);

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

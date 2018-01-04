import { Component, ViewChild, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
import {UploadfileService} from '../../../../service/uploadfile.service';
import { Response } from '@angular/http';
import {Subscription} from 'rxjs/Subscription';
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.css']
})
export class FilemanagerComponent implements OnDestroy {
  displayedColumns = ['filename', 'fullPath'];
  fileData: MatTableDataSource<FileData>;
  sourceFileList: FileData[];
  reloadFiles: Subscription;
  selected = 'newsphoto';
  path = [
    {value: 'newsphoto', viewValue: 'Фото новостей'},
    {value: 'blogphoto', viewValue: 'Фото блога'},
    {value: 'productphoto', viewValue: 'Фото товара'}
  ];
  error = 'd-none';
  // fileArray: any;
  // fileToUpload: File = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public upFile: UploadfileService, public paginatorInit: MatPaginatorIntl) {
    // paginator settings
    this.paginatorInit.itemsPerPageLabel = 'Элементов на странице:';
    this.paginatorInit.previousPageLabel = 'Предыдущая страница';
    this.paginatorInit.nextPageLabel = 'Слудущая страница';

    // load file list and insert list to table paginator
    this.reloadFiles = this.upFile.getFileList('http://rosmop.ru/getimagefiles.php', this.selected).subscribe((arr: FileData[]) => {
      this.sourceFileList = arr;
      this.fileData = new MatTableDataSource(this.sourceFileList);
      this.fileData.paginator = this.paginator;
      this.fileData.sort = this.sort;
    }, () => {
      this.error = 'show';
      console.clear();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.fileData.filter = filterValue;
  }

  updateFileData() {
    this.reloadFiles.unsubscribe();
    this.upFile.getFileList('http://rosmop.ru/getimagefiles.php', this.selected).subscribe((arr: FileData[]) => {
      this.sourceFileList = arr;
      this.fileData = new MatTableDataSource(this.sourceFileList);
      this.fileData.paginator = this.paginator;
      this.fileData.sort = this.sort;
    }, () => {
      this.error = 'show';
      console.clear();
    });
  }
  closeError() {
    this.error = 'd-none';
  }
  // handleFileInput(files: FileList) {
  //   this.uploadFileToActivity(files.item(0));
  //   // for (let i = 0; i < files.length; i++) {
  //   //   this.uploadFileToActivity(files.item(i));
  //   // }
  //   // this.fileToUpload = files.item(0);
  // }
  // uploadFileToActivity(file) {
  //   this.upFile.postFile(file, this.selected).subscribe(data => {
  //     // console.log(this.fileToUpload + ' загружен');
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  // displayFiles(files) {
  //   this.fileArray = files;
  // }
  ngOnDestroy() {
    this.reloadFiles.unsubscribe();
  }
}

export interface FileData {
  filename: string;
  fullPath: string;
}

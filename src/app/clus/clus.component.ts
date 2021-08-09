import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clus',
  templateUrl: './clus.component.html',
  styleUrls: ['./clus.component.scss']
})

export class ClusComponent implements OnInit {

  public iteration: number = 0;

  data  = [
    [7, 8, 4, 5, 2],
    [6, 8, 5, 4, 2],
    [8, 9, 7, 8, 9],
    [6, 7, 7, 7, 8],
    [1, 2, 5, 3, 4],
    [3, 4, 5, 3, 5],
    [7, 8, 8, 6, 6],
    [8, 9, 6, 5, 5],
    [2, 3, 5, 6, 5],
    [1, 2, 4, 4, 2],
    [3, 2, 6, 5, 7],
    [2, 5, 6, 8, 9],
    [3, 5, 4, 6, 3],
    [3, 5, 5, 6, 3]]
  Centros1  = [
    [6, 7, 7, 7, 8],
    [3, 2, 6, 5, 7],
    [3, 5, 4, 6, 3]]
  constructor() { }
  DatosFinal    : any[]  = [];
  CentrosFinal  : any[]  = []
  data22        : any[]  = [];
  centros22     : any[]  = [];
  counter       = 1;
  nIteraciones  = 1;
  ngOnInit() {
    this.PrimeraIteracionConCentrosPreDefinidos();
  }
  PrimeraIteracionConCentrosPreDefinidos() {
    var data2 = [];
    var linea = [];
    var lineacentros=[];
    var centros2=[];
    for (let a = 0; a < 14; a++) {
      for (let i = 0; i < 3; i++) {
        var x =
          Math.abs(this.data[a][0] - this.Centros1[i][0]) +
          Math.abs(this.data[a][1] - this.Centros1[i][1]) +
          Math.abs(this.data[a][2] - this.Centros1[i][2]) +
          Math.abs(this.data[a][3] - this.Centros1[i][3]) +
          Math.abs(this.data[a][4] - this.Centros1[i][4])
        linea.push(x);
      }
      data2.push(linea);
      linea = [];
    }
    for (let a = 0; a < 14; a++) {
      var x = Math.min(data2[a][0], data2[a][1], data2[a][2]);
      data2[a].push(x);
    }
    var max = Math.max(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
    var min = Math.min(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
    var avr = (data2[0][3] + data2[1][3] + data2[2][3] + data2[3][3] + data2[4][3] + data2[5][3] + data2[6][3] + data2[7][3] + data2[8][3] + data2[9][3] + data2[10][3] + data2[11][3] + data2[12][3] + data2[13][3]) / 14;
    var clus = 0;
    for (let a = 0; a < 14; a++) {
      if ((Math.abs(data2[a][3] - max) < Math.abs(data2[a][3] - min))) {
        if ((Math.abs(data2[a][3] - max) < Math.abs(data2[a][3] - avr))) {
          clus = 1;
        }
      }
      if ((Math.abs(data2[a][3] - min) < Math.abs(data2[a][3] - max))) {
        if ((Math.abs(data2[a][3] - min) < Math.abs(data2[a][3] - avr))) {
          clus = 3;
        }
      }
      if ((Math.abs(data2[a][3] - avr) < Math.abs(data2[a][3] - min))) {
        if ((Math.abs(data2[a][3] - avr) < Math.abs(data2[a][3] - max))) {
          clus = 2;
        }
      }
      data2[a].push(clus);
    }
    this.data22 = data2;
    this.DatosFinal.push(data2);
    var y=0;
    var co = 0;
    for (let c = 0; c < 3; c++) {
    for (let b = 0; b < 5; b++) {
      for (let a = 0; a < 14; a++) {       
        if (data2[a][4] == c+1 ) {
          y += this.data[a][b];
          co++;
        }        
      }
      y=y/co;      
      lineacentros.push(y);
      y=0;
      co=0;      
    }    
    centros2.push(lineacentros);
    lineacentros=[];

  }
    
    this.centros22=centros2;
    this.CentrosFinal.push(centros2);
  }
  HacerLasIteraciones(nIteraciones:number){
    this.DatosFinal   = [];
    this.CentrosFinal = []
    this.data22       = [];
    this.centros22    = [];
    this.counter      = 1;
    nIteraciones=nIteraciones-1;
    this.PrimeraIteracionConCentrosPreDefinidos();
    for(let n = 0; n < nIteraciones; n++){
      this.SiguientesIteraciones();
    }
  }
  SiguientesIteraciones(){    
      this.counter++;
      var data2 = [];
      var linea = [];
      var lineacentros=[];
      var centros2=[];
      for (let a = 0; a < 14; a++) {
        for (let i = 0; i < 3; i++) {
          var x =
            Math.abs(this.data[a][0] - this.centros22[i][0]) +
            Math.abs(this.data[a][1] - this.centros22[i][1]) +
            Math.abs(this.data[a][2] - this.centros22[i][2]) +
            Math.abs(this.data[a][3] - this.centros22[i][3]) +
            Math.abs(this.data[a][4] - this.centros22[i][4])
          linea.push(x);
        }
        data2.push(linea);
        linea = [];
      }
      for (let a = 0; a < 14; a++) {
        var x = Math.min(data2[a][0], data2[a][1], data2[a][2]);
        data2[a].push(x);
      }
      var max = Math.max(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
      var min = Math.min(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
      var avr = (data2[0][3] + data2[1][3] + data2[2][3] + data2[3][3] + data2[4][3] + data2[5][3] + data2[6][3] + data2[7][3] + data2[8][3] + data2[9][3] + data2[10][3] + data2[11][3] + data2[12][3] + data2[13][3]) / 14;
      var clus = 0;
      for (let a = 0; a < 14; a++) {
        if ((Math.abs(data2[a][3] - min) < Math.abs(data2[a][3] - max))) {
          if ((Math.abs(data2[a][3] - min) < Math.abs(data2[a][3] - avr))) {
            clus = 3;
          }
        }
        if ((Math.abs(data2[a][3] - max) < Math.abs(data2[a][3] - min))) {
          if ((Math.abs(data2[a][3] - max) < Math.abs(data2[a][3] - avr))) {
            clus = 2;
          }
        }        
        if ((Math.abs(data2[a][3] - avr) < Math.abs(data2[a][3] - min))) {
          if ((Math.abs(data2[a][3] - avr) < Math.abs(data2[a][3] - max))) {
            clus = 1;
          }
        }
        data2[a].push(clus);
  
      }
      this.data22 = data2;
      this.DatosFinal.push(data2);
      var y=0;
      var co = 0;
      for (let c = 0; c < 3; c++) {
      for (let b = 0; b < 5; b++) {
        for (let a = 0; a < 14; a++) {       
          if (data2[a][4] == c+1 ) {
            y += this.data[a][b];
            co++;
          }        
        }
        y=y/co;      
        lineacentros.push(y);
        y=0;
        co=0;      
      }    
      centros2.push(lineacentros);
      lineacentros=[];
  
    }
      
      this.centros22=centros2;
      this.CentrosFinal.push(centros2);
    
    
    }
    

  

}
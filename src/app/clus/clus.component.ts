import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-clus',
  templateUrl: './clus.component.html',
  styleUrls: ['./clus.component.scss']
})

export class ClusComponent {
 
  public scatterChartOptions: ChartOptions = {
    responsive: true,
    
  };
  
  public scatterChartData: ChartDataSets[] = [{
    label: 'Scatter Dataset',
    data: [{
      x: 0,
      y: 0
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }];
  public scatterChartType: ChartType = 'scatter';
  public iteration: number = 0;
  bubbleData: any[]=[];

  data:any[] = [
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
  constructor() {
   }

  DatosFinal    : any[]  = [];
  GruposFinal    : any[]  = [];
  CentrosFinal  : any[]  = [];
  data22        : any[]  = [];
  centros22     : any[]  = [];
  counter       = 1;
  nIteraciones  = 0;
  nClusters = 3;
  centroNCluster:any[]=[];
  lineaNCluster:any[]=[];
  centroinit:any=[];
  ncentro:any=99;
  centro:any=99;
  midnumbers:any[]=[];
  nClusterF=0;
  PrimeraIteracionConCentrosPreDefinidos() {
    var data2 : any[]  = [];
    var grupos : any[]  = [];  
    var lg="";
    var g="";
    this.nClusterF=3;
    var lineagrupos : any[]  = [];
    var linea: any[]  = [];
    var lineacentros: any[]  = [];
    var centros2: any[]  = [];
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

    for (let c = 0; c < 3; c++) {
        for (let a = 0; a < 14; a++) {       
          if (data2[a][4] == c+1 ) {
            lineagrupos.push(a+1);
            lg= lg.concat((a+1).toString()+" ");
          }               
        }
        grupos.push(lg); 
        lg=""; 
          lineagrupos=[];   
    }
    this.GruposFinal.push(grupos);
   console.log(this.GruposFinal);
  }
  CentrosRandom(nCluster:number){
     this.centroNCluster=[];
     this.centroinit=[];
     this.centro=99;
     this.ncentro=99;
    for(let nc=0;nc<nCluster;nc++){
      this.ncentro=Math.floor(Math.random() * 14);
      if(nc!=0){
        for(let xs=0; xs<=this.centroNCluster.length;xs++){
          if(this.ncentro==this.centroinit[xs]){
            this.ncentro=Math.floor(Math.random() * 14);
            xs=-1;
          }      
        }
      }    
        this.centroinit.push(this.ncentro);
        for(let i=0;i<5;i++){
          this.lineaNCluster.push(this.data[this.ncentro][i]);
        }
        this.centroNCluster.push(this.lineaNCluster);
        this.lineaNCluster=[];
      
    }    
  }
  PrimeraIteracionNPD(nCluster:number) {
    var data2 : any[]  = [];
    var grupos : any[]  = [];  
    var lg="";
    var g="";
    var lineagrupos : any[]  = [];
    var linea: any[]  = [];
    var lineacentros: any[]  = [];
    var centros2: any[]  = [];
    this.nClusterF=nCluster;
    if(nCluster==2 || nCluster==3){
      this.CentrosRandom(nCluster);
    }else{
      console.log("numero de Clusters incorrecto");
    }    
    for (let a = 0; a < 14; a++) {
      for (let i = 0; i < nCluster; i++) {        
        var x =
          Math.abs(this.data[a][0] - this.centroNCluster[i][0]) +
          Math.abs(this.data[a][1] - this.centroNCluster[i][1]) +
          Math.abs(this.data[a][2] - this.centroNCluster[i][2]) +
          Math.abs(this.data[a][3] - this.centroNCluster[i][3]) +
          Math.abs(this.data[a][4] - this.centroNCluster[i][4])
        linea.push(x);
      }
      data2.push(linea);
      linea = [];
    }
    for (let a = 0; a < 14; a++) {
      if(nCluster==3){
        var x = Math.min(data2[a][0], data2[a][1], data2[a][2]);

      }else{
        var x = Math.min(data2[a][0], data2[a][1]);
      }
      data2[a].push(x);
    }
    if(nCluster==3){
      var max = Math.max(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
      var min = Math.min(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
 
    }else{
      var max = Math.max(data2[0][2], data2[1][2], data2[2][2], data2[2][2], data2[4][2], data2[5][2], data2[6][2], data2[7][2], data2[8][2], data2[9][2], data2[10][2], data2[11][2], data2[12][2], data2[13][2]);
      var min = Math.min(data2[0][2], data2[1][2], data2[2][2], data2[2][2], data2[4][2], data2[5][2], data2[6][2], data2[7][2], data2[8][2], data2[9][2], data2[10][2], data2[11][2], data2[12][2], data2[13][2]);
 
    }
      var avr = (data2[0][3] + data2[1][3] + data2[2][3] + data2[3][3] + data2[4][3] + data2[5][3] + data2[6][3] + data2[7][3] + data2[8][3] + data2[9][3] + data2[10][3] + data2[11][3] + data2[12][3] + data2[13][3]) / 14;
    var clus = 0; 
    for (let a = 0; a < 14; a++) {
      var xdata=data2[a][2];
      if(nCluster==3){
        xdata=data2[a][3];
      }      
        if((Math.abs(xdata-max)< Math.abs(xdata - min))){
          if(nCluster==3 && ((Math.abs(xdata - max) < Math.abs(xdata - avr)))){
            clus = 1;
          }else if(nCluster==2){
            clus = 1;
          }
        }
        if((Math.abs(xdata-min)< Math.abs(xdata - max))){
          if(nCluster==3 && ((Math.abs(xdata - min) < Math.abs(xdata - avr)))){
            clus = 2;
          }else if(nCluster==2){
            clus = 2;
          }
        }
        if(nCluster==3 && (Math.abs(xdata-avr)< Math.abs(xdata - min))){
          if(((Math.abs(xdata - avr) < Math.abs(xdata - max)))){
            clus = 3;
          }
        }
        if(nCluster==2){
          data2[a].push(clus);
        }else{
          data2[a].push(clus);
        }
     }
    this.data22 = data2;
    this.DatosFinal.push(data2);
    var y=0;
    var co = 0;
    for (let c = 0; c < nCluster; c++) {
    for (let b = 0; b < 5; b++) {
      for (let a = 0; a < 14; a++) {       
        if (data2[a][nCluster+1] == c+1 ) {
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
    console.log("------ centros22")
  console.log(this.centros22);

    for (let c = 0; c < nCluster; c++) {
        for (let a = 0; a < 14; a++) {       
          if (data2[a][nCluster+1] == c+1 ) {
            lineagrupos.push(a+1);
            lg= lg.concat((a+1).toString()+" ");
          }               
        }
        grupos.push(lg); 
        lg=""; 
          lineagrupos=[];   
    }
    this.GruposFinal.push(grupos);
  }
  NPDHacerLasIteraciones(nIteraciones:number, nCluster:number){
    this.DatosFinal   = [];
    this.CentrosFinal = [];
    this.GruposFinal=[];
    this.data22       = [];
    this.centros22    = [];
    this.counter      = 1;
    nIteraciones=nIteraciones-1;
    if(nCluster==2 ||nCluster==3){
    this.PrimeraIteracionNPD(nCluster);
    for(let n = 0; n < nIteraciones; n++){
      this.SiguientesIteracionesNPD(nCluster);      
    }
    this.GraphMaybe(nIteraciones, nCluster);
  }
  }
  GraphMaybe(nIteraciones:number, nCluster:number){
    console.log("this.DatosFinal[0][0]")
    var color='';
    console.log(this.DatosFinal[0][0])
    this.scatterChartData=[]
    var datal:any[]=[];
    for(let a=0;a<nCluster;a++){
      if(a==0){
        color ='rgb(255, 99, 132)'
      }else if(a==1){
        color ='rgb(1, 99, 132)'
      }else if(a==2){
        color ='rgb(255, 1, 132)'
      }    
      console.log("C F");
      console.log(this.CentrosFinal[nIteraciones][0][0]);
      console.log(this.CentrosFinal[nIteraciones][1][0]);
      for(let b=0;b<14;b++){
        if(nCluster==2){
          if(this.DatosFinal[nIteraciones][b][3]==a+1){
            for(let c=0;c<5;c++){
              datal.push({x:this.data[b][c],y:this.CentrosFinal[nIteraciones][a][c]});
            }
          }
        }
        else{          
          if(this.DatosFinal[nIteraciones][b][4]==a+1){
            for(let c=0;c<5;c++){
              datal.push({x:this.data[b][c],y:this.CentrosFinal[nIteraciones][a][c]})
            }
          }
        }
        
      }
      
      this.scatterChartData.push({
        label: (a+1).toString(),
        data: datal,
        backgroundColor: color,
        pointRadius: 10,
      })
      
      datal=[];
    }
    
    // this.scatterChartData=[    
    //   {
    //     label: '1',
    //   data: [
    //     {x: this.DatosFinal[0][0][3],  y: (this.DatosFinal[0][0][0]+this.DatosFinal[0][0][1]+this.DatosFinal[0][0][2])/3 }, 
    //     {x: this.DatosFinal[0][1][3],  y: (this.DatosFinal[0][1][0]+this.DatosFinal[0][1][1]+this.DatosFinal[0][1][2])/3 }, 
    //     {x: this.DatosFinal[0][2][3],  y: (this.DatosFinal[0][2][0]+this.DatosFinal[0][2][1]+this.DatosFinal[0][2][2])/3 }, 
    //     {x: this.DatosFinal[0][3][3],  y: (this.DatosFinal[0][3][0]+this.DatosFinal[0][3][1]+this.DatosFinal[0][3][2])/3 }, 
    //     {x: this.DatosFinal[0][4][3],  y: (this.DatosFinal[0][4][0]+this.DatosFinal[0][4][1]+this.DatosFinal[0][4][2])/3 }, 
    //     {x: this.DatosFinal[0][5][3],  y: (this.DatosFinal[0][5][0]+this.DatosFinal[0][5][1]+this.DatosFinal[0][5][2])/3 }, 
    //     {x: this.DatosFinal[0][6][3],  y: (this.DatosFinal[0][6][0]+this.DatosFinal[0][6][1]+this.DatosFinal[0][6][2])/3 }, 
    //     {x: this.DatosFinal[0][7][3],  y: (this.DatosFinal[0][7][0]+this.DatosFinal[0][7][1]+this.DatosFinal[0][7][2])/3 },
    //     {x: this.DatosFinal[0][8][3],  y: (this.DatosFinal[0][8][0]+this.DatosFinal[0][8][1]+this.DatosFinal[0][8][2])/3 }, 
    //     {x: this.DatosFinal[0][9][3],  y: (this.DatosFinal[0][9][0]+this.DatosFinal[0][9][1]+this.DatosFinal[0][9][2])/3 }, 
    //     {x: this.DatosFinal[0][10][3],  y: (this.DatosFinal[0][10][0]+this.DatosFinal[0][10][1]+this.DatosFinal[0][10][2])/3 }, 
    //     {x: this.DatosFinal[0][11][3],  y: (this.DatosFinal[0][11][0]+this.DatosFinal[0][11][1]+this.DatosFinal[0][11][2])/3 },
    //     {x: this.DatosFinal[0][12][3],  y: (this.DatosFinal[0][12][0]+this.DatosFinal[0][12][1]+this.DatosFinal[0][12][2])/3 }, 
    //     {x: this.DatosFinal[0][13][3],  y: (this.DatosFinal[0][13][0]+this.DatosFinal[0][13][1]+this.DatosFinal[0][13][2])/3 }
    //     // {x: this.DatosFinal[0][0][3],  y: this.DatosFinal[0][0][4] }, 
    //     // {x: this.DatosFinal[0][1][3],  y: (this.DatosFinal[0][1][4]) }, 
    //     // {x: this.DatosFinal[0][2][3],  y: (this.DatosFinal[0][2][4]) }, 
    //     // {x: this.DatosFinal[0][3][3],  y: (this.DatosFinal[0][3][4]) }, 
    //     // {x: this.DatosFinal[0][4][3],  y: (this.DatosFinal[0][4][4]) }, 
    //     // {x: this.DatosFinal[0][5][3],  y: (this.DatosFinal[0][5][4]) }, 
    //     // {x: this.DatosFinal[0][6][3],  y: (this.DatosFinal[0][6][4]) }, 
    //     // {x: this.DatosFinal[0][7][3],  y: (this.DatosFinal[0][7][4]) },
    //     // {x: this.DatosFinal[0][8][3],  y: (this.DatosFinal[0][8][4]) }, 
    //     // {x: this.DatosFinal[0][9][3],  y: (this.DatosFinal[0][9][4]) }, 
    //     // {x: this.DatosFinal[0][10][3],  y: (this.DatosFinal[0][10][4]) }, 
    //     // {x: this.DatosFinal[0][11][3],  y: (this.DatosFinal[0][11][4]) },
    //     // {x: this.DatosFinal[0][12][3],  y: (this.DatosFinal[0][12][4]) }, 
    //     // {x: this.DatosFinal[0][13][3],  y: (this.DatosFinal[0][13][4]) }

    //   ], 
    //     pointRadius: 10,      
    //   },
    // ];
  }
  HacerLasIteraciones(nIteraciones:number){
    this.DatosFinal   = [];
    this.CentrosFinal = [];
    this.GruposFinal=[];
    this.data22       = [];
    this.centros22    = [];
    this.counter      = 1;
    nIteraciones=nIteraciones-1;
    this.PrimeraIteracionConCentrosPreDefinidos();
    for(let n = 0; n < nIteraciones; n++){
      this.SiguientesIteraciones();
    }
    this.GraphMaybe(nIteraciones, 3);

  }
  SiguientesIteracionesNPD(nCluster:number){    
    this.counter++;
    var data2 : any[]  = [];
    var lg="";
    var g="";
    var linea : any[]  = [];     
    var grupos : any[]  = [];
    var lineagrupos : any[]  = [];
    var lineacentros: any[]  = [];
    var centros2: any[]  = [];
    for (let a = 0; a < 14; a++) {
      for (let i = 0; i < nCluster; i++) {
        var x =
          Math.abs(this.data[a][0] - this.centros22[i][0]) +
          Math.abs(this.data[a][1] - this.centros22[i][1]) +
          Math.abs(this.data[a][2] - this.centros22[i][2]) +
          Math.abs(this.data[a][3] - this.centros22[i][3]) +
          Math.abs(this.data[a][4] - this.centros22[i][4])
        linea.push(x);
      }
    //   console.log("linea")
    // console.log(linea);
      data2.push(linea);
      linea = [];
    }
    // console.log("data2")
    // console.log(data2);
    for (let a = 0; a < 14; a++) {
      if(nCluster==3){
        var x = Math.min(data2[a][0], data2[a][1], data2[a][2]);

      }else{
        var x = Math.min(data2[a][0], data2[a][1]);
      }
      data2[a].push(x);
    }
    if(nCluster==3){
      var max = Math.max(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
      var min = Math.min(data2[0][3], data2[1][3], data2[2][3], data2[3][3], data2[4][3], data2[5][3], data2[6][3], data2[7][3], data2[8][3], data2[9][3], data2[10][3], data2[11][3], data2[12][3], data2[13][3]);
      var avr = (data2[0][3] + data2[1][3] + data2[2][3] + data2[3][3] + data2[4][3] + data2[5][3] + data2[6][3] + data2[7][3] + data2[8][3] + data2[9][3] + data2[10][3] + data2[11][3] + data2[12][3] + data2[13][3]) / 14;
 
    }else{
      var max = Math.max(data2[0][2], data2[1][2], data2[2][2], data2[2][2], data2[4][2], data2[5][2], data2[6][2], data2[7][2], data2[8][2], data2[9][2], data2[10][2], data2[11][2], data2[12][2], data2[13][2]);
      var min = Math.min(data2[0][2], data2[1][2], data2[2][2], data2[2][2], data2[4][2], data2[5][2], data2[6][2], data2[7][2], data2[8][2], data2[9][2], data2[10][2], data2[11][2], data2[12][2], data2[13][2]);
      var avr = (data2[0][2] + data2[1][2] + data2[2][2] + data2[2][2] + data2[4][2] + data2[5][2] + data2[6][2] + data2[7][2] + data2[8][2] + data2[9][2] + data2[10][2] + data2[11][2] + data2[12][2] + data2[13][2]) / 14;
    }
    
   var clus = 0; 
   for (let a = 0; a < 14; a++) {
    var xdata=data2[a][2];
    if(nCluster==3){
      xdata=data2[a][3];
    }      
      if((Math.abs(xdata-max)< Math.abs(xdata - min))){
        if(nCluster==3 && ((Math.abs(xdata - max) < Math.abs(xdata - avr)))){
          clus = 1;
        }else if(nCluster==2){
          clus = 1;
        }
      }
      if((Math.abs(xdata-min)< Math.abs(xdata - max))){
        if(nCluster==3 && ((Math.abs(xdata - min) < Math.abs(xdata - avr)))){
          clus = 2;
        }else if(nCluster==2){
          clus = 2;
        }
      }
      if(nCluster==3 && (Math.abs(xdata-avr)< Math.abs(xdata - min))){
        if(((Math.abs(xdata - avr) < Math.abs(xdata - max)))){
          clus = 3;
        }
      }
      if(nCluster==2){
        data2[a].push(clus);
      }else{
        data2[a].push(clus);
      }
   }
  this.data22 = data2;
  this.DatosFinal.push(data2);
  var y=0;
  var co = 0;
  var n2
  for (let c = 0; c < nCluster; c++) {
  for (let b = 0; b < 5; b++) {
    for (let a = 0; a < 14; a++) {       
      if (data2[a][nCluster+1] == c+1 ) {
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
  console.log("this centros22")
  console.log(this.centros22)  
  for (let c = 0; c < nCluster; c++) {
    for (let a = 0; a < 14; a++) {       
      if (data2[a][nCluster+1] == c+1 ) {
        lineagrupos.push(a+1);
        lg= lg.concat((a+1).toString()+" ");
      }               
    }
    grupos.push(lg); 
    lg=""; 
      lineagrupos=[];   
}
this.GruposFinal.push(grupos);
   
  }
  SiguientesIteraciones(){    
      this.counter++;
      var data2 : any[]  = [];
      var lg="";
      var g="";
      var linea : any[]  = [];     
      var grupos : any[]  = [];
      var lineagrupos : any[]  = [];
      var lineacentros: any[]  = [];
      var centros2: any[]  = [];
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
        if ((Math.abs(data2[a][3] - avr) < Math.abs(data2[a][3] - min))) {
          if ((Math.abs(data2[a][3] - avr) < Math.abs(data2[a][3] - max))) {
            clus = 1;
          }
        }
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
      for (let c = 0; c < 3; c++) {
        for (let a = 0; a < 14; a++) {       
          if (data2[a][4] == c+1 ) {
            lineagrupos.push(a+1);
          }               
        }
        grupos.push(lineagrupos);  
          lineagrupos=[];   
    }
    this.GruposFinal.push(grupos);
    console.log(this.GruposFinal);  
    }
    roundNumber(num:any) {
      return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
  }

  

}
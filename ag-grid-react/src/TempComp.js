import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
//import {ClientSideRowModelModule} from "ag-grid-community";
//import { ClientSideRowModelModule } from "ag-grid-community/client-side-row-model";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import tt from './download.png';
import Temp from './Temp';


class TempComp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      fra:{abc:Temp},
      style:{width:'100%',height:'100%',overflow: 'hidden'},
      defaultColDef: {
        resizable: true,
        sortable: true,
        wrapText: true,     
        autoHeight: true, 
      },
      columnDefs: [
     
        {
           
          headerName: "Make", 
        //  field:'make',
         cellRenderer:'abc',    
         // valueGetter: function(params) {
        //    return 'Value is <b>'+params.node.id+'</b>';
          //},
         
         /* cellStyle: function(params) {
            if (params.node.id== 1) {
                
                return { backgroundColor: 'yellow'};
              return {}
            } else {
                return null;
            }
          }*/
          cellRenderer: function(p) {
            let keyData = p.data.key;
            let newLink = 
            //`<a href= https://ag-grid.com/${keyData}-getting-started tooltip='aaaaaaaaaaaa'
           // target="_blank">${params.node.id}</a>`
          
        //   `<img id="home" src="https://www.gstatic.com/webp/gallery3/1.png" 
          // alt={"Girl in a jacket"} width="20" height="20"></img>`+p.node.model
            `<img src=${tt}  width="20" height="20"></img>`
            return newLink;
        }
          
        }, {
        headerName: "Model", field: "model", sortable: true, filter: true,width:100
        },{
        headerName: "Price", field: "price", sortable: true, filter: true,flex:1
      }
    ],
     
      rowData: [
        {make: "Toyota", model: "Celica kefhsefhsdkjf kjdfsadkfdskf akdfsdklfjsd sdlkfjsdokfjdslkfsdf ", price: 35000,city:'blr',spl:'12'}, 
        {make: "Ford", model: "Mondeo", price: 32000,city:'del'}, 
        {make: "Porsche", model: "Boxter", price: 72000,city:'hyd'},        
      ]
    }
   
  }
  componentDidMount(p){
    console.log('iiiiiiiiiiiiiiiiiiiii:');
    /*this.gridApi.setColumnDefs([{
      headerName: "Price11111111111111", field: "price", sortable: true, filter: true,flex:1
    }]);*/
    let all = [];
  //  this.gridApi.setColumnDefs(all);

}

onGridReady =(params)=> {
  console.log('oooooooooooo');
  this.gridApi = params.api;
  let all = [];
 // this.gridApi.setColumnDefs(all);

//  console.log('iiiiiiiiiiiiiiiiiiiii1:'+JSON.stringify(this.gridApi));
}
abc=(event)=>{
alert('k');
let all = [{
  headerName: "Model", field: "model", sortable: true, filter: true
  }];
//this.gridApi.setColumnDefs([]);
}
  render() {
    let y = '30px';

    let x = {
      height:'calc(100% - '+y
    }

    let abc = <div>abc</div>
    return (
              <>
              llllllllllllll
   <img src={tt}  width="20" height="20"></img>
      <div style={x} className="ag-theme-balham test1">
     
          <div style={this.state.style}>
              <AgGridReact
                  columnDefs={this.state.columnDefs}
                  rowData={this.state.rowData}    
                  frameworkComponents={this.state.fra}   
                  onGridReady={this.onGridReady.bind(this)}  
                  defaultColDef={this.state.defaultColDef}       
              />
          </div>
      
  </div>
  <button onClick={this.abc.bind(this)}>OK</button>
  
  </>

    );
  }
}

export default TempComp;
import React, { Component, useState } from "react";


import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';

import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import './App.css';

import data from './inf/data.json';


export class TabPanel2 extends Component {

render() {
return (

        <div className='tabl'>
            <Tabl />
            </div>
        );
    }

}


export const Tabl = () => {
  const [fakeDatum] = useState(data); 

  return (
    <Table data={fakeDatum} width={1350} height={810}>
    
     <Column width={100} align="center" fixed resizable>
        <HeaderCell>Номер</HeaderCell>
        <Cell dataKey="rank" />
     </Column>
     
      <Column width={150} align="center" fixed resizable>
        <HeaderCell>Сокращение</HeaderCell>
        <Cell dataKey="symbol" />
      </Column>
      
      <Column width={200} align="center" fixed resizable>
        <HeaderCell>Наименование</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      
      <Column width={300} align="center" fixed resizable>
        <HeaderCell>Цена</HeaderCell>
        <Cell dataKey="priceUsd" />
     </Column>
     
    <Column width={300} align="center" fixed resizable>
        <HeaderCell>Среднее за 24 часа</HeaderCell>
        <Cell dataKey="volumeUsd24Hr" />
     </Column>
     
    <Column width={300} align="center" fixed resizable>
        <HeaderCell>Изменение стоимости</HeaderCell>
        <Cell dataKey="changePercent24Hr" />
     </Column>
    
     
     
   </Table>
  );
}


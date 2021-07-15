import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

import './App.css';

import { TabPanel1 } from './t1.js';
import { TabPanel2 } from './t2.js';
import { TabPanel3 } from './t3.js';


class App extends Component {
    
    render() {
    return ( 
    <div className="container">
        <div className="header1">
        <div className="p1"> BIT </div>
        <div className="p2"> ETH </div>
        <div className="p3"> BNB </div>
        <div className="p4"> USDT </div>
        <div className="p5"> DOGE </div>
        <div className="p6"> ADA </div>
        <div className="p7"> DOT </div>
        <div className="p8"> BCH </div>
        <div className="p9"> LTC </div>
        <div className="p10"> UNI </div>
        <div className="p11"> XLM </div>
        <div className="p12"> USDC </div>
        <div className="p13"> VET </div>
        <div className="p14"> ETC </div>
        <div className="p15"> SOL </div>
        <div className="p16"> FIL </div>        
        </div>
        
          <div className="header2">  
            <div className="header3">  <br />  Курс криптовалют </div>
          </div>
          
        
        
        <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs" >
            <TabList>
                <Tab tabFor="vertical-tab-one">Визуализация данных</Tab>
                <Tab tabFor="vertical-tab-two">Динамика данных </Tab>
                <Tab tabFor="vertical-tab-three">Прогноз курса</Tab>
            </TabList>

        <TabPanel tabId="vertical-tab-one"><TabPanel1 /></TabPanel>
        <TabPanel tabId="vertical-tab-two"><TabPanel2 /></TabPanel>
        <TabPanel tabId="vertical-tab-three"><TabPanel3 /></TabPanel>

        
        </Tabs>
    </div>

  );
    }
}

export default App;

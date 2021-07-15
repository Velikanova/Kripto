import React, { Component } from "react";
import './App.css';

import CanvasJSReact from './canvasjs.react';

import data from './inf/bit.csv';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class TabPanel1 extends Component {
  render() {
    return (
        <div className = "tab1"> 

            <div className="canvasjs-chart-canvas1">
            <Bit /></div>
            
            <div className="canvasjs-chart-canvas2">
            <Etc /></div>

        
        </div>
  );
 }
}

var dataPoints = [];

const Bit = () => {
    const options = {
            animationEnabled: true,
            theme: "light1",
            title: {
                text: "Курс Bitcoin"
            },

            axisY : {
            title: "Price"
                },
                
                axisX:{
                valueFormatString: "DD MMM",
                crosshair: {
                enabled: true,
                snapToDataPoint: true
                }
            },
                data: [{
                    type: "spline",
                    name: "price",
                    showInLegend: true,
                    xValueFormatString: "DD MMM",
                    yValueFormatString: "#,##0 Units",
                    dataPoints: [
                    { x: new Date("2021-04-24"), y: 50206.914037852 },
                    { x: new Date("2021-04-25"), y: 49810.855861942 },
                    { x: new Date("2021-04-26"), y: 53120.350111499 },
                    { x: new Date("2021-04-27"), y: 54698.291088706 },
                    { x: new Date("2021-04-28"), y: 54873.288520986 },
                    { x: new Date("2021-04-29"), y: 53955.031732321 },
                    { x: new Date("2021-04-30"), y: 55355.390192913 },
                    { x: new Date("2021-05-01"), y: 57858.641407892 },
                    { x: new Date("2021-05-02"), y: 56975.710318437 },
                    { x: new Date("2021-05-03"), y: 58017.176804408 },
                    { x: new Date("2021-05-04"), y: 55420.586985979 },
                    { x: new Date("2021-05-05"), y: 55951.599411147 },
                    { x: new Date("2021-05-06"), y: 57084.221996793 },
                    { x: new Date("2021-05-07"), y: 56950.028486229 },
                    { x: new Date("2021-05-08"), y: 58637.149620493 },
                    { x: new Date("2021-05-09"), y: 58055.006054159 },
                    { x: new Date("2021-05-10"), y: 57820.558755483 },
                    { x: new Date("2021-05-11"), y: 55926.137645505 },
                    { x: new Date("2021-05-12"), y: 56047.880485377 },
                    { x: new Date("2021-05-13"), y: 49881.708417500 },
                    { x: new Date("2021-05-14"), y: 50256.870089334 },
                    { x: new Date("2021-05-15"), y: 48934.226496399 },
                    { x: new Date("2021-05-16"), y: 47814.048569913 },
                    { x: new Date("2021-05-17"), y: 44390.265221089 },
                    { x: new Date("2021-05-18"), y: 44243.887792306 },
                    { x: new Date("2021-05-19"), y: 39147.863809869 },
                    { x: new Date("2021-05-20"), y: 39865.225713863 },
                    { x: new Date("2021-05-21"), y: 39161.303117427 },
                    { x: new Date("2021-05-22"), y: 37543.682924426 },
                    { x: new Date("2021-05-23"), y: 35095.165825382 }
                    ]
            }]
        }


    return (
    <div id="canvasjs-chart-canvas1" >
        <CanvasJSChart options={options} />
    </div>
    );
}


const Etc = () => {
    const options = {
            animationEnabled: true,
            theme: "light1",
            title: {
                text: "Курс Ethereum"
            },

            axisY : {
            title: "Price",
            ValueFormatString: "#,##0 Units",
                },
                
                axisX:{
                valueFormatString: "DD MMM",
                crosshair: {
                enabled: true,
                snapToDataPoint: true
                }
            },
                data: [{
                    type: "spline",
                    name: "price",
                    showInLegend: true,
                    xValueFormatString: "DD MMM",
                    yValueFormatString: "#,##0 Units",
                    dataPoints: [
                    { x: new Date("2021-04-24"), y: 2267.72751752308 },
                    { x: new Date("2021-04-25"), y: 2266.21776730277 },
                    { x: new Date("2021-04-26"), y: 2478.55928648235 },
                    { x: new Date("2021-04-27"), y: 2580.28188193786 },
                    { x: new Date("2021-04-28"), y: 2681.78442275210 },
                    { x: new Date("2021-04-29"), y: 2746.00328773148 },
                    { x: new Date("2021-04-30"), y: 2763.08927878048 },
                    { x: new Date("2021-05-01"), y: 2871.64697796208 },
                    { x: new Date("2021-05-02"), y: 2934.06049709649 },
                    { x: new Date("2021-05-03"), y: 3173.30268714684 },
                    { x: new Date("2021-05-04"), y: 3356.64438045248 },
                    { x: new Date("2021-05-05"), y: 3369.74722891329 },
                    { x: new Date("2021-05-06"), y: 3493.49514952287 },
                    { x: new Date("2021-05-07"), y: 3483.41765852013 },
                    { x: new Date("2021-05-08"), y: 3656.23038239569 },
                    { x: new Date("2021-05-09"), y: 3897.74372520894 },
                    { x: new Date("2021-05-10"), y: 4065.28028455058 },
                    { x: new Date("2021-05-11"), y: 3992.52913462524 },
                    { x: new Date("2021-05-12"), y: 4221.51449087991 },
                    { x: new Date("2021-05-13"), y: 3822.47708837720 },
                    { x: new Date("2021-05-14"), y: 3971.48384432587 },
                    { x: new Date("2021-05-15"), y: 3903.41088290018 },
                    { x: new Date("2021-05-16"), y: 3705.88476029100 },
                    { x: new Date("2021-05-17"), y: 3392.87381356093 },
                    { x: new Date("2021-05-18"), y: 3427.78470068241 },
                    { x: new Date("2021-05-19"), y: 2825.19763761420 },
                    { x: new Date("2021-05-20"), y: 2693.94573696709 },
                    { x: new Date("2021-05-21"), y: 2625.74811431779 },
                    { x: new Date("2021-05-22"), y: 2350.97366358225 },
                    { x: new Date("2021-05-23"), y: 2105.03451472627 }
                ]
            }]
        }


    return (
    <div id="canvasjs-chart-canvas2" >
        <CanvasJSChart options={options} />
    </div>
    );
}


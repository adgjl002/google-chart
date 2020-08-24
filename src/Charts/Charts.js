import React, { useState } from 'react'
import { Chart } from "react-google-charts";
import Button from '@material-ui/core/Button'
import FromAPICharts from './FromAPI/ExchangeRates.js'

const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
];

const CHART_OPTIONS = {
    Column: { 
        chartType: 'ColumnChart', 
        width:'100%', 
        height:'400px', 
        data: data 
    },
    Bar:  { 
        chartType: 'BarChart', 
        width:'100%', 
        height:'400px', 
        data: data 
    },
    Line:  { 
        chartType: 'LineChart', 
        width:'100%', 
        height:'400px', 
        data: data 
    },
    Pie:  { 
        chartType: 'PieChart', 
        width:'100%', 
        height:'400px', 
        data: data ,
        options:{ 
            title: '', 
            pieHole: 0.6,
            slices: [ {color: '#2BB673'}, {color: '#d91e48'}, {color: '#007fad'}, {color: '#e9a227'} ],
            is3D: false,
            legend: { position: 'bottom', alignment: 'center', textStyle: { color: '233238', fontSize: 14 } },
            tooltip: { showColorCode: true },
            chartArea: { left: 0, top: 0, width: '100%', height: '80%' },
            fontName: 'Roboto'
        } 
    },
    Donut:  { 
        chartType: 'PieChart', 
        width:'100%', 
        height:'400px', 
        data: data, 
        options:{ title: 'My Daily Activities', pieHole: 0.4, is3D: true } 
    },
}

const Charts = () => {
    const [curChartOption, setChartOption] = useState(CHART_OPTIONS.Column)
    return (
        <div>
            <Button variant='outlined' onClick={() => { setChartOption(CHART_OPTIONS.Column) }}>
                Column Chart
            </Button>
            <Button variant='outlined' onClick={() => { setChartOption(CHART_OPTIONS.Bar) }}>
                Bar Chart
            </Button>
            <Button variant='outlined' onClick={() => { setChartOption(CHART_OPTIONS.Line) }}>
                Line Chart
            </Button>
            <Button variant='outlined' onClick={() => { setChartOption(CHART_OPTIONS.Pie) }}>
                Pie Chart
            </Button>
            <Button variant='outlined' onClick={() => { setChartOption(CHART_OPTIONS.Donut) }}>
                Donut Chart
            </Button>
            <Chart
                chartType={curChartOption.chartType}
                width={curChartOption.width}
                height={curChartOption.height}
                data={curChartOption.data}
                options={curChartOption.options}
            />
            <FromAPICharts></FromAPICharts>
        </div>
    )
}
export default Charts
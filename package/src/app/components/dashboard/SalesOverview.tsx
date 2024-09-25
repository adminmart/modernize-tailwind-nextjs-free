"use client"
import React from 'react';
import dynamic from "next/dynamic";
import CardBox from '../shared/CardBox';
import { Select } from 'flowbite-react';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const SalesOverview = () => {

    // chart
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: true,
            },
            height: 370,
        },
        colors: ["var(--color-primary)", "var(--color-secondary)"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '42%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },

        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
        },
        xaxis: {
            categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart: any = [
        {
            name: 'Eanings this month',
            data: [355, 390, 300, 350, 390, 180, 355, 390],
        },
        {
            name: 'Expense this month',
            data: [280, 250, 325, 215, 250, 310, 280, 250],
        },
    ];

    return (

        <CardBox className='pb-0' >
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Sales Overview</h5>
                </div>
                <div className="sm:mt-0 mt-4">
                    <Select className="form-control select-md" >
                        <option>March 2024</option>
                        <option>April 2024</option>
                        <option>May 2024</option>
                        <option>June 2024</option>
                    </Select>
                </div>
            </div>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height={355} width={"100%"}
            />
        </CardBox>
    );
};

export default SalesOverview;
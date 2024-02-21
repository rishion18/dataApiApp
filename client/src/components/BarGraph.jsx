import { Chart, registerables } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

Chart.register(...registerables);

const BarGraph = () => {
    const { BarGraphData, pieChartData } = useSelector(state => state.Events);

    const barLabels = Object.keys(BarGraphData);
    const barData = Object.values(BarGraphData);

    const pieLabels = Object.keys(pieChartData);
    const pieData = Object.values(pieChartData);

    const barChartData = {
        labels: barLabels,
        datasets: [
            {
                label: 'Data',
                data: barData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    const dataPie = {
        labels: pieLabels,
        datasets: [
            {
                data: pieData,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
            },
        ],
    };

    const options = {
    };

    return (
        <div className='flex flex-col w-screen justify-center items-center gap-5'>
          <p className='text-lg text-red-500'>*When you select a month it gives data irrespective of year as mentioned in assignment</p>
            <div className=' h-full flex  gap-5 justify-center mt-5 w-10/12'>
              <div className='w-3/5 flex justify-center items-center m-5'>
                 <Bar data={barChartData} options={options} />
              </div>
              <div className='w-2/5 flex justify-center m-5'>
                <Pie data={dataPie} />
              </div>  
            </div>
        </div>
    );
};

export default BarGraph;

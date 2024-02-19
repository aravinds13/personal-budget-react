// import d3 from 'd3';
import { Chart, ArcElement } from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import axios from 'axios';
import { useState, useEffect } from 'react'
import D3Chart from '../../components/d3Chart';

Chart.register(ArcElement);

function HomePage() {

    const [dataSource, setDataSource] = useState({
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                ]
            }
        ],
        labels: []
    })

    useEffect(() => {
        const getBudget = async () => {
            try {
                const res = await axios.get('http://localhost:3001/budget');
                const chartData = {
                    datasets: [{
                        ...dataSource.datasets[0],
                        data: res.data.myBudget.map(item => item.budget),
                    }],
                    labels: res.data.myBudget.map(item => item.title),
                };
                setDataSource(chartData);
            } catch (error) {
                console.error("Failed to fetch budget data:", error);
            }
        };

        getBudget();
    }, []);
    
    // debugger
    // getBudget(dataSource, setDataSource)
    return (
        <main className="center" id="main">
            <section className="page-area">

                <article>
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
        
                <article>
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
        
                <article itemScope itemType="https://schema.org/result">
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
        
                <article itemScope itemType="https://schema.org/free">
                    <h1>Free</h1>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </article>
        
                <article>
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
        
                <article>
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
        
                <article itemScope itemType="https://schema.org/result">
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
        
                <article>
                    <h1>Chart</h1>
                    <p>
                    {
                        dataSource.datasets[0].data.length > 0 ? 
                            <Pie data={dataSource} /> : <p>Loading...</p>
                    }
                    
                    </p>
                </article>

                <article>
                    <h1>D3Chart</h1>
                    <div>
                        {/* {dataSource.datasets[0].data.length > 0 ? 
                            <D3Chart data={dataSource} /> : <p>Loading...</p>} */}
                    </div>
                </article>

            </section>

        </main>
    );
  }

export default HomePage;
  
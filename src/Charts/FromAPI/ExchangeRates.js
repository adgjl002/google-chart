import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const ExchangeRates = () => {
    const [state, setState] = useState({ chartData: null, dataLoadingStatus: 'loading' })
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD')
            const json = await response.json()
            const rateCurrencyNames = Object.keys(json.rates)
            const rateCurrencyValues = Object.values(json.rates)
            const chartData = [['Currency Name', 'Currency Rate']]
            for (let i = 0; i < rateCurrencyNames.length; i += 1) {
                chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
            }
            setState({ ...state, chartData, dataLoadingStatus: 'ready'})
        }
        fetchData();
    }, [])

    const { chartData, dataLoadingStatus } = state
    return (
        <div>
            {
                dataLoadingStatus === 'ready' ?
                    <Chart
                        chartType="BarChart"
                        data={chartData}
                        options={{
                            chartArea: { width: '50%' },
                            title: 'EUR Price',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                    :
                    <div>Fetching data from API</div>
            }
        </div>
    )
}

export default ExchangeRates
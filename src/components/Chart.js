import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useState, useEffect } from 'react'
import axios from '../axios';

const Chart = ({ batchId }) => {
  const [chartData, setChartData] = useState('')

  useEffect(async () => {
    await axios.get(`/UIGateway/GetReadingsForBatch`, { params: { batchId: batchId } })
      .then(res => {
        if (res.status === 200) {
          console.log('chart data mapped', res.data)
          setChartData(res.data)
        }
      }).catch(error => {
        alert('Failed get chart data - ', error.message)
      })
  }, [])

  return (
    <div className='text-white'>
      <LineChart width={600} height={300} data={chartData}>
        <Line type="monotone" dataKey="temperatureReading" stroke="#f50505" />
        <Line type="monotone" dataKey="humidityReading" stroke="#0047d6" />
        <CartesianGrid stroke="#ccc" />
        <Tooltip labelFormatter={(index) => (chartData[index].dateTime)} itemStyle={{ backgroundColor: '#212121' }} contentStyle={{ backgroundColor: '#212121' }} />
        <Legend />
        <YAxis stroke='white'/>
      </LineChart>
    </div>
  )
}

export default Chart
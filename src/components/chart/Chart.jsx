import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", MySQLusers: 2, MongoDBusers: 1, },
    { name: "February", MySQLusers: 2, MongoDBusers: 5, },
    { name: "March", MySQLusers: 6, MongoDBusers: 2, },
    { name: "April", MySQLusers: 1, MongoDBusers: 3, },
    { name: "May", MySQLusers: 0, MongoDBusers: 4, },
];

const Chart = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="mysql" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="mongo" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area type="monotone" dataKey="MySQLusers" stroke="#8884d8" fillOpacity={1} fill="url(#mysql)" />
                    <Area type="monotone" dataKey="MongoDBusers" stroke="#82ca9d" fillOpacity={1} fill="url(#mongo)" />
                </AreaChart>
            </ResponsiveContainer></div>
    )
}

export default Chart
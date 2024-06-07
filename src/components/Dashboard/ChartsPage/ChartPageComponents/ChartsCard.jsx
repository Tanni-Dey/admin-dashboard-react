import { Area, AreaChart, ResponsiveContainer } from "recharts";

const ChartsCard = () => {
  const allData = [
    [
      {
        name: "Sale 1",
        sale: 0,
        pv: 0,
        amt: 0,
      },
      {
        name: "Sale 2",
        sale: 1830,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Sale 3",
        sale: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Sale 4",
        sale: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Sale 5",
        sale: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Sale 6",
        sale: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Sale 7",
        sale: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "Sale 8",
        sale: 0,
        pv: 4300,
        amt: 2100,
      },
    ],
    [
      {
        name: "Sale 1",
        sale: 0,
        pv: 0,
        amt: 0,
      },
      {
        name: "Sale 2",
        sale: 1830,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Sale 3",
        sale: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Sale 4",
        sale: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Sale 5",
        sale: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Sale 6",
        sale: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Sale 7",
        sale: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "Sale 8",
        sale: 0,
        pv: 4300,
        amt: 2100,
      },
    ],
    [
      {
        name: "Sale 1",
        sale: 0,
        pv: 0,
        amt: 0,
      },
      {
        name: "Sale 2",
        sale: 1830,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Sale 3",
        sale: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Sale 4",
        sale: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Sale 5",
        sale: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Sale 6",
        sale: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Sale 7",
        sale: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "Sale 8",
        sale: 0,
        pv: 4300,
        amt: 2100,
      },
    ],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
      {allData.map((data, index) => (
        <div key={index} className="p-5 bg-white rounded-lg">
          <div className="flex items-center justify-between pb-10 ">
            <h2 className="text-blue-500 font-sans text-xs font-semibold uppercase">
              Sale
            </h2>
            <h4 className="text-xl text-black font-semibold">$1249</h4>
          </div>
          <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="sale"
                stroke="#8884d8"
                strokeWidth={3}
                fill={`url(#colorUv)`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default ChartsCard;

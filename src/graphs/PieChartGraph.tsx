import { FC } from "react"
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts"

export const PieChartGraph: FC = () => {
  const Radian = Math.PI / 180
  const customizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * Radian)
    const y = cy + radius * Math.sin(-midAngle * Radian)
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <>
      <PieChart width={800} height={800}>
        <Pie
          width={800}
          height={800}
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          // label={renderCustomizedLabel}
          label={customizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Tooltip></Tooltip>
        </Pie>
      </PieChart>
    </>
  )
}
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const data = [
  { name: "48", value: 800 },
  { name: "12", value: 5 },
  { name: "545", value: 8 },
  { name: "27", value: 500 },
  { name: "22", value: 55 },
  { name: "45", value: 80 },
]

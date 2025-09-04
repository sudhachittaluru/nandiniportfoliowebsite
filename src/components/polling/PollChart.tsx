import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Poll {
  id: string;
  question: string;
  options: string[];
  timeLimit: number;
  createdAt: string;
  active: boolean;
}

interface PollAnswer {
  option: string;
  student: string;
}

interface PollChartProps {
  poll: Poll;
  answers: PollAnswer[];
}

export const PollChart = ({ poll, answers }: PollChartProps) => {
  const getOptionCount = (option: string) => {
    return answers.filter(answer => answer.option === option).length;
  };

  const chartData = poll.options.map((option, index) => ({
    name: `Option ${index + 1}`,
    fullName: option,
    votes: getOptionCount(option),
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-surface border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{data.fullName}</p>
          <p className="text-primary">
            Votes: <span className="font-semibold">{data.votes}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Visual Results</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="votes" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
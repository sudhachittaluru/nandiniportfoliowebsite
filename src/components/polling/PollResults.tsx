import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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

interface PollResultsProps {
  poll: Poll;
  answers: PollAnswer[];
}

export const PollResults = ({ poll, answers }: PollResultsProps) => {
  const getOptionCount = (option: string) => {
    return answers.filter(answer => answer.option === option).length;
  };

  const totalVotes = answers.length;
  const getPercentage = (option: string) => {
    if (totalVotes === 0) return 0;
    return (getOptionCount(option) / totalVotes) * 100;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">Vote Distribution</h4>
        <Badge variant="secondary">
          {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'}
        </Badge>
      </div>
      
      <div className="space-y-3">
        {poll.options.map((option, index) => {
          const count = getOptionCount(option);
          const percentage = getPercentage(option);
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">{option}</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{count}</span>
                  <span className="text-xs text-muted-foreground">
                    ({percentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Clock, Users, Vote } from "lucide-react";
import { PollChart } from "@/components/polling/PollChart";
import { PollResults } from "@/components/polling/PollResults";

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

interface PollData {
  poll: Poll | null;
  answers: PollAnswer[];
}

const Teacher = () => {
  const [pollData, setPollData] = useState<PollData>({ poll: null, answers: [] });
  const [formData, setFormData] = useState({
    question: "",
    options: "",
    timeLimit: 60
  });
  const [isCreating, setIsCreating] = useState(false);

  const fetchPoll = async () => {
    try {
      const response = await fetch('/api/poll');
      if (response.ok) {
        const data = await response.json();
        setPollData(data);
      }
    } catch (error) {
      console.error('Failed to fetch poll:', error);
    }
  };

  useEffect(() => {
    fetchPoll();
    const interval = setInterval(fetchPoll, 2000);
    return () => clearInterval(interval);
  }, []);

  const createPoll = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const options = formData.options
        .split('\n')
        .map(opt => opt.trim())
        .filter(opt => opt.length > 0);

      if (options.length < 2) {
        toast({
          title: "Error",
          description: "Please provide at least 2 options",
          variant: "destructive"
        });
        return;
      }

      const response = await fetch('/api/create-poll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: formData.question,
          options,
          timeLimit: formData.timeLimit
        })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Poll created successfully!"
        });
        setFormData({ question: "", options: "", timeLimit: 60 });
        fetchPoll();
      } else {
        throw new Error('Failed to create poll');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create poll. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsCreating(false);
    }
  };

  const getTimeRemaining = () => {
    if (!pollData.poll) return 0;
    const elapsed = (Date.now() - new Date(pollData.poll.createdAt).getTime()) / 1000;
    return Math.max(0, pollData.poll.timeLimit - elapsed);
  };

  const canCreatePoll = !pollData.poll || !pollData.poll.active || getTimeRemaining() <= 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Teacher Dashboard</h1>
              <p className="text-muted-foreground">Create and manage live polls</p>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{pollData.answers.length} responses</span>
              </div>
              {pollData.poll && pollData.poll.active && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{Math.ceil(getTimeRemaining())}s left</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Poll Panel */}
          <Card className="bg-surface border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-primary" />
                Create New Poll
              </CardTitle>
              <CardDescription>
                {canCreatePoll 
                  ? "Create a new poll for your students"
                  : "Wait for the current poll to finish before creating a new one"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={createPoll} className="space-y-4">
                <div>
                  <Label htmlFor="question">Question</Label>
                  <Input
                    id="question"
                    placeholder="Enter your poll question"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    disabled={!canCreatePoll}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="options">Options (one per line)</Label>
                  <Textarea
                    id="options"
                    placeholder="Option 1&#10;Option 2&#10;Option 3"
                    value={formData.options}
                    onChange={(e) => setFormData({ ...formData, options: e.target.value })}
                    disabled={!canCreatePoll}
                    rows={5}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="timeLimit">Time Limit (seconds)</Label>
                  <Input
                    id="timeLimit"
                    type="number"
                    min="10"
                    max="300"
                    value={formData.timeLimit}
                    onChange={(e) => setFormData({ ...formData, timeLimit: parseInt(e.target.value) })}
                    disabled={!canCreatePoll}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={!canCreatePoll || isCreating}
                  className="w-full"
                >
                  {isCreating ? "Creating..." : "Create Poll"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="bg-surface border-border">
            <CardHeader>
              <CardTitle>Live Results</CardTitle>
              <CardDescription>
                Real-time poll results and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pollData.poll ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Current Question:</h3>
                    <p className="text-muted-foreground">{pollData.poll.question}</p>
                  </div>
                  
                  <PollResults poll={pollData.poll} answers={pollData.answers} />
                  <PollChart poll={pollData.poll} answers={pollData.answers} />
                </div>
              ) : (
                <div className="text-center py-8">
                  <Vote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No active poll</p>
                  <p className="text-sm text-muted-foreground">Create a poll to see results here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
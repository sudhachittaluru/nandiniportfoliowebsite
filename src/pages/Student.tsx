import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Clock, User, Vote } from "lucide-react";
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

const Student = () => {
  const [pollData, setPollData] = useState<PollData>({ poll: null, answers: [] });
  const [studentName, setStudentName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNameInput, setShowNameInput] = useState(true);

  useEffect(() => {
    const savedName = sessionStorage.getItem('student-name');
    if (savedName) {
      setStudentName(savedName);
      setShowNameInput(false);
    }
  }, []);

  const fetchPoll = async () => {
    try {
      const response = await fetch('/api/poll');
      if (response.ok) {
        const data = await response.json();
        setPollData(data);
        
        // Check if student has already answered this poll
        if (data.poll && studentName) {
          const hasStudentAnswered = data.answers.some(
            (answer: PollAnswer) => answer.student === studentName
          );
          setHasAnswered(hasStudentAnswered);
        }
      }
    } catch (error) {
      console.error('Failed to fetch poll:', error);
    }
  };

  useEffect(() => {
    if (!showNameInput) {
      fetchPoll();
      const interval = setInterval(fetchPoll, 2000);
      return () => clearInterval(interval);
    }
  }, [showNameInput, studentName]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      sessionStorage.setItem('student-name', studentName.trim());
      setShowNameInput(false);
    }
  };

  const submitAnswer = async () => {
    if (!selectedOption || !pollData.poll) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student: studentName,
          option: selectedOption
        })
      });

      if (response.ok) {
        setHasAnswered(true);
        toast({
          title: "Success",
          description: "Your answer has been submitted!"
        });
        fetchPoll();
      } else {
        throw new Error('Failed to submit answer');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit answer. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTimeRemaining = () => {
    if (!pollData.poll) return 0;
    const elapsed = (Date.now() - new Date(pollData.poll.createdAt).getTime()) / 1000;
    return Math.max(0, pollData.poll.timeLimit - elapsed);
  };

  const timeRemaining = getTimeRemaining();
  const shouldShowResults = hasAnswered || timeRemaining <= 0;

  if (showNameInput) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-surface border-border">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Welcome Student
            </CardTitle>
            <CardDescription>
              Please enter your name to participate in polls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNameSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Enter Polling System
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface-secondary border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Student Portal</h1>
              <p className="text-muted-foreground">Welcome, {studentName}</p>
            </div>
            {pollData.poll && pollData.poll.active && timeRemaining > 0 && (
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">{Math.ceil(timeRemaining)}s remaining</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {pollData.poll ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Voting Panel */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Vote className="h-5 w-5 text-primary" />
                  Current Poll
                </CardTitle>
                <CardDescription>
                  {shouldShowResults 
                    ? "Poll completed - viewing results"
                    : "Select your answer below"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">{pollData.poll.question}</h3>
                    
                    {!shouldShowResults ? (
                      <div className="space-y-4">
                        <RadioGroup
                          value={selectedOption}
                          onValueChange={setSelectedOption}
                        >
                          {pollData.poll.options.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <RadioGroupItem value={option} id={`option-${index}`} />
                              <Label 
                                htmlFor={`option-${index}`}
                                className="cursor-pointer flex-1"
                              >
                                {option}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        
                        <Button
                          onClick={submitAnswer}
                          disabled={!selectedOption || isSubmitting}
                          className="w-full"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Answer"}
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground">
                          {hasAnswered 
                            ? "Thank you for your response! Viewing live results below."
                            : "Time's up! Viewing final results below."
                          }
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <Card className="bg-surface border-border">
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>
                  {shouldShowResults 
                    ? "Live poll results"
                    : "Results will appear after you submit your answer"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {shouldShowResults ? (
                  <div className="space-y-6">
                    <PollResults poll={pollData.poll} answers={pollData.answers} />
                    <PollChart poll={pollData.poll} answers={pollData.answers} />
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Vote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Submit your answer to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="bg-surface border-border">
            <CardContent className="text-center py-12">
              <Vote className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Active Poll</h2>
              <p className="text-muted-foreground">
                Waiting for your teacher to create a poll...
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Student;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const WebChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!input.trim()) {
      toast({
        title: "Please enter your question",
        description: "Type something to get AI tips!",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResponse("");

    try {
      const apiResponse = await fetch("https://jobfiti-backend.YOUR-REPL-USERNAME.repl.co/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await apiResponse.json();
      setResponse(data.response || "Sorry, I couldn't generate a response at this time.");
      
      toast({
        title: "AI Response Ready! 🎉",
        description: "Check out your personalized job tip below.",
      });
    } catch (error) {
      console.error("Error:", error);
      setResponse(
        "I'm having trouble connecting right now. Here's a quick tip: Always tailor your CV to match the job description keywords! 💡"
      );
      toast({
        title: "Connection Issue",
        description: "Showing you a sample tip instead!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-primary hover:text-primary/80 transition-colors">
              JobFit AI
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Chat with JobFit AI 💬
          </h2>
          <p className="text-muted-foreground">
            Ask me anything about job searching, CVs, interviews, or career tips!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Input Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                What would you like help with today? 🤔
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Example: How can I make my CV stand out for entry-level positions in Nairobi?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[120px] text-base"
                disabled={isLoading}
              />
              <div className="flex gap-4">
                <Button 
                  onClick={handleSubmit} 
                  disabled={isLoading}
                  className="flex-1 sm:flex-none cta-btn text-lg py-3 hover:scale-105 transition-transform"
                >
                  {isLoading ? "Getting AI Tips..." : "Get Tip 🚀"}
                </Button>
                <Link to="/">
                  <Button variant="outline" className="py-3">
                    ← Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Response Section */}
          {(response || isLoading) && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  🧠 AI Response
                  {isLoading && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-muted-foreground">
                    <p>Analyzing your question and generating personalized tips...</p>
                  </div>
                ) : (
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                      {response}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Sample Questions */}
          {!response && !isLoading && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  💡 Try asking about:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "How to write a compelling cover letter for tech jobs",
                    "Common interview questions for fresh graduates",
                    "How to highlight skills when I have no work experience",
                    "Tips for networking in the Kenyan job market"
                  ].map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left h-auto p-3 text-wrap justify-start hover:bg-primary/10"
                      onClick={() => setInput(question)}
                    >
                      "{question}"
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebChat;
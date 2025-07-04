import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">
              JobFit AI
            </h1>
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Empowering Kenyan Youth with Job-Readiness Skills
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              JobFit AI is your free microlearning coach designed specifically for young people in Kenya. 
              Whether you're a first-time job seeker, recent graduate, or looking to boost your career confidence, 
              we're here to help you succeed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get personalized, AI-powered guidance that fits into your busy schedule with quick 2-minute daily sessions 
              that will transform your job search approach. 🎓
            </p>
          </div>
        </div>

        {/* Features Section */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              What You'll Learn 📚
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Personalized CV & Cover Letter Tips
                </h4>
                <p className="text-muted-foreground">
                  Craft compelling applications that stand out to employers
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Interview Preparation Tips
                </h4>
                <p className="text-muted-foreground">
                  Build confidence and master common interview questions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  2-Minute Daily Microlearning Sessions
                </h4>
                <p className="text-muted-foreground">
                  Quick, actionable tips that fit into your daily routine
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Ready to Start Your Journey? 🚀
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <Link to="/webchat" className="w-full">
              <Button size="lg" className="w-full cta-btn text-lg py-6 hover:scale-105 transition-transform">
                💬 Use on Website
              </Button>
            </Link>
            <a 
              href="https://t.me/jobfiti_ai_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full telegram-btn text-lg py-6 bg-telegram text-telegram-foreground border-telegram hover:bg-telegram/90 hover:scale-105 transition-transform"
              >
                📱 Use on Telegram
              </Button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground">
          <p className="text-sm">
            Built for the <span className="font-semibold">Vibe 2.0 Hackathon – 2025</span> 🇰🇪
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Target, TrendingUp, Briefcase, GraduationCap, Star } from "lucide-react";
import careerTeamImage from "@/assets/career-team.jpg";
import youngProfessionalImage from "@/assets/young-professional.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10 opacity-10">
            <img 
              src={careerTeamImage} 
              alt="Career success" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Briefcase className="w-12 h-12 text-primary animate-pulse" />
              <h1 className="text-6xl font-bold text-primary">
                JobFit AI
              </h1>
              <GraduationCap className="w-12 h-12 text-accent animate-pulse" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
              <Users className="w-8 h-8 text-accent" />
              Empowering Kenyan Youth with Job-Readiness Skills 
              <TrendingUp className="w-8 h-8 text-primary" />
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-accent animate-pulse" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                JobFit AI is your free microlearning coach designed specifically for young people in Kenya 🇰🇪. 
                Whether you're a first-time job seeker 👩‍💼, recent graduate 🎓, or looking to boost your career confidence 💪, 
                we're here to help you succeed!
              </p>
              <Star className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get personalized, AI-powered guidance 🤖 that fits into your busy schedule with quick 2-minute daily sessions ⏰
              that will transform your job search approach and land your dream job! 🎯✨
            </p>
          </div>
        </div>

        {/* Features Section */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-lg border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-center text-foreground">
                What You'll Master 📚💼
              </h3>
              <Target className="w-8 h-8 text-accent" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-3xl">📝</div>
                  <div className="text-3xl">✅</div>
                  <div className="text-3xl">💼</div>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Personalized CV & Cover Letter Tips
                </h4>
                <p className="text-muted-foreground">
                  Craft compelling applications that stand out to employers 🎯
                </p>
              </div>
              <div className="text-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-3xl">🗣️</div>
                  <div className="text-3xl">✅</div>
                  <div className="text-3xl">🏆</div>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Interview Preparation Tips
                </h4>
                <p className="text-muted-foreground">
                  Build confidence and master common interview questions 💪
                </p>
              </div>
              <div className="text-center p-6 hover:bg-secondary/50 rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-3xl">⏰</div>
                  <div className="text-3xl">✅</div>
                  <div className="text-3xl">🧠</div>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  2-Minute Daily Microlearning Sessions
                </h4>
                <p className="text-muted-foreground">
                  Quick, actionable tips that fit into your daily routine ⚡
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories Teaser */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-lg border-accent/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-center text-foreground">
                Join Thousands of Kenyan Youth 🌟
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src={youngProfessionalImage} 
                  alt="Young professional working" 
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <p className="text-muted-foreground">
                    "Landed my first job in tech thanks to JobFit AI's CV tips!" 🚀
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <p className="text-muted-foreground">
                    "The interview prep sessions boosted my confidence 100%!" 💪
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <p className="text-muted-foreground">
                    "Perfect for busy students - just 2 minutes a day!" ⏰
                  </p>
                </div>
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
                💬 Chat on web
              </Button>
            </Link>
            <a 
              href="https://t.me/Hustle_coach_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full telegram-btn text-lg py-6 bg-telegram text-telegram-foreground border-telegram hover:bg-telegram/90 hover:scale-105 transition-transform"
              >
                📱 Chat on Telegram
              </Button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground">
          <p className="text-sm">
            Built by <a href="https://github.com/abdilahi99official">@abdilahi99official</a> for the <span className="font-semibold">Vibe 2.0 Hackathon – 2025</span> 🇰🇪
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
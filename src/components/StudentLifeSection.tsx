import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Music, Trophy, Users, Palette, Gamepad2 } from "lucide-react";

const StudentLifeSection = () => {
  const activities = [
    {
      category: "Academic Clubs",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      clubs: ["Debate Society", "Young Scientists Club", "Mathematics Olympiad", "Quiz Club", "Chess Club"]
    },
    {
      category: "Arts & Culture",
      icon: Palette,
      color: "bg-purple-100 text-purple-600",
      clubs: ["Drama Club", "Music & Choir", "Visual Arts", "Photography Club", "Cultural Dance"]
    },
    {
      category: "Sports",
      icon: Trophy,
      color: "bg-green-100 text-green-600",
      clubs: ["Football", "Basketball", "Athletics", "Swimming", "Table Tennis", "Badminton"]
    },
    {
      category: "Technology",
      icon: Gamepad2,
      color: "bg-orange-100 text-orange-600",
      clubs: ["Robotics Club", "Coding Club", "Digital Media", "Tech Innovators", "ICT Club"]
    }
  ];

  const events = [
    {
      title: "Annual Speech & Prize Day",
      description: "Celebrating academic achievements and outstanding performance",
      image: "🏆"
    },
    {
      title: "Inter-House Sports Competition",
      description: "Fostering healthy competition and team spirit",
      image: "🏃‍♂️"
    },
    {
      title: "Cultural Day Celebration",
      description: "Showcasing Nigeria's rich cultural heritage",
      image: "🎭"
    },
    {
      title: "Science & Technology Fair",
      description: "Students showcase innovative projects and experiments",
      image: "🔬"
    },
    {
      title: "Arts & Crafts Exhibition",
      description: "Displaying creative talents and artistic abilities",
      image: "🎨"
    },
    {
      title: "Career Day",
      description: "Exposing students to various career opportunities",
      image: "💼"
    }
  ];

  return (
    <section id="student-life" className="py-20">
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-school-navy text-3xl md:text-5xl">
            Vibrant Student Life
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            Beyond academics, we offer a rich array of extracurricular activities that help students 
            discover their talents, build friendships, and develop leadership skills.
          </p>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-20">
          <h3 className="mb-12 font-bold text-school-navy text-3xl text-center">
            Extracurricular Activities
          </h3>
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, index) => (
              <Card key={index} className="group text-center hover:scale-105 transition-transform duration-300 school-card">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${activity.color}`}>
                  <activity.icon className="w-8 h-8" />
                </div>
                <h4 className="mb-4 font-bold text-school-navy text-xl">{activity.category}</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {activity.clubs.map((club, idx) => (
                    <li key={idx} className="flex justify-center items-center">
                      <div className="bg-school-gold mr-2 rounded-full w-1.5 h-1.5"></div>
                      {club}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* School Events */}
        <div className="mb-16">
          <h3 className="mb-12 font-bold text-school-navy text-3xl text-center">
            Annual Events & Celebrations
          </h3>
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card key={index} className="group hover:scale-105 transition-transform duration-300 school-card">
                <div className="mb-4 text-4xl text-center">{event.image}</div>
                <h4 className="mb-3 font-bold text-school-navy text-xl">{event.title}</h4>
                <p className="text-muted-foreground">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* House System */}
        <div className="school-card-premium">
          <div className="mb-12 text-center">
            <h3 className="mb-6 font-bold text-school-navy text-3xl">House System</h3>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
              Our house system promotes healthy competition, leadership development, and school spirit. 
              Students are allocated to one of four houses upon admission.
            </p>
          </div>
          
          <div className="gap-6 grid md:grid-cols-4">
            {[
              { name: "Unity House", color: "bg-red-500", motto: "Together We Achieve" },
              { name: "Progress House", color: "bg-blue-500", motto: "Forward Ever, Backward Never" },
              { name: "Excellence House", color: "bg-green-500", motto: "Strive for Excellence" },
              { name: "Integrity House", color: "bg-yellow-500", motto: "Truth and Honor" }
            ].map((house, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${house.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h4 className="mb-2 font-bold text-school-navy text-lg">{house.name}</h4>
                <p className="text-muted-foreground text-sm italic">"{house.motto}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl school-card">
            <Camera className="mx-auto mb-6 w-16 h-16 text-school-gold" />
            <h3 className="mb-4 font-bold text-school-navy text-2xl">
              See Our Students in Action
            </h3>
            <p className="mb-6 text-muted-foreground">
              Browse our photo gallery to see the vibrant student life at Confluence Int School. 
              From classroom activities to sports events, capture the essence of our school community.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button variant="admission" size="lg">
                View Photo Gallery
              </Button>
              <Button variant="outline" size="lg">
                Watch School Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
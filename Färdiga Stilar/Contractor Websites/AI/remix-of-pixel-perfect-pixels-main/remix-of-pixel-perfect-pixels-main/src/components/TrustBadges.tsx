import homeadvisorBadge from "@/assets/homeadvisor-badge.png";
import bbbBadge from "@/assets/bbb-badge.png";
import buildzoomBadge from "@/assets/buildzoom-badge.png";

const TrustBadges = () => {
  const badges = [
    {
      image: homeadvisorBadge,
      title: "Top rated on HomeAdvisor",
      description:
        "Building trust with clients by being transparent, honest, and reliable in all interactions, including respecting privacy.",
    },
    {
      image: bbbBadge,
      title: "BBB A+ Rating",
      description:
        "Conducting all cleaning tasks with professionalism, including arriving on time, adhering to safety standards.",
    },
    {
      image: buildzoomBadge,
      title: "Top 5% on BuildZoom",
      description:
        "Prioritizing the needs and preferences of customers and striving to exceed their expectations.",
      isWide: true,
    },
  ];

  return (
    <div className="relative" style={{ background: 'linear-gradient(180deg, hsl(175 35% 14%) 0%, hsl(180 30% 16%) 50%, #ffffff 50%)', paddingBottom: '60px' }}>
      {/* Cards container - positioned to overlap hero */}
      <div 
        className="container mx-auto px-4 lg:px-8 relative z-30" 
        style={{ 
          maxWidth: '1200px',
          marginTop: '-80px',
          paddingTop: '0px'
        }}
      >
        <div 
          className="grid md:grid-cols-3 mx-auto"
          style={{ gap: '30px' }}
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white transform hover:-translate-y-2 transition-transform duration-300"
              style={{
                padding: '40px 30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                maxWidth: '350px',
                width: '100%',
                margin: '0 auto'
              }}
            >
              <div className="flex justify-center mb-5" style={{ height: '50px' }}>
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="object-contain"
                  style={{ height: '50px', width: 'auto' }}
                />
              </div>
              <h3 
                className="font-heading text-center mb-3"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 600, 
                  color: '#1a1a1a' 
                }}
              >
                {badge.title}
              </h3>
              <p 
                className="text-center"
                style={{ 
                  fontSize: '14px', 
                  color: '#666666', 
                  lineHeight: 1.6 
                }}
              >
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default TrustBadges;

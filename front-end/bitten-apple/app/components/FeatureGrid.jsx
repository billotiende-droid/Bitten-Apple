import { Battery, Shield, Wifi, Zap } from "lucide-react";

function FeatureGrid() {
  const features = [
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Up to 29 hours video playback on Pro Max",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Ceramic Shield",
      description: "Tougher than any smartphone glass",
      color: "bg-blue-500"
    },
    {
      icon: Wifi,
      title: "5G Capable",
      description: "Superfast downloads and streaming",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Fast Charging",
      description: "Up to 50% charge in 30 minutes",
      color: "bg-amber-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-7x1 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Built to last</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Every detail engineered to perfection. From the moment you pick it
            up to years of daily use.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ;g:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;

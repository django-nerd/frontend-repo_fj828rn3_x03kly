import Hero from './components/Hero';
import DestinationSection from './components/DestinationSection';
import ParallaxLayers from './components/ParallaxLayers';
import CallToAction from './components/CallToAction';

function App() {
  const destinations = [
    {
      title: 'Tokyo',
      subtitle:
        'Neon nights, serene shrines, and world-class cuisine. A seamless blend of ultra-modern and timeless tradition.',
      image:
        'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=2069&auto=format&fit=crop',
      align: 'left',
    },
    {
      title: 'Kyoto',
      subtitle:
        'Golden pavilions, zen gardens, and centuries-old tea houses — the heart of Old Japan’s elegance.',
      image:
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop',
      align: 'right',
    },
    {
      title: 'Osaka',
      subtitle:
        'Vibrant street food, buzzing districts, and warm hospitality — joyful energy by the bay.',
      image:
        'https://images.unsplash.com/photo-1600359746313-7c63b30d2ddd?q=80&w=2070&auto=format&fit=crop',
      align: 'left',
    },
    {
      title: 'Hiroshima',
      subtitle:
        'Resilience and reflection. Peace parks, lush islands, and soulful flavors.',
      image:
        'https://images.unsplash.com/photo-1582813515418-6d9ee117e507?q=80&w=1974&auto=format&fit=crop',
      align: 'right',
    },
    {
      title: 'Nara',
      subtitle:
        'Ancient temples and gentle deer roaming through tranquil parks — a living postcard.',
      image:
        'https://images.unsplash.com/photo-1536164261511-3a17e671d380?q=80&w=2069&auto=format&fit=crop',
      align: 'left',
    },
    {
      title: 'Mount Fuji',
      subtitle:
        'A sacred silhouette on the horizon. Lakes, trails, and quiet villages beneath the snow-capped peak.',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop',
      align: 'right',
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#2C2C2C] text-white">
      {/* Hero with interactive Spline cover and parallax text */}
      <Hero />

      {/* Decorative parallax layer composition */}
      <ParallaxLayers />

      {/* Destination sections with scroll-reveal and internal image parallax */}
      {destinations.map((d) => (
        <DestinationSection
          key={d.title}
          title={d.title}
          subtitle={d.subtitle}
          image={d.image}
          align={d.align}
        />)
      )}

      {/* Call to action */}
      <CallToAction />

      {/* Footer */}
      <footer className="bg-[#1f1f1f] py-10 text-center text-white/70">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-medium tracking-wide text-white/80">Old Japan Travel</p>
          <p className="mt-2 text-sm">Heritage meets modern travel — thoughtfully curated journeys.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;

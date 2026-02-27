import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Fuel, Truck, Shield, Zap, ArrowRight, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <ShoppingCartIcon />, title: 'Order Online', desc: 'Browse fuel types, set quantity, and place orders from anywhere.' },
  { icon: <Truck className="w-6 h-6" />, title: 'Doorstep Delivery', desc: 'Verified riders deliver fuel safely to your location.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Track in Real-Time', desc: 'Monitor your order from confirmation to delivery.' },
  { icon: <Building2 className="w-6 h-6" />, title: 'Station Management', desc: 'Stations manage pricing, stock, and dispatch digitally.' },
  { icon: <Users className="w-6 h-6" />, title: 'Role-Based Access', desc: 'Admin, Manager, Attendant, Rider, and Customer dashboards.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Digital Invoicing', desc: 'Automatic billing and invoice generation.' },
];

function ShoppingCartIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-fuel flex items-center justify-center">
              <Fuel className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">FuelFlow</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button className="bg-gradient-fuel text-primary-foreground font-semibold" onClick={() => navigate('/login')}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 glow-border mb-6">
              <Fuel className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fuel Delivery Reimagined</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
              Fuel delivered to<br />
              <span className="text-gradient-fuel">your doorstep</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Order petrol, diesel, or kerosene online. Track your delivery in real-time. No queues, no hassle — just fuel when you need it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-fuel text-primary-foreground font-semibold text-lg px-8 shadow-fuel"
                onClick={() => navigate('/login')}
              >
                Order Fuel Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted font-semibold text-lg px-8"
                onClick={() => navigate('/login')}
              >
                View Dashboards
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { label: 'Stations', value: '50+' },
              { label: 'Deliveries', value: '10K+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-gradient-fuel">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Everything you need</h2>
          <p className="text-muted-foreground text-lg">A complete platform for fuel ordering and delivery management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-xl border border-border bg-card p-6 shadow-card hover:glow-border transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:shadow-fuel transition-shadow">
                {feat.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{feat.title}</h3>
              <p className="text-muted-foreground text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-gradient-fuel-subtle glow-border p-12 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to simplify fuel access?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join thousands of customers and stations already using FuelFlow for seamless fuel delivery.</p>
          <Button
            size="lg"
            className="bg-gradient-fuel text-primary-foreground font-semibold text-lg px-8 shadow-fuel"
            onClick={() => navigate('/login')}
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-primary" />
            <span className="font-display font-semibold text-foreground">FuelFlow</span>
          </div>
          <p>© 2026 FuelFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

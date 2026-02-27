import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { DEMO_CREDENTIALS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Fuel, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (login(email)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try a demo account below.');
    }
  };

  const quickLogin = (email: string) => {
    if (login(email)) navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md mx-4"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-fuel flex items-center justify-center">
              <Fuel className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">FuelFlow</span>
          </div>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* Login form */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-secondary-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@fuelflow.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-secondary-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                defaultValue="demo"
                className="bg-muted border-border"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full bg-gradient-fuel text-primary-foreground font-semibold">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Quick Demo Access</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(DEMO_CREDENTIALS).map(([key, cred]) => (
                <button
                  key={key}
                  onClick={() => quickLogin(cred.email)}
                  className="text-left px-3 py-2 rounded-lg bg-muted hover:bg-fuel-surface-hover border border-border hover:glow-border transition-all text-sm"
                >
                  <span className="font-medium text-foreground">{cred.role}</span>
                  <span className="block text-xs text-muted-foreground truncate">{cred.email}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          <button onClick={() => navigate('/')} className="text-primary hover:underline">← Back to home</button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

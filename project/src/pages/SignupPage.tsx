import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      // Save token to localStorage/sessionStorage as needed
      localStorage.setItem('token', data.token);
      window.location.href = '/'; // Redirect to home or dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container-custom py-16 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <button type="submit" className="btn-primary w-full">Sign Up</button>
      </form>
      <div className="flex items-center justify-between my-4">
        <hr className="flex-1 border-t border-gray-300" />
        <span className="px-4 text-gray-500">OR</span>
        <hr className="flex-1 border-t border-gray-300" />
      </div>
      <a href="/api/auth/google" className="btn btn-google w-full">
        Continue with Google
      </a>
      <p className="mt-4 text-center">
        Already have an account? <a href="/login" className="text-primary-600 underline">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;


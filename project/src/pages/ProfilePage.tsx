import React, { useEffect, useState } from 'react';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container-custom py-16 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Profile</h2>
      <div className="space-y-4">
        <div><strong>Name:</strong> {profile.name}</div>
        <div><strong>Email:</strong> {profile.email}</div>
        <div><strong>Provider:</strong> {profile.provider || 'Email/Password'}</div>
        <div><strong>Joined:</strong> {new Date(profile.createdat).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
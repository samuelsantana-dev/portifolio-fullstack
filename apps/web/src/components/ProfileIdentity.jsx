import React from 'react';
import { profile } from '@/data/profile';

const ProfileIdentity = ({ featured = false, dark = false, showEducation = false, className = '' }) => {
  const textPrimary = dark ? 'text-white' : 'text-[#142956]';
  const textSecondary = dark ? 'text-gray-300' : 'text-slate-600';

  if (featured) {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="mb-7 h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
        />
        <h1 className={`font-serif text-4xl font-bold leading-tight sm:text-5xl ${textPrimary}`}>{profile.name}</h1>
        <p className={`mt-1 font-serif text-xl font-bold sm:text-2xl ${textPrimary}`}>{profile.shortRole}</p>
        {showEducation && <p className={`mx-auto mt-7 max-w-xs text-base leading-relaxed ${textSecondary}`}>{profile.education}</p>}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 rounded-xl border border-blue-400/25 bg-slate-900/50 px-4 py-3 text-left ${className}`}>
      <img src={profile.photoUrl} alt={profile.name} className="h-12 w-12 rounded-full border-2 border-blue-400/40 object-cover" />
      <div>
        <p className={`font-bold ${textPrimary}`}>{profile.name}</p>
        <p className={`text-sm ${textSecondary}`}>{profile.role}</p>
      </div>
    </div>
  );
};

export default ProfileIdentity;

'use client';

import { useState } from 'react';

export type Role = 'employee' | 'manager' | 'hr' | 'admin' | 'shareholder' | 'owner' | 'delivery-agent';

export type User = {
  name: string;
  email: string;
  avatar: string;
  role: Role;
};

const mockUsers: Record<Role, User> = {
  owner: { name: 'Victoria Sterling', email: 'victoria@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'owner' },
  admin: { name: 'Arthur Pendelton', email: 'arthur@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'admin' },
  manager: { name: 'Eleanor Vance', email: 'eleanor@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'manager' },
  hr: { name: 'Henry Roberts', email: 'henry@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'hr' },
  employee: { name: 'Isla Mae', email: 'isla@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'employee' },
  shareholder: { name: 'Julian Croft', email: 'julian@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'shareholder' },
  'delivery-agent': { name: 'Dash Delivero', email: 'dash@sparkle.com', avatar: 'https://placehold.co/100x100', role: 'delivery-agent' },
};

export function useAuth() {
  const [currentUser, setCurrentUser] = useState<User>(mockUsers.owner);

  const switchRole = (role: Role) => {
    if (mockUsers[role]) {
      setCurrentUser(mockUsers[role]);
    }
  };

  return { user: currentUser, switchRole, availableRoles: Object.keys(mockUsers) };
}

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
  owner: { name: 'Victoria Sterling', email: 'victoria@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'owner' },
  admin: { name: 'Arthur Pendelton', email: 'arthur@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'admin' },
  manager: { name: 'Eleanor Vance', email: 'eleanor@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'manager' },
  hr: { name: 'Henry Roberts', email: 'henry@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'hr' },
  employee: { name: 'Isla Mae', email: 'isla@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'employee' },
  shareholder: { name: 'Julian Croft', email: 'julian@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'shareholder' },
  'delivery-agent': { name: 'Dash Delivero', email: 'dash@aurajewels.com', avatar: 'https://placehold.co/100x100.png', role: 'delivery-agent' },
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

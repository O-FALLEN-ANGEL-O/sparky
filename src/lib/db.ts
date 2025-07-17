/**
 * @fileoverview
 * This file acts as a simulated database. It holds all the mock data
 * for the application and exports functions to retrieve it, mimicking
 * asynchronous database calls. This centralizes data management and
 * makes it easy to swap out for a real database in the future.
 */
import type {
  Product,
  Order,
  Testimonial,
  UserRole,
  AuditLog,
  Delivery,
  DeliveryAgent,
  Job,
  SecurityAlert,
  EmployeeTask,
  HrDocument,
  HrAnnouncement,
  LeaveBalance,
  TeamMember,
  LeaveRequest,
  TeamTask,
  Payroll,
  HrOnboardingTask,
  CartItem
} from './mock-data';

// --- MOCK DATA (Simulates a database) ---

const products: Product[] = [
  {
    id: '1',
    name: 'Emerald Pendant Necklace',
    price: 450.0,
    description:
      'A stunning emerald pendant surrounded by a halo of diamonds, set in 18k white gold. A timeless piece for any occasion.',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600', 'https://placehold.co/600x600'],
    category: 'Necklaces',
    rating: 4.8,
    stock: 12,
    modelUrl: '/models/pendant.glb',
    certificateUrl: '/certs/certificate.pdf'
  },
  {
    id: '2',
    name: 'Vintage Pearl Choker',
    price: 320.0,
    description:
      'Elegant and classic, this choker features three strands of freshwater pearls, fastened with a vintage-inspired silver clasp.',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    category: 'Necklaces',
    rating: 4.9,
    stock: 8,
  },
  {
    id: '3',
    name: 'Sapphire Drop Earrings',
    price: 680.0,
    description:
      'Deep blue sapphires dangle from a delicate diamond-studded hoop, crafted in platinum for a luxurious finish.',
    images: ['https://placehold.co/600x600'],
    category: 'Earrings',
    rating: 4.7,
    stock: 15,
  },
  {
    id: '4',
    name: 'Diamond Tennis Bracelet',
    price: 1200.0,
    description:
      'A breathtaking line of brilliant-cut diamonds, securely set in a flexible 14k gold bracelet. A true statement of luxury.',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    category: 'Bracelets',
    rating: 5.0,
    stock: 5,
    modelUrl: '/models/pendant.glb',
  },
   {
    id: '5',
    name: 'Gold Signet Ring',
    price: 250.0,
    description:
      'A classic, heavy gold signet ring, perfect for personalization or wearing as a bold statement piece. Polished to a high shine.',
    images: ['https://placehold.co/600x600'],
    category: 'Rings',
    rating: 4.6,
    stock: 20,
    certificateUrl: '/certs/certificate.pdf'
  },
  {
    id: '6',
    name: 'Ruby Engagement Ring',
    price: 1500.0,
    description:
      'A vibrant, heart-shaped ruby takes center stage, flanked by two trillion-cut diamonds on a rose gold band.',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    category: 'Rings',
    rating: 4.9,
    stock: 7,
  },
];

const orders: Order[] = [
  {
    id: 'ORD001',
    customer: { name: 'Sophia Loren', email: 'sophia@example.com', avatar: 'https://placehold.co/32x32' },
    date: '2023-05-24',
    status: 'Delivered',
    total: 1200.0,
  },
  {
    id: 'ORD002',
    customer: { name: 'Liam Gallagher', email: 'liam@example.com', avatar: 'https://placehold.co/32x32' },
    date: '2023-05-23',
    status: 'Shipped',
    total: 450.0,
  },
  {
    id: 'ORD003',
    customer: { name: 'Ava Gardner', email: 'ava@example.com', avatar: 'https://placehold.co/32x32' },
    date: '2023-05-22',
    status: 'Processing',
    total: 680.0,
  },
  {
    id: 'ORD004',
    customer: { name: 'Noah Fence', email: 'noah@example.com', avatar: 'https://placehold.co/32x32' },
    date: '2023-05-21',
    status: 'Cancelled',
    total: 320.0,
  },
];

const testimonials: Testimonial[] = [
    { name: 'Priya Sharma', avatar: 'https://placehold.co/100x100', quote: 'The necklace I bought is absolutely breathtaking. The craftsmanship is top-notch!' },
    { name: 'Anjali Mehta', avatar: 'https://placehold.co/100x100', quote: 'Exceptional service and the most beautiful jewelry. I felt like royalty.' },
    { name: 'Rohan Kapoor', avatar: 'https://placehold.co/100x100', quote: 'I purchased an engagement ring, and my fiancée was overjoyed. Highly recommended.' }
];

const cartItems: CartItem[] = [
    { product: products[0], quantity: 1 },
    { product: products[3], quantity: 1 }
];

const userRoles: UserRole[] = [
    { id: 'usr_001', name: 'Victoria Sterling', email: 'victoria@example.com', role: 'Owner', permissions: ['all'], lastActivity: '5 min ago', lastLoginIp: '192.168.1.1', geo: 'New York, USA', riskScore: 1, avatar: 'https://placehold.co/100x100' },
    { id: 'usr_002', name: 'Arthur Pendelton', email: 'arthur@example.com', role: 'Admin', permissions: ['manage_products', 'view_orders'], lastActivity: '2 hours ago', lastLoginIp: '8.8.8.8', geo: 'London, UK', riskScore: 3, avatar: 'https://placehold.co/100x100' },
    { id: 'usr_003', name: 'Eleanor Vance', email: 'eleanor@example.com', role: 'Manager', permissions: ['view_reports', 'manage_staff'], lastActivity: '1 day ago', lastLoginIp: '103.22.4.1', geo: 'Sydney, AU', riskScore: 8, avatar: 'https://placehold.co/100x100' },
    { id: 'usr_004', name: 'Isla Mae', email: 'isla@example.com', role: 'Staff', permissions: ['view_orders'], lastActivity: '30 min ago', lastLoginIp: '212.58.244.70', geo: 'Paris, FR', riskScore: 5, avatar: 'https://placehold.co/100x100' },
]

const auditLogs: AuditLog[] = [
    { id: 'log_001', user: 'victoria@example.com', action: 'User "arthur" role updated to Admin', ip: '192.168.1.1', timestamp: new Date().toISOString(), status: 'Success' },
    { id: 'log_002', user: 'security_bot', action: 'Unusual login detected for user eleanor', ip: '103.22.4.1', timestamp: new Date(Date.now() - 3600000).toISOString(), status: 'Failure' },
    { id: 'log_003', user: 'arthur@example.com', action: 'Product "Ruby Engagement Ring" deleted', ip: '8.8.8.8', timestamp: new Date(Date.now() - 7200000).toISOString(), status: 'Success' },
    { id: 'log_004', user: 'system', action: 'Database backup completed', ip: '127.0.0.1', timestamp: new Date(Date.now() - 10800000).toISOString(), status: 'Success' },
]

const deliveryAgents: DeliveryAgent[] = [
    { id: 'agent-1', name: 'Dash Delivero', phone: '555-1234', avatar: 'https://placehold.co/100x100' },
    { id: 'agent-2', name: 'Speedy Singh', phone: '555-5678', avatar: 'https://placehold.co/100x100' },
]

const deliveries: Delivery[] = [
    { id: 'del_001', orderId: '#SPK-54321', agentId: 'agent-1', status: 'out_for_delivery', customer: { name: 'Rajesh Kumar', address: '123 Tech Park, Bangalore', phone: '9876543210' }, otpCode: '123456', verified: false, lastUpdate: new Date(Date.now() - 1800000).toISOString() },
    { id: 'del_002', orderId: '#SPK-54322', agentId: 'agent-2', status: 'assigned', customer: { name: 'Priya Singh', address: '456 Diamond Plaza, Mumbai', phone: '8765432109' }, otpCode: '654321', verified: false, lastUpdate: new Date(Date.now() - 3600000).toISOString() },
    { id: 'del_003', orderId: '#SPK-54323', agentId: 'agent-1', status: 'delivered', customer: { name: 'Amit Patel', address: '789 Silicon Valley, Hyderabad', phone: '7654321098' }, otpCode: '112233', verified: true, lastUpdate: new Date(Date.now() - 86400000).toISOString(), proofImageUrl: 'https://placehold.co/600x400' },
    { id: 'del_004', orderId: '#SPK-54324', agentId: 'agent-2', status: 'pending', customer: { name: 'Sunita Sharma', address: '101 Cyber City, Gurgaon', phone: '6543210987' }, otpCode: '445566', verified: false, lastUpdate: new Date(Date.now() - 172800000).toISOString() },
]

const jobs: Job[] = [
    { id: 'job-1', title: 'Senior Jewelry Designer', location: 'Mumbai, India', type: 'Full-time', department: 'Design', description: 'Lead our design team in creating breathtaking new collections.', requirements: ['5+ years of experience', 'Proficiency in CAD software', 'Strong portfolio'] },
    { id: 'job-2', title: 'Digital Marketing Manager', location: 'Remote', type: 'Full-time', department: 'Marketing', description: 'Drive our online presence and customer acquisition strategies.', requirements: ['Experience with SEO/SEM', 'Social media expertise', 'E-commerce background'] },
    { id: 'job-3', title: 'Artisan Jeweler', location: 'Jaipur, India', type: 'Contract', department: 'Craftsmanship', description: 'Handcraft exquisite pieces with precision and care.', requirements: ['Expertise in gemstone setting', 'Experience with gold and silver', 'Attention to detail'] },
]

const securityAlerts: SecurityAlert[] = [
  { id: 1, message: 'Failed login attempt from unusual IP.', timestamp: '2024-07-30 14:30:15 UTC' },
  { id: 2, message: 'Admin privileges granted to new user.', timestamp: '2024-07-30 11:05:00 UTC' },
];

const employeeTasks: EmployeeTask[] = [
  { id: 1, title: 'Complete Q3 performance review self-assessment', status: 'In Progress', progress: 50 },
  { id: 2, title: 'Submit expense report for client meeting', status: 'Not Started', progress: 0 },
  { id: 3, title: 'Update project documentation on Confluence', status: 'Completed', progress: 100 },
];

const hrDocuments: HrDocument[] = [
  { id: 1, title: 'Employee Handbook 2024', date: '2024-01-15' },
  { id: 2, title: 'Work From Home Policy', date: '2023-11-20' },
];

const hrAnnouncements: HrAnnouncement[] = [
  { id: 1, message: "Reminder: Annual company picnic this Saturday!" },
  { id: 2, message: "Open enrollment for health benefits ends next week." },
  { id: 3, message: "Welcome our new hire, Alex Ray, to the team!" },
];

const leaveBalance: LeaveBalance[] = [
  { name: 'Vacation', value: 10, color: 'hsl(var(--chart-1))' },
  { name: 'Sick Leave', value: 5, color: 'hsl(var(--chart-2))' },
  { name: 'Personal', value: 2, color: 'hsl(var(--chart-3))' },
];

const teamMembers: TeamMember[] = [
    { id: 'tm-1', name: 'Alex Ray', role: 'Software Engineer', status: 'Online', avatar: 'https://placehold.co/100x100' },
    { id: 'tm-2', name: 'Jordan Lee', role: 'UX Designer', status: 'Away', avatar: 'https://placehold.co/100x100' },
    { id: 'tm-3', name: 'Casey Smith', role: 'Product Manager', status: 'Online', avatar: 'https://placehold.co/100x100' },
    { id: 'tm-4', name: 'Morgan Taylor', role: 'QA Engineer', status: 'Offline', avatar: 'https://placehold.co/100x100' },
];

const leaveRequests: LeaveRequest[] = [
    { id: 1, employeeName: 'Jordan Lee', type: 'Vacation', dateRange: 'Aug 5 - Aug 9', days: 5 },
    { id: 2, employeeName: 'Alex Ray', type: 'Sick Leave', dateRange: 'Jul 29', days: 1 },
];

const teamTaskData: TeamTask[] = [
    { name: 'Alex Ray', completed: 12, pending: 3 },
    { name: 'Jordan Lee', completed: 8, pending: 5 },
    { name: 'Casey Smith', completed: 15, pending: 1 },
    { name: 'Morgan Taylor', completed: 10, pending: 2 },
];

const payrollData: Payroll[] = [
  { month: "January", payout: 86000 },
  { month: "February", payout: 88500 },
  { month: "March", payout: 91000 },
  { month: "April", payout: 89000 },
  { month: "May", payout: 92500 },
  { month: "June", payout: 95000 },
]

const hrOnboardingTasks: HrOnboardingTask[] = [
  { id: 1, task: 'Sign employment contract', completed: true },
  { id: 2, task: 'Complete background check', completed: true },
  { id: 3, task: 'Set up payroll and direct deposit', completed: false },
  { id: 4, task: 'Attend company orientation', completed: false },
];

// --- DATA ACCESS FUNCTIONS (Simulates API calls) ---

// Simulate network delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getProducts(): Promise<Product[]> {
  await delay(500);
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(300);
  return products.find((p) => p.id === id);
}

export async function getOrders(): Promise<Order[]> {
  await delay(700);
  return orders;
}

export async function getTestimonials(): Promise<Testimonial[]> {
    await delay(400);
    return testimonials;
}

export function getCartItems(): CartItem[] {
  // This is synchronous as it would typically be client-side state
  return cartItems;
}

export async function getUserRoles(): Promise<UserRole[]> {
    await delay(300);
    return userRoles;
}

export async function getAuditLogs(): Promise<AuditLog[]> {
    await delay(600);
    return auditLogs;
}

export async function getDeliveries(): Promise<Delivery[]> {
    await delay(500);
    return deliveries;
}

export async function getDeliveryById(id: string): Promise<Delivery | null> {
    await delay(300);
    return deliveries.find(d => d.id === id) || null;
}

export async function getDeliveryAgents(): Promise<DeliveryAgent[]> {
    await delay(200);
    return deliveryAgents;
}

export async function getJobs(): Promise<Job[]> {
    await delay(400);
    return jobs;
}

export async function getJobById(id: string): Promise<Job | null> {
    await delay(300);
    return jobs.find(j => j.id === id) || null;
}

export async function getSecurityAlerts(): Promise<SecurityAlert[]> {
    await delay(200);
    return securityAlerts;
}

export async function getEmployeeTasks(): Promise<EmployeeTask[]> {
    await delay(300);
    return employeeTasks;
}

export async function getHrDocuments(): Promise<HrDocument[]> {
    await delay(200);
    return hrDocuments;
}

export async function getHrAnnouncements(): Promise<HrAnnouncement[]> {
    await delay(100);
    return hrAnnouncements;
}

export async function getEmployeeLeaveBalance(): Promise<LeaveBalance[]> {
    await delay(150);
    return leaveBalance;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
    await delay(300);
    return teamMembers;
}

export async function getLeaveRequests(): Promise<LeaveRequest[]> {
    await delay(250);
    return leaveRequests;
}

export async function getTeamTaskData(): Promise<TeamTask[]> {
    await delay(350);
    return teamTaskData;
}

export async function getPayrollData(): Promise<Payroll[]> {
    await delay(400);
    return payrollData;
}

export async function getHrOnboardingTasks(): Promise<HrOnboardingTask[]> {
    await delay(200);
    return hrOnboardingTasks;
}

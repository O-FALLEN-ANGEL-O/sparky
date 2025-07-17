/**
 * @fileoverview
 * This file acts as a simulated database. It holds all the mock data
 * for the application and exports functions to retrieve it, mimicking
 * asynchronous database calls. This centralizes data management and
 * makes it easy to swap out for a real database in the future.
 */
import { supabase } from './supabase';
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
  CartItem,
} from './mock-data';

// --- DATA ACCESS FUNCTIONS (Simulates API calls) ---

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
    if (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        return undefined;
    }
  return data;
}

export async function getOrders(): Promise<Order[]> {
    const { data, error } = await supabase.from('orders').select(`
        *,
        customer:customers(*)
    `);
    if (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
    return data.map((order: any) => ({
        ...order,
        customer: order.customer ? order.customer : { name: 'N/A', email: 'N/A', avatar: 'https://placehold.co/32x32' }
    }));
}

export async function getTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase.from('testimonials').select('*');
    if (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
    return data;
}

export async function getUserRoles(): Promise<UserRole[]> {
    const { data, error } = await supabase.from('user_roles').select('*');
    if (error) {
        console.error('Error fetching user roles:', error);
        return [];
    }
    return data;
}

export async function getAuditLogs(): Promise<AuditLog[]> {
    const { data, error } = await supabase.from('audit_logs').select('*').order('timestamp', { ascending: false });
    if (error) {
        console.error('Error fetching audit logs:', error);
        return [];
    }
    return data;
}

export async function getDeliveries(): Promise<Delivery[]> {
    const { data, error } = await supabase.from('deliveries').select(`
        *,
        customer:customers(*)
    `);
    if (error) {
        console.error('Error fetching deliveries:', error);
        return [];
    }
     return data.map((delivery: any) => ({
        ...delivery,
        customer: delivery.customer ? delivery.customer : { name: 'N/A', address: 'N/A', phone: 'N/A' }
    }));
}

export async function getDeliveryById(id: string): Promise<Delivery | undefined> {
    const { data, error } = await supabase.from('deliveries').select(`
        *,
        customer:customers(*)
    `).eq('id', id).single();
    if (error) {
        console.error(`Error fetching delivery with id ${id}:`, error);
        return undefined;
    }
     return {
        ...data,
        customer: data.customer ? data.customer : { name: 'N/A', address: 'N/A', phone: 'N/A' }
    };
}

export async function getDeliveryAgents(): Promise<DeliveryAgent[]> {
    const { data, error } = await supabase.from('delivery_agents').select('*');
    if (error) {
        console.error('Error fetching delivery agents:', error);
        return [];
    }
    return data;
}

export async function getJobs(): Promise<Job[]> {
    const { data, error } = await supabase.from('jobs').select('*');
    if (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
    return data;
}

export async function getJobById(id: string): Promise<Job | undefined> {
    const { data, error } = await supabase.from('jobs').select('*').eq('id', id).single();
    if (error) {
        console.error(`Error fetching job with id ${id}:`, error);
        return undefined;
    }
    return data;
}

export async function getSecurityAlerts(): Promise<SecurityAlert[]> {
    const { data, error } = await supabase.from('security_alerts').select('*');
    if (error) {
        console.error('Error fetching security alerts:', error);
        return [];
    }
    return data;
}

export async function getEmployeeTasks(): Promise<EmployeeTask[]> {
    const { data, error } = await supabase.from('employee_tasks').select('*');
    if (error) {
        console.error('Error fetching employee tasks:', error);
        return [];
    }
    return data;
}

export async function getHrDocuments(): Promise<HrDocument[]> {
    const { data, error } = await supabase.from('hr_documents').select('*');
    if (error) {
        console.error('Error fetching HR documents:', error);
        return [];
    }
    return data;
}

export async function getHrAnnouncements(): Promise<HrAnnouncement[]> {
    const { data, error } = await supabase.from('hr_announcements').select('*');
    if (error) {
        console.error('Error fetching HR announcements:', error);
        return [];
    }
    return data;
}

export async function getEmployeeLeaveBalance(): Promise<LeaveBalance[]> {
    const { data, error } = await supabase.from('leave_balances').select('*');
    if (error) {
        console.error('Error fetching leave balances:', error);
        return [];
    }
    return data.map((d: any) => ({...d, color: `hsl(var(--chart-${(d.id % 5) + 1}))`}));
}

export async function getTeamMembers(): Promise<TeamMember[]> {
    const { data, error } = await supabase.from('team_members').select('*');
    if (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
    return data;
}

export async function getLeaveRequests(): Promise<LeaveRequest[]> {
    const { data, error } = await supabase.from('leave_requests').select('*');
    if (error) {
        console.error('Error fetching leave requests:', error);
        return [];
    }
    return data;
}

export async function getTeamTaskData(): Promise<TeamTask[]> {
    const { data, error } = await supabase.from('team_tasks').select('*');
    if (error) {
        console.error('Error fetching team task data:', error);
        return [];
    }
    return data;
}

export async function getPayrollData(): Promise<Payroll[]> {
    const { data, error } = await supabase.from('payroll').select('*');
    if (error) {
        console.error('Error fetching payroll data:', error);
        return [];
    }
    return data;
}

export async function getHrOnboardingTasks(): Promise<HrOnboardingTask[]> {
    const { data, error } = await supabase.from('hr_onboarding_tasks').select('*');
    if (error) {
        console.error('Error fetching HR onboarding tasks:', error);
        return [];
    }
    return data;
}

// Client-side cart items are not stored in Supabase for this demo
const cartItems: CartItem[] = [];
export function getCartItems(): CartItem[] {
  return cartItems;
}

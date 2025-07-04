// Common types for the Sentravision website

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceType: 'consultation' | 'quote' | 'audit';
}

export interface BookingData {
  name: string;
  email: string;
  company: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceType: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: 'automation' | 'consulting' | 'optimization' | 'custom';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
} 
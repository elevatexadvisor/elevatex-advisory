export interface ServiceItem {
  id: string;
  title: string;
  category: 'cfo' | 'tech' | 'incorporation' | 'wealth' | 'income-planning' | 'compliance';
  categoryGroup: string;
  shortDescription: string;
  detailedDescription?: string;
  checklist: string[];
  benefits?: string[];
  bestFor: string;
  iconName: string;
  tag: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyServices: string[];
  iconName: string;
  metrics: string;
}

export interface KnowledgeHubArticle {
  id: string;
  title: string;
  category: 'Latest Tax Updates' | 'GST Articles' | 'Income Tax Guides' | 'Business Insights' | 'Budget Analysis';
  snippet: string;
  content: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  content: string;
  rating: number;
  serviceUsed: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  email: string;
  mapQuery: string;
  badge: string;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  location: 'mumbai' | 'ahmedabad' | 'virtual';
  service: string;
  date: string;
  timeSlot: string;
  urgency?: 'Immediate' | 'Standard' | 'Exploratory';
  notes: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

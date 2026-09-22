export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  scope: string[];
  securityProtocol: string;
  technologies: string[];
  status: 'ACTIVE_DEPLOYMENT' | 'VERIFIED_FRAMEWORK' | 'COMMUNITY_INITIATIVE';
}

export interface ExpertiseItem {
  id: string;
  nodeCode: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface SecurityPrinciple {
  title: string;
  code: string;
  description: string;
}

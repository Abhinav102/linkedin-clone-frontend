import { User } from './IAuth';

export interface Education {
  id: number;
  course: string;
  college?: College;
  duration: string;
  startMonth: string;
  endMonth: string;
  description: string;
  location: string;
  user?: User;
}

interface College {
  id: number;
  url: string;
  name: string;
  rating: string;
}

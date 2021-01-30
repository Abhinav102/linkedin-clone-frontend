import { User } from './IAuth';

export interface Education {
  id: number;
  role: string;
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
  Url: string;
  name: string;
  rating: string;
}

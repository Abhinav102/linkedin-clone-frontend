import { User } from './IAuth';

export interface Experience {
  company?: Company;
  user?: User;
  id: number;
  role: string;
  duration: string;
  startMonth: string;
  endMonth: string;
  description: string;
  location: string;
}

interface Company {
  id: number;
  url: string;
  name: string;
  rating: string;
}

import { User } from './IAuth';

export interface Skills {
    language: Language;
    id: number;
    user?: User;
}

interface Language {
  id?: number;
  url?: string;
  name: string;
  rating?: string;
}

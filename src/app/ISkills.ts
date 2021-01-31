import { User } from "./IAuth";

export interface Skills {
    language: Language;
    id: number;
    user?: User;
}

interface Language {
  id?: number;
  Url?: string;
  name: string;
  rating?: string;
}

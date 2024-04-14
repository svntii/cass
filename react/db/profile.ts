import { Preference } from './preference';
export interface Profile {
    user_id: string;
    username?: string;
    displayName?: string;
    email?: string;
    password?: string;
    preferences?: Preference;
    // include other properties as needed
  }
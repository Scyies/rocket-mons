import { Timestamp } from "firebase/firestore";

export interface UserProfile {
  avatarURL: string;
  bioMessage: string;
  city: string;
  email: string;
  name: string;
  telNumber: string;
}

export interface Animals {
  age?: string;
  behavior?: string;
  imageURL?: string;
  location?: string;
  name?: string;
  size?: string;
  id?: string;
}

export interface AdoptionMessage {
  animalName: string;
  created_at: Timestamp;
  email: string;
  message: string;
  name: string;
  telNumber: string;
  id: string;
}
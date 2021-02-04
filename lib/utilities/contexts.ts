import { createContext } from 'react';

export enum Type {
  User,
  Admin,
}

export interface Access {
  type: Type
}

export const AccessContext = createContext<Access>(null);

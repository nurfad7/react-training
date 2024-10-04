import { createContext } from 'react';
import { Mail } from '../types/mail';

export interface MailContextType {
  mailList: Mail[];
  loading: boolean;
  error: unknown;
  removeMail: (mail: Mail) => void;
}

const MailContext = createContext<MailContextType | undefined>(undefined);

export default MailContext;
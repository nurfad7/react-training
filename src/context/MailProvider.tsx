import { useCallback, useEffect, useState } from "react";
import MailContext, { MailContextType } from "./MailContext";
import axios from "axios";
import { Mail } from "../types/mail";

export const MailProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [mailList, setMailList] = useState<Mail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const removeMail = useCallback( async (mail: Mail) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`http://localhost:3000/mails/${mail.id}`);
      setMailList(data as Mail[]);
      setLoading(false);
      alert("data was successfully removed")
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [mailList]);

  useEffect(() => {
    const fetchMailList = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/mails");
        setMailList(data as Mail[]);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMailList();
  }, []);

  const value: MailContextType = {
    mailList,
    loading,
    error,
    removeMail,
  };

  return <MailContext.Provider value={value}>{children}</MailContext.Provider>;
};
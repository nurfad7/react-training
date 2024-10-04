import { FC, useContext } from "react";
import MailContext from "../../context/MailContext";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Mail } from "../../types/mail";

const MailContainer: FC = () => {
  const mailContext = useContext(MailContext);
  if (mailContext?.error) return <div className="w-full text-center">Something went wrong when retrieve the mails.</div>

  const handleRemove = (data: Mail) => {
    if(window.confirm("are you sure you want to delete this?")){
      mailContext?.removeMail(data);
    }
  }

  return (
    <div id="mails" className="flex flex-col gap-5 px-16 py-20 mb-6">
      <div className="w-[full text-4xl font-medium text-left">
        Mails
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border border-black">
              <th className="border-r border-black">Name</th>
              <th className="border-r border-black">Email</th>
              <th className="border-r border-black">Subject</th>
              <th className="border-r border-black">Message</th>
              <th className="border-r border-black">Action</th>
            </tr>
          </thead>
          { mailContext?.loading ? (
            <div>Loading...</div>
              ) : (
                <tbody>
                  { mailContext?.mailList?.map((data, key) => 
                    <tr key={key} className="border border-black">
                      <td className="border-r border-black">{ data.name }</td>
                      <td className="border-r border-black">{ data.email }</td>
                      <td className="border-r border-black">{ data.subject }</td>
                      <td className="border-r border-black">{ data.message }</td>
                      <td>
                        <Icon className="cursor-pointer" icon={faTrash} onClick={() => {handleRemove(data)}} />
                      </td>
                    </tr>
                  )}
          </tbody>
              )}
        </table>
      </div>
    </div>
  );
};

export default MailContainer;
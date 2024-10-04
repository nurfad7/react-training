import { FC } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Project: FC<Project> = ({ name, roles, link }) => {
  return (
    <div className="flex flex-col w-full gap-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-10 justify-start">
          <div className="text-7xl">{name}</div>
          <div className="text-lg text-dark-grey">
            {roles.map((role, index) => (
              <>
                <span key={index}>{role}</span>
                {index < roles.length - 1 && <span>-</span>}
              </>
            ))}
          </div>
        </div>
        <a
          className="bg-white rounded-full w-20 h-20 flex justify-center hover:bg-dark-grey
                                   hover:text-white text-dark-grey items-center 
                                   cursor-pointer border border-dark-grey"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit project"
        >
          <Icon icon={faArrowUp} className="rotate-[45deg] text-4xl" />
        </a>
      </div>
      <div className="w-full border-b border-dark-grey mb-12" />
    </div>
  );
};

export default Project;

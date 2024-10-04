import { FC } from "react";
import Testimony from "./Testimony";
import { TESTIMONIALS } from "../../constants/ProjectList";

const Testimonial: FC = () => {
  return (
    <div id="Testimony" className="flex gap-16 px-16 py-20 relative">
      <div className="w-[calc(30%-104px)] text-4xl font-medium text-left">
        Testimonials
      </div>
      <div className="w-[74%] flex flex-col gap-10">
        {TESTIMONIALS.map((testimony, key) => (
          <Testimony key={key} {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
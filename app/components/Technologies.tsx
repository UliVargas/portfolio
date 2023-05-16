import { useRef, useState } from "react";
import { technologies } from "~/utils";
import { Button } from "./Button";
import classNames from 'classnames';

export const Technologies = () => {
  const refDescription = useRef<HTMLQuoteElement>(null);
  const [heading, setHeading] = useState<string>("");
  const description = heading ? technologies[heading] : technologies.default
  const techs = Object.keys(technologies).filter((tech) => tech !== "default").reverse();

  return (
    <section className="bg-[#010B40] h-[500px] border">
      <div className="w-[1000px] h-full mx-auto flex items-center gap-20">
      <div className="w-full text-white flex items-center justify-center">
          <blockquote
            className="text-lg leading-9"
            dangerouslySetInnerHTML={{ __html: description }}
            ref={refDescription}
          />
        </div>
        <div className="w-full flex items-center">
          <div className="h-auto w-[400px] flex flex-wrap gap-4 items-center">
            {techs.map((tech, index) => {
              const active = tech === heading;
              const className = active ? "bg-white text-[#127357]" : "bg-[#127357] text-white"
              return (
                <Button
                  key={index}
                  type="button"
                  onClick={() => {
                    const newValue: any = heading === tech ? undefined : tech;
                    setHeading(newValue);
                  }}
                  className={classNames(
                    "py-2 px-4 rounded text-md font-extralight",
                    {
                      [className]: className
                    }
                  )}
                  active={active}
                >
                  {tech}
                </Button>
              );
            })}
          </div>
        </div>        
      </div>
    </section>
  );
};

import { createElement, useRef, useState } from "react";
import { technologies } from "~/utils";
import { Button } from "../Shared/Button";
import classNames from "classnames";

export const Technologies = () => {
  const refDescription = useRef<HTMLQuoteElement>(null);
  const initialDescription =
    technologies.find((tech) => tech.title === "default")?.description ?? "";

  const [heading, setHeading] = useState<string>("");
  const [description, setDescription] = useState<string>(initialDescription);

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
          <div className="h-auto w-[500px] flex flex-wrap gap-4 items-center">
            {technologies.map(({ title, description, icon }, index) => {
              const active = title === heading;
              const className = active
                ? "bg-white text-[#127357]"
                : "bg-[#127357] text-white";
              return (
                <>
                  {title !== "default" && (
                    <Button
                      key={index}
                      type="button"
                      onClick={() => {
                        const newValue: any =
                          heading === title ? undefined : title;
                        setHeading(newValue);
                        !newValue
                          ? setDescription(initialDescription)
                          : setDescription(description);
                      }}
                      className={classNames(
                        "py-2 px-4 rounded text-md font-extralight",
                        {
                          [className]: className,
                        }
                      )}
                      active={active}
                    >
                      <div className="flex gap-1.5 items-center">
                        {icon &&
                          createElement(icon, {
                            index,
                          })}
                        {title}
                      </div>
                    </Button>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

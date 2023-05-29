"use client";

import { Fragment, createElement, useRef, useState } from "react";
import classNames from "classnames";

import { technologies } from "../../utils";

import { Button } from "../Shared/Button";

export const Technologies = () => {
  const refDescription = useRef<HTMLQuoteElement>(null);
  const initialDescription =
    technologies.find((tech) => tech.title === "default")?.description ?? "";

  const [heading, setHeading] = useState<string | undefined>("");
  const [description, setDescription] = useState<string>(initialDescription);

  return (
    <section className="bg-[#010B40] lg:max-h-[500px] border py-10">
      <div className="w-[90%] md:max-w-[750px] lg:max-w-[1000px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-x-5 lg:gap-20 py-10">
      <div className="w-full text-white text-center lg:text-left flex items-center">
          <blockquote
            className="md:text-lg leading-9"
            dangerouslySetInnerHTML={{ __html: description }}
            ref={refDescription}
          />
        </div>
        <div className="w-full flex items-center">
          <div className="max-w-[500px] flex flex-wrap gap-4 justify-center mx-auto items-center">
            {technologies.map(({ title, description, icon }) => {
              const active = title === heading;
              const className = active
                ? "bg-white text-[#127357]"
                : "bg-[#127357] text-white";
              return (
                <Fragment key={title}>
                  {title !== "default" && (
                    <Button
                      type="button"
                      onClick={() => {
                        const newValue = heading === title ? undefined : title;
                        setHeading(newValue);
                        !newValue
                          ? setDescription(initialDescription)
                          : setDescription(description);
                      }}
                      className={classNames(
                        "py-1 px-2 md:py-2 md:px-4 rounded text-sm md:text-md font-extralight",
                        {
                          [className]: className,
                        }
                      )}
                    >
                      <div className="flex gap-1.5 items-center">
                        {
                          icon && createElement(icon, {
                            title
                          })
                        }
                        {title}
                      </div>
                    </Button>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

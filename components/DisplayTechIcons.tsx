import React from "react";
import { cn, getTechLogos } from "../lib/utils";
const DisplayTechComponents = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);
  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-200 rounded-full p-2 m-1 flex-center",
            index >= 1 && "-ml-3",
          )}
        >
          <span className="tech-tooltip">{tech}</span>
          <img src={url} alt="tech" className="w-8 h-8" />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechComponents;

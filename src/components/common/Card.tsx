import classNames from "classnames";

import { textClass, hoverColour } from "@/components/common/utils";

export interface Tag {
  name: string;
  colour?: string;
}

interface CardProps {
  title: string;
  description: string;
  link: string;
  tags: Tag[];
}

const Card = ({ title, description, link, tags }: CardProps) => {
  const cardClasses = classNames("p-4", hoverColour, textClass);

  return (
    <a
      className="p-4"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={cardClasses}>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
              <li key={index} className="flex items-center">
                {tag.colour && (
                  <span
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: tag.colour }}
                  />
                )}
                <span className="text-xs">{tag.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </a>
  );
};

export default Card;

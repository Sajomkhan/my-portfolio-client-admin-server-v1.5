import { socialmedias } from "../data/iconData";
import { Link as ScrollLink } from "react-scroll";

const SocialMedia = () => {
  return (
    <div className="flex flex-row md:flex-col gap-6 my-4">
      {socialmedias.map((socialmedia, index) => {
        const { icon, address } = socialmedia;

        return (
          <div key={index}>
            {address === "Contact" ? (
              <ScrollLink
                className="hover:cursor-pointer"
                to={address}
                offset={-80}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                <img
                  className="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300"
                  src={icon}
                  alt="Icon Image"
                />
              </ScrollLink>
            ) : (
              <a href={address} target="blank">
                <img
                  className="h-8 w-8 md:h-10 md:w-10 p-[1px] md:p-0.5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300"
                  src={icon}
                  alt="Icon Image"
                />
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;

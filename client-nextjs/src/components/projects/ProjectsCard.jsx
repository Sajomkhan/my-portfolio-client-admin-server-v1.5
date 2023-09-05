import Image from "next/image";
import Ecom_cloth from "public/projects/Ecom_cloth.jpg";

const ProjectsCard = () => {
  return (
    <div className="flex flex-col max-w-[375px] section_color shadow-lg py-4 px-3 rounded-lg">
      <div className="w-full h-[200px]">
        <Image
          alt="Projects Nameplate"
          width={1500}
          height={1500}
          className="w-full h-full object-cover rounded-lg"
          src={Ecom_cloth}
        />
      </div>
      <div className="flex flex-col mt-6 text-center gap-2 lg:text-left">
        <h1 className="text-xl font-bold">Ecommarce Food Shop </h1>
        <p className="text-base opacity-80 primary">MERN</p>
        <p className=" text-sm">
          Tech Stack: ReactJS, Redux, NodeJS, ExpressJS, MongoDB, TailwindCSS,
          MUI, AWS S3, SendGrid, Socket.IO{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;

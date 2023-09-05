import Image from "next/image";

const PreviewImage = ({ url, onClick }) => {
  return (
      <div className="p-1 border border-red-500/70 flex items-center relative">
        <button type="button" onClick={onClick} className="px-2 text-[12px] bg-red-600 rounded-sm absolute  top-0 right-0 z-10">
          X
        </button>
        <Image src={url} alt="image" width={100} height={60} priority />
      </div>
  );
};

export default PreviewImage;

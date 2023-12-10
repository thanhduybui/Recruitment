type CompanyLogoProps = {
  sm?: boolean;
};

export default function CompanyLogo(props: CompanyLogoProps) {
  return (
    <div
      className={`flex items-center justify-center  bg-white rounded-md border-2 border-gray-150 self-center ${
        props.sm ? "w-10 h-10" : "w-20 h-20"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/800px-FPT_logo_2010.svg.png"
        alt="Ảnh công ty"
        className="max-w-full max-h-full"
      />
    </div>
  );
}

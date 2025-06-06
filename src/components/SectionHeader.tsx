interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-blue-600 text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h3 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h3>
      <p className="text-center md:text-lg lg:text-xl text-slate-600 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

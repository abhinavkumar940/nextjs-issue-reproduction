export default function Heading({ children, className }) {
  const defaultClasses =
    "lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center  ";
  return (
    <div className={`${defaultClasses} ${className}`}>
      <h1>{children}</h1>
    </div>
  );
}

const Badge = ({ className, title }) => {
  return (
    <span
      className={`${className} text-sm font-medium mx-1 px-1 py-0.5 rounded-sm text-center`}
    >
      {title}
    </span>
  );
};

export default Badge;

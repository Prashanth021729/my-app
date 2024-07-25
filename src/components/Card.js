const Card = ({ title, description, link }) => {
    return (
      <div className="bg-white w-80 h-60 p-4 m-4  rounded-md text-black flex flex-col justify-between">
        <h1 className="text-xl text-center font-bold">{title}</h1>
        {description && <p className="mt-2">{description}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline self-start"
          >
            click here
          </a>
        )}
      </div>
    );
  };
  
  export default Card;
  
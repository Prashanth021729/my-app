const Project = ({ title, description, imageSrc, link, keyFeatures, bgColor }) => (
    <div className={`  ${bgColor}  p-6 `}>
        <img className="w-1/2 ml-80 rounded-lg mt-28" src={imageSrc} alt={title} />
        <h1 className="flex ml-80  text-2xl font-semibold text-white mt-3">{title}</h1>
        <p className=" mt-3 ml-80  w-1/2 flex text-white text-justify">{description}</p>
        <h2 className="mt-3 ml-80  text-xl font-medium text-white">Key Features</h2>
        <ul className="list-disc ml-96 mt-3 text-white">
            {keyFeatures.map((feature, index) => (
                <li key={index} className="text-justify">{feature}</li>
            ))}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-white underline ml-96 mt-2 block">View Project</a>
    </div>
);

export default Project;
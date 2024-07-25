const Section = ({ title, items }) => {
    return (
      <div className="mb-10 mt-20">
        <h2 className="text-2xl mb-4">{title}</h2>
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="m-2">{item}</li>
          ))}
        </ul>
      </div>
    );
  };
export default Section;
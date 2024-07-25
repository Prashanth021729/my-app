import Card from "./Card";
const contact1 = [
    {
       title:"Connect me on LinkedIn",
       description:"Let's build a meaningful connection",
       link:"https://www.linkedin.com/in/prashanthh",
    },
    {
        title:"Mail me on ",
        description:"Will Reach you out as soon as possible",
        link:"mailto:chanagoniprashanth@gmail.com",
    }
]

const Contact = ()=>{
    return(
        <div className="bg-black w-full text-white p-10 items-center justify-center">
            <div className="text-center mt-48">
                <h1 className="text-4xl font-semibold">Lets Connect 🤝</h1>
                <h1 className="text-2xl font-semibold">Looking for Full-time/Contract Opportunities</h1>    
            </div>
        <div className="bg-black mt-32  mb-14 flex justify-center items-center">
        {contact1.map((item,index)=>(
        <Card
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}/>
        ))}
        </div>
        </div>

    )
};
export default Contact;
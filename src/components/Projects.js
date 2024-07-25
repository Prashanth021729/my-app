import Project from "./Project";
const projects1 = [
    {
        title: "Netflix Clone",
        description: "The Netflix Clone is a dynamic web application built using React, Redux Toolkit, and Firebase, with a focus on leveraging modern React hooks for efficient state management and lifecycle handling. This project emulates the core functionalities of Netflix, providing users with a seamless and interactive media browsing experience.",
        imageSrc: ["/app.jpeg"],
        link: "https://netflix-gpt-85sl.vercel.app/",
        keyFeatures: [
            "User authentication and profile management.",
            "Real-time data synchronization with Firebase.",
            "Dynamic content fetching and display.",
            "Responsive design for various screen sizes."
        ],
        "bgColor": "bg-gray-500",
        "textColor":"text-black"
        
        
    },
    {
        title: "Eat App",
        description: "The Eat App is a web application designed to help users track their food intake and manage their dietary preferences. Built using React and Tailwind CSS, it provides a clean and user-friendly interface for logging meals, tracking nutritional information, and setting dietary goals.",
        imageSrc: ["/food.jpeg",],
        link: "https://github.com/Prashanth021729/Eat",
        keyFeatures: [
            "Live API data from SWiggy.",
            "User friendly With SEO optimization.",
            "Shimmer UI.",
        ],
        "bgColor": "bg-slate-500",
        "textColor":"text-White"
    },
    {
        title: "Chore-Champion",
        description: "Not a normal To-Do App desinged Backend REST APIS.The To-Do App is a task management application that helps users organize and track their daily tasks and responsibilities. Built with Express and node, it features a straightforward interface for adding, editing, and completing tasks, as well as categorizing tasks by priority and deadline.",
        imageSrc: "/todo-app.jpeg",
        link: "https://github.com/Prashanth021729/Chore-Champion",
        keyFeatures: [
            "Task creation and management.",
            "Priority and deadline categorization.",
            "Task completion tracking.",
            "Simple and intuitive user interface.",
            "REST API for GET,PUT,POST,Delete.",
            "MongoDB database for storing Data."
        ],
        "bgColor": "bg-slate-800" ,
        "textColor":"text-White"
        
    }
];

const Projects = () => (
    <div >
        {projects1.map((project, index) => (
            <Project key={index} {...project} />
        ))}
    </div>
);

export default Projects;


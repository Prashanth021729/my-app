import Section from "./Section";
const Skills = () => {
        return (
            <div className="w-full bg-black flex justify-center items-start p-10">
                <div className="w-full md:w-1/2 text-white">
                  <Section title="Programming Languages" items={["C#", "Python", "TypeScript", "JavaScript"]} />
                  <Section title="Frameworks / Libraries" items={["React", "Express", "Next.js", "Django"]} />
                  <Section title="Tools / IDE" items={["GitHub", "VS Code", "Anaconda Navigator", "PyCharm"]} />
                </div>
            </div>
)};    
export default Skills;
const Home = () => {
    return(
        <div className="flex w-full h-full mt-12 bg-black">
            <div className="pt-20 pl-40 w-1/2 text-white">
                <h1 className="text-4xl font-semibold">Hi,</h1>
                <h1  className="text-4xl font-semibold text-center"> I'm Prashanth here👨🏻‍💻!</h1>
                <p className="mt-7 text-wrap text-justify">Welcome to my portfolio website. I'm a passionate web developer with a knack for creating dynamic and user-friendly web applications. </p>  
                <p className="mt-2 text-wrap text-justify">My journey in web development started with a curiosity for how websites work and has grown into a full-fledged career where I get to build and innovate every day.</p>
                <h1 className="text-4xl font-semibold mt-7">About Me</h1>
                <p className="mt-7 text-wrap text-justify">With a strong foundation in React and a love for web development, I specialize in building responsive and interactive websites. My skills include React, TypeScript, JavaScript, Nextjs, Python and a variety of modern libraries and frameworks.</p> 
                <p className="text-justify mt-2">I thrive on challenges and am always eager to learn new technologies and improve my craft.</p>
                <p className="text-justify mt-2">Over the years, I have worked on numerous projects that showcase my ability to design and implement functional and aesthetically pleasing web interfaces.</p>
                <p className="text-justify mt-2"> Whether it's a personal project or a professional endeavor, I pour my creativity and technical skills into everything I do.When I'm not coding, you can find me exploring new tech trends or indulging in my hobbies like Playing Cricket🏏.</p>
                <h2 className="text-4xl font-semibold mt-7">Education👨🏻‍🎓</h2>
                <p className="text-justify mt-7">I hold a Master's degree in computer science from Texas A&M University, where I gained a solid understanding of computer science principles and honed my skills in Software Engineering.</p>
                <p className="text-justify mt-2"> My education provided me with the technical knowledge and problem-solving abilities that are crucial in this field.</p>
            </div>
            <div className="pt-20 w-1/2 ml-40 mt-44 rounded-lg">
                <img className="w-1/2 ml-20 rounded-md" src="/img.jpeg" alt="its me"/>
            </div>
        </div>
    )
};
export default Home;

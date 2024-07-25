const Navbar = () => {
    return(
        <div className="fixed top-0  left-0 right-0  flex bg-black p-7 justify-between shadow-lg ">
            <div>
                <h1 className="text-white mt-2 font-serif text-2xl flex ">Prashanth Chanagoni</h1>
            </div>
            <div>
            <ul className="flex space-x-20 mt-2 text-white font-serif text-2xl flex-wrap">
                <li><a href="/">About</a></li>
                <li><a href="/my-work">My Work</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
        </div>
    )
};

export default Navbar;
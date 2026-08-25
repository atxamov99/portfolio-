import { Link } from 'react-router-dom';
import logo from "../assets/images-removebg-preview.png"
import { BiRightArrow } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="bg-[#F5F0E6] text-black">
      <nav className='flex justify-around items-center static'>
        <img className='w-[100px] h-auto' src={logo} alt="" />

        <ul className="flex flex-wrap gap-4 p-4">
          <li><Link className='text-black transition-colors hover:text-[#6366F1]' to="/">Home</Link></li>
          <li><Link className='text-black transition-colors hover:text-[#6366F1]' to="/about">About</Link></li>
          <li><Link className='text-black transition-colors hover:text-[#6366F1]' to="/skills">Skills</Link></li>
          <li><Link className='text-black transition-colors hover:text-[#6366F1]' to="/projects">Projects</Link></li>
          <li><Link className='text-black transition-colors hover:text-[#6366F1]' to="/experience">Experience</Link></li>
          <li><Link className='text-black transition-colors hover:text-[#6366F1]' to="/contact">Contact</Link></li>
        </ul>

        <button className='border-1 border-[#6366F1] border-solid bg-none text-black p-2.5'>Let's talk</button>
      </nav>
      <hr />

      <div className="flex justify-around items-center">
        <div className="">
            <h1>Building Digital Products <br /> With Code & AI</h1>
            <p>Full-Stack Developer & AI Engineer focused on building modern web applications, <br /> intelligent systems and AI-powered products.</p>
            <div className="flex gap-1.5">
                <button className='bg-[#6366F1] rounded-2xl p-2.5 w-[140px] flex items-center text-amber-50'>View Projects <BiRightArrow/></button>
                <button className='border-1 border-[#0D0D16] border-solid rounded p-2.5'>Contact me</button>
            </div>
        </div>

        <div className="">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-3.5 w-3.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-3.5 w-3.5 rounded-full bg-[#28C840]" />
                </div>

                <p className='text-[#94A3B8]'>agent_neural_net_py</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
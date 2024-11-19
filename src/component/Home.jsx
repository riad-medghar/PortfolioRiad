import animation from "../assets/animation/Animation - 1731279373321.webm";
import animationse from "../assets/animation/Animation - 1731279373321.gif";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaTimes, FaBars} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import bgimage from "../assets/img/background-image/Animation - 1731402838666.json";
import Lottie from "lottie-react";
import emailjs from "emailjs-com"
function Home() {
    const [displayText, setDisplayText] = useState("Type your idea here: ");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [inputValue,setInputValue]= useState("");
    const [message,setMessage]=useState("");
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [email ,setEmail] = useState("");
    const [isMobileMenuOpen , setIsMobileMenuOpen]=useState(false);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const navLinks = [
        {href: "home", title: "Home"},
        {href: "about", title: "About"},
        {href: "services", title: "Services"},
        {href: "contact", title: "Contact"}
    ];
    const images=[
        {src:"src/assets/img/languageimages/C_Programming_Language.svg.png",alt:"C"},
        {src:"src/assets/img/languageimages/ISO_C++_Logo.svg.png",alt:"C++"},
        {src:"src/assets/img/languageimages/Python-logo-notext.svg.png",alt:"Python"},
        {src:"src/assets/img/languageimages/JavaScript-logo.png",alt:"JavaScript"},
        {src:"src/assets/img/languageimages/React-icon.svg.png",alt:"React"},
        {src:"src/assets/img/languageimages/PHP-logo.svg.png",alt:"PHP"},
        {src:"src/assets/img/languageimages/Sql_data_base_with_logo.svg.png",alt:"SQL"},
        {src:"src/assets/img/languageimages/SQLite370.svg.png",alt:"SQLite"},
        {src:"src/assets/img/languageimages/HTML5_logo_and_wordmark.svg.png",alt:"HTML"},
        {src:"src/assets/img/languageimages/CSS3_logo_and_wordmark.svg.png",alt:"CSS"},
        {src:"src/assets/img/languageimages/Tailwind_CSS_Logo.svg.png",alt:"Tailwind CSS"},
        {src:"src/assets/img/languageimages/c823e53b3a1a7b0d36a9.png",alt:"Flutter"},
    ];
    const services = [
        {
          title: "Building Websites",
          description: "I provide comprehensive website development services, including front-end and back-end development, responsive design, and SEO optimization. Whether you need a simple landing page or a complex web application, I can help you build a website that meets your needs and exceeds your expectations."
        },
        {
          title: "Mobile Apps",
          description: "I offer mobile app development services for both iOS and Android platforms. From concept to deployment, I can help you create a mobile app that provides a seamless user experience and meets your business goals."
        },
        {
          title: "Desktop Programs",
          description: "I develop desktop applications for various operating systems, including Windows, macOS, and Linux. Whether you need a utility tool, a productivity application, or a custom software solution, I can help you build a desktop program that fits your requirements."
        },
        {
          title: "Job Automation",
          description: "I provide job automation services to help you streamline your workflows and increase efficiency. From automating repetitive tasks to integrating different systems, I can help you save time and reduce errors with custom automation solutions."
        },
        {
          title: "Real World Ideas",
          description: "I help bring your real-world ideas to life with custom software solutions. Whether you have an innovative concept or a specific problem to solve, I can work with you to develop a solution that meets your needs and achieves your goals."
        },
      ];
    
    useEffect(() => {
        const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) =>(prevIndex + 1) % images.length);
        },2000);
        return () => clearInterval(interval);
    },[images.length]);
    useEffect(() => {
        const interval = setInterval(()=>
        {
            setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        },6000);
        return () => clearInterval(interval);
    },[services.length]);
    const handleNextService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    };
    const handlePrevService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };
    const handleShareIdea = () =>{
        setIsModalOpen(true);
    };
    const handleSendEmail =(e) =>{
      e.preventDefault();
      const templateParams = {
        from_name:email,
        message : inputValue,
      };
      emailjs
      .send("service_6fq26y7","template_o7jwodl",templateParams,"N-sFHQEYH-JnNkefr")
      .then(
        (response)=>{
          console.log("SUCCESS!",response.status,response.text);
          setEmail("");
          setInputValue("");
          setIsModalOpen(false);
        },
        (error)=>{
          console.log("FAILED....",error);
        }
      );
    }
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
      };


  return (
    <div className="bg-gray-800 min-h-screen pt-4 ">
        <nav className="flex justify-center space-x-4 p-4 bg-emerald-700 text-white rounded-full 
        mx-auto w-max h-14 my-3 shadow-2xl">
            <ul className="hidden md:flex  space-x-4">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={`#${link.href}`} className="hover:text-transparent 
                        hover:bg-clip-text hover:bg-gradient-to-r
                         hover:from-purple-400 hover:to-pink-500
                         hover:scale-110 transition-transform duration-300
                         hover:text-lg">{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="md:hidden ">
                <button onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? <FaTimes size={24} />: <FaBars size={24} />}
                </button>
            </div>
        </nav>
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 bg-emerald-700
          text-white p-4 rounded-lg shadow-2xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.href}`}
                  className="hover:text-transparent hover:bg-clip-text 
                  hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 
                  hover:scale-110 transition-transform duration-300 hover:text-lg"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
      )}
        <div id="home" className="flex flex-col md:flex-row justify-center items-center mt-36 space-y-4 md:space-x-4 md:space-y-0  relative -top-20 bg-[url('data:image/svg+xml;base64,'+bgimage)]">
     
            <div className="bg-gray-900 text-green-500 p-6 rounded-lg shadow-lg w-96 h-96 font-mono border border-gray-700">
                {/* Terminal Header */}
                <div className="flex items-center space-x-2 mb-4 bg-gray-800 p-2 rounded-t-lg">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                {/* Terminal Content */}
                <div className="mb-4">
                    <h2 className="text-lg font-bold flex justify-center text-green-400">~/ Describe Your Idea</h2>
                    <p className="mt-2 text-gray-300">
                        Please describe the idea you want to work on with me:
                    </p>
                </div>

                <div className="mt-4 relative">
                
                    <p>{displayText}<span className="font-bold text-lg text-green-500 animate-blink">|</span></p>
        
                    <textarea
                        className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none resize-none mt-4"
                        rows="4"
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                    ></textarea>
                    <div className="flex justify-center ">
                    <button className="bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-600
                     transition-colors duration-300
                      border-green-500"
                      onClick={handleShareIdea}>Share Your Idea</button>
                    </div>
                   
                </div>
            </div>
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 h-96 flex justify-center items-center">
            {/* Replace with your animation */}
                <div className="text-center">
                    <h2 className="text-xl font-bold">Welcome!</h2>
                    <p className="mt-2">I'm excited to work with you!</p>
                    {/* Placeholder for animation */}
                    <div className="mt-4">
                        <img src={animationse} alt="Programmer Animation" />
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-600 my-2 mx-4"></div>
        <div id="about" className="my-16">
        <div className="flex flex-col md:flex-row justify-center items-center  space-y-4 md:space-y-0 md:space-x-4">
          {/* Left Box */}
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 min-h-56 ">
            <div className="text-center">
              <h2 className="text-xl font-bold mt-7 mb-16">Languages I Know</h2>
              <div className="mt-10">
                <div className="relative">
                    {images.map((image, index) => (
                        <div key={index} className={`absolute inset-0 flex flex-col
                             items-center justify-center transition-opacity duration-1000 mt-2
                         ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}> 
                         <img src={image.src} alt={image.alt} className="w-16 h-16 " />
                            <p className="text-sm mt-2">{image.alt}</p>
                         </div>   
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right Box */}
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-2/5  min-h-56">
            <div className="text-center">
              <h2 className="text-xl font-bold">About Me</h2>
              <p className="mt-2">
                I am a passionate developer with skills in various programming languages. I enjoy working on innovative projects and solving complex problems. My interests include web development, machine learning, and open-source contributions. I chose this type of work because it allows me to continuously learn and grow while making a positive impact.
                <br /><br />
                I know C, Python, React, JavaScript, PHP, SQL, SQLite, HTML, CSS, C++, and I have knowledge in linear algebra and databases.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 my-2 mx-4"></div>
      <div id="services" className="flex flex-col bg-gray-900 min-h-screen md:h-96">
        <h1 className="flex justify-center items-center mt-3 font-extrabold italic 
       text-3xl  md:text-5xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text 
        text-transparent mb-4 ">Services</h1>
        <div className="relative overflow-hidden flex-grow">
          <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentServiceIndex * 100}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 text-white p-6 flex-shrink-0 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-blue-500">{service.title}</h2>
                  <p className="mt-2 w-full md:w-96 bg-gradient-to-b from-lime-700 via-teal-600 to-blue-300 bg-clip-text text-transparent">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <button onClick={handlePrevService} className="bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
              Prev
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <button onClick={handleNextService} className="bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
              Next
            </button>
          </div>
        </div>
      </div><div className="border-t border-gray-600 my-2 mx-4"></div>
<div id="contact" className="flex flex-col justify-center items-center">
  <h2 className="font-bold mb-6 text-3xl mt-5 bg-gradient-to-r from-emerald-600 to-teal-400 text-transparent bg-clip-text">Contact Me</h2>
  
  <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Social Media</h2>
      <ul className="space-y-4">
        <li>
          <a href="https://www.facebook.com/yourprofile" className="flex items-center space-x-2 text-blue-500 hover:underline">
            <FaFacebook className="w-6 h-6" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yourprofile" className="flex items-center space-x-2 text-pink-500 hover:underline">
            <FaInstagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yourprofile" className="flex items-center space-x-2 text-blue-700 hover:underline">
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourprofile" className="flex items-center space-x-2 text-blue-400 hover:underline">
            <FaTwitter className="w-6 h-6" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/yourprofile" className="flex items-center space-x-2 text-gray-900 hover:underline">
            <FaGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full md:w-2/5 mb-7">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Write Me a letter</h2>
      <form onSubmit={handleSendEmail}>
        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-white mb-2">Your Email</label>
          <input 
            type="email" 
            id="userEmail" 
            className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Your Message</label>
          <textarea 
            id="message" 
            className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none" 
            rows="4" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required></textarea>
        </div>
        <button type="submit" className="bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300">Send</button>
      </form>
    </div>
  </div>
</div>
{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      <button
        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        onClick={() => setIsModalOpen(false)}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">Enter Your Email</h2>
      <form onSubmit={handleSendEmail}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
          Send
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  );
}
export default Home;
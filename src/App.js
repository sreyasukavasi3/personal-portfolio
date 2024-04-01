import Masthead from './img/pic1.jpg';
import {useState} from "react";
import ProjectCard from "./Components/ProjectCard";
import WorkCard from "./Components/WorkCard";
import {categories, projects, workExperience, certifications} from './Data';
import CertificationsCard from "./Components/CertificationsCard";



function App() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	function getProjects() {
		if (selectedCategory !== "All") {
			return projects.filter(project => project.category.includes(selectedCategory));
		} else {
			return projects;
		}
	}

	return (
		<>
			<div className="container">
				{/* NAVIGATION */}
				<nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
					<div className="container-fluid">
						{/* Logo */}
						{/*<a className="navbar-brand" href="#">*/}
						{/*	<img src={Logo} alt="Bootstrap" width={50}/>*/}
						{/*</a>*/}

						{/* Hamburger Menu */}
						<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-links">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* Navbar Links */}
						<div className="collapse navbar-collapse d-sm-flex flex-row-reverse" id="navbar-links">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="#about">About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#certifications">Certifications</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#work">Work</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#projects">Projects</a>
								</li>
								
								
							</ul>
						</div>
					</div>
				</nav>

				{/* HEADER */}
				<section id="header">
					<div className="row align-items-center">
						<div className="col-12 col-sm-6">
							<img src={Masthead} alt="" width="100%"/>
						</div>

						<div className="col-12 col-sm-6">
							<h2 className={"mb-0"}>Hi, I'm</h2>
							{/*, borderBottom: "5px solid #00e676"*/}
							{/* <h1 style={{color: "#00e676"}}>Sreya Sukhavasi</h1> */}
							<h1 style={{color: "#7251e6"}}>Sreya Sukhavasi</h1>
							<h3>Software Engineer, </h3>

							<div className="hstack gap-3">
								<a className="link-light" href="https://www.linkedin.com/in/sreya-sukhavasi/"
								   target="_blank">
									<i className="bi bi-linkedin"/>
								</a>
								<a className="link-light" href="https://github.com/sreyasukavasi3" target="_blank">
									<i className="bi bi-github"/>
								</a>
								<a className="link-light" href="mailto:sreyasukavasi3@gmail.com" target="_blank">
									<i className="bi bi-envelope"/>
								</a>
								<a className="link-light" href="https://www.instagram.com/sreya_sukavasi/" target="_blank">
									<i className="bi bi-instagram"/>
								</a>
							</div>

							<a
								className="btn btn-outline-danger mt-4 px-5"
								role="button"
								// href={Resume}
								>
								<span>Contact me for Resume</span>
							</a>
						</div>
					</div>

					<a href="#about"><i className="bi bi-chevron-down fs-1 fw-bold chevron text-light"/></a>
				</section>

				{/*	ABOUT */}
				<section id="about" className="mt-3">
					<h2>About Me</h2>
					<p className="lead">
  Aloha! I'm Sreya, and I recently graduated with a Master's in Computer Science from Arizona State University, proudly securing a 4.0 GPA. I’m a Software Engineer, proficient in Java, Python, JavaScript, React, HTML, and CSS.
</p>
<p className="lead">
  In one of my most memorable experiences, I collaborated with Nobel Laureate Dr. Leland Hartwell, assisting in the creation of visual cognition experiments using Python and JavaScript. I streamlined a RESTful web app hosting 14 cognition experiments using a MERN stack (MongoDB, Express.js, React, and Node.js) with seamless deployment on AWS EC2. This hands-on involvement in cutting-edge research ignited my love for coding and its real-world applications.
</p>
<p className="lead">
  But my journey isn't just about academic achievements. Before my U.S. adventure, I delved into the professional realm as a Decision Analytics Associate at ZS Associates. My role involved crafting internal tools using Java, Python, and React, emphasizing the importance of rigorous testing and efficient CI/CD pipelines.
</p>
<p className="lead">
  Now, for the real talk. Life isn't always a smooth ride. I faced setbacks and uncertainties, just like many others. There was a time when I questioned my path. However, these challenges didn't define me; they fueled my resilience. Switching gears and navigating uncertainties has made me a stronger, more adaptable individual, both in life and in coding.
</p>
<p className="lead">
  As I dive into the world of software engineering, I approach each coding challenge with the same tenacity that helped me overcome personal hurdles. My story is a testament to the belief that setbacks are not roadblocks but opportunities for growth.
</p>
<p className="lead">
  In the words of Steve Jobs, 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.' I'm here to make that impact, contribute to meaningful projects, and keep pushing boundaries in the world of software engineering.
</p>
<p className="lead">
  I'm interested in full-time Software Engineer roles. Please feel free to get in touch with me via email at sreyasukavasi3(at)gmail(dot)com
</p>

				</section>

				{/*	CERTIFICATIONS */}
				<section id="certifications" className="mt-5">
					<h2>Certifications</h2>

					<div className="row g-2">
						{
							
							certifications.map(certifications => (
								<div className="col-12 col-md-6 col-lg-4">
									<CertificationsCard certifications={certifications}/>
								</div>
							))
						}
						
					</div>
				</section>

				{/*	WORK */}
				<section id="work" className="mt-5">
					<h2>Work Experience</h2>

					<div className="row g-2">
						{
							workExperience.map(work => (
								<div className="col-12 col-md-6 col-lg-4">
									<WorkCard work={work}/>
								</div>
							))
						}
					</div>
				</section>

				

				{/*	PROJECTS */}
				<section id="projects" className="mt-5">
					<h2>Projects</h2>

					{/*	PROJECTS */}
					<div className="row g-2 mt-3">
						{
							getProjects().map(project => (
								<div className="col-12 col-md-6 col-lg-3">
									<ProjectCard project={project}/>
								</div>
							))
						}
					</div>
				</section>
			</div>

			{/*	Back to top */}
			<div className="sticky-md-bottom float-end">
				<div className="text-center">
					<a href="#" className="nav-link">
						<i className="bi bi-caret-up-fill"></i> Back to top
					</a>
				</div>
			</div>
		</>
	);
}

export default App;

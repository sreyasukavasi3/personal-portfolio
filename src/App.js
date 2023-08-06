import Masthead from './img/pic1.jpg';
import {useState} from "react";
import ProjectCard from "./Components/ProjectCard";
import WorkCard from "./Components/WorkCard";
import {categories, projects, workExperience, certifications} from './Data';
import CertificationsCard from "./Components/CertificationsCard";
import Resume from './resume_FT_4.pdf'


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
									<a className="nav-link" href="#projects">Projects</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#work">Work</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#certifications">Certifications</a>
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
							{/*<h3>Software Engineer, </h3>*/}

							<div className="hstack gap-3">
								<a className="link-light" href="https://www.linkedin.com/in/sreya-sukhavasi/"
								   target="_blank">
									<i className="bi bi-linkedin"/>
								</a>
								<a className="link-light" href="https://github.com/sreyasukavasi3" target="_blank">
									<i className="bi bi-github"/>
								</a>
								<a className="link-light" href="mailto:sreyasukavasi3@gmail.edu" target="_blank">
									<i className="bi bi-envelope"/>
								</a>
								<a className="link-light" href="https://www.instagram.com/sreya_sukavasi/" target="_blank">
									<i className="bi bi-instagram"/>
								</a>
							</div>

							<a className="btn btn-outline-danger mt-4 px-5" role="button"
							   href={Resume} download={"Sreya_Sukhavasi_Resume.pdf"}>
								<i className="bi bi-download"/> Resume
							</a>
						</div>
					</div>

					<a href="#about"><i className="bi bi-chevron-down fs-1 fw-bold chevron text-light"/></a>
				</section>

				{/*	ABOUT */}
				<section id="about" className="mt-3">
					<h2>About Me</h2>
					<p className="lead">
					I am a highly motivated and dedicated software developer with a unique perspective that I bring to the table. As a self-learner, I am always eager to explore new technologies and acquire fresh knowledge. 
					With 6 months of internship and 6 months of full-time experience, 
					I have gained valuable practical exposure in the field. 
					My passion lies in solving real-life challenges and analyzing existing systems, 
					envisioning innovative ways to enhance their efficiency. 
					Continuously upgrading my skills to meet current industry requirements, 
					I have undertaken various projects that have honed my problem-solving abilities and software engineering expertise. With a master's degree in Computer Science from Arizona State University, expected in December 2023, I am an international student ready to make a significant impact in the world of software development.
					</p>
				</section>

				{/*	PROJECTS */}
				<section id="projects" className="mt-5">
					<h2>Projects</h2>

					{/* Filters */}
					{/* <div className="row g-2">
						{
							categories.map(category => (
								<div className="col-6 col-sm-4 col-md-3 col-lg-2">
									<button
										className={`btn rounded-pill ${selectedCategory === category[0] ? 'btn-' : 'btn-outline-'}${category[1]} w-100 }`}
										onClick={() => setSelectedCategory(category[0])}>
										{category[0]}
									</button>
								</div>
							))
						}
					</div> */}

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

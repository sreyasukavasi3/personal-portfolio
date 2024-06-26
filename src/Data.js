const categories = [
	["All", "light"],
	["Web", "success"],
	["Python", "warning"],
	["HTML/CSS", "primary"],
	["Javascript", "danger"],
	// ["C/C++", "info"]
]

const certifications = [
	{
		"img": require('./img/certifications/Agile.jpg'),
		"title": "Agile with Atlassian Jira",
		"description": "",
		"link": "https://www.coursera.org/account/accomplishments/verify/RZPG6MPUHLBF",
		"date": ""
	},
	{
		"img": require('./img/certifications/PostmanAPI.jpg'),
		"title": "Postman API Fundamentals Student Expert",
		"description": "",
		"link": "https://badgr.com/public/assertions/Cj2MTf7URRCcB9iPiM364g?identity__email=sreyasukavasi3@gmail.com",
		"date": ""
	},
	{
		"img": require('./img/certifications/ML.jpg'),
		"title": "Fundamentals of Machine Learning",
		"description": "",
		"link": "https://coursera.org/share/6d38b9c3e8d7127c30be4e9baa263a87",
		"date": ""
	},
	{
		"img": require('./img/certifications/DL.jpg'),
		"title": "Fundamentals of Deep Learning for Computer Vision",
		"description": "",
		"link": "https://courses.nvidia.com/certificates/4570289b652d441db1c8a10144716ff2",
		"date": ""
	},
]

const workExperience = [
	{
		"title": "Coding and Research Aide, Arizona State University",
      "period": "May 2022 - Dec 2023",
      "responsibilities": [
        "Streamlined a Full Stack REST API-based web app, hosting 14 visual cognition experiments for Noble Laureate Dr. Leland Hartwell, utilizing MongoDB Atlas, Express.js, React, and Node.js, with deployment on AWS EC2.",
        "Orchestrated agile methodology, communicated with stakeholders to meet requirements, and executed personalized experiment versions, yielding an 87% surge in user engagement.",
        "Integrated the file upload directly to S3 via API Gateway and Lambda function using a pre-signed URL.",
        "Designed 30+ experiments with the professor using Python in PsychoPy, later converted to JavaScript for Pavlovia"
      ],
	},
	{
		"title": "Decision Analytics Associate, ZS Associates",
		"period": "Jul 2021 - Dec 2021",
		"responsibilities": [
			"Engineered Java-based email automation application using Spring framework in test-driven development, saving $2M, cutting 24 weekly engineer hours, and reducing manual intervention for prioritized emails with 100% accuracy.",
			"Developed a tool using Python for real-time monitoring of business alignments for 15 products, enhancing tracking efficiency and seamlessly integrating updated information.",
			"Revamped legacy R code to Python, enhancing functionality and performance and reducing data check time by 50%.",
			"Developed Kafka consumers to process and analyze real-time data streams, designed RESTful APIs for data retrieval and visualization, and utilized WebSocket for real-time data updates on the user interface.",
			"Implemented event-driven functions using AWS Lambda, eliminating infrastructure management, and reducing operational time by 30%, enabling faster code execution and deployment.",
			"Collaborated closely with 4 cross-functional teams to gather requirements, design robust software solutions, conduct code reviews, and implement using Agile methodologies, ensuring effective collaboration and timely project delivery."
		],
	},
	{
		"title": "Associate Intern, ZS Associates",
		"period": "Jan 2021 - Jun 2021",
		"link": "",
		"responsibilities": [
			"Employed SQL to extract and process 85+ complex datasets, facilitating knowledge discovery and informed decision-making. ",
			"Architected visually appealing and interactive user interfaces using React's declarative syntax, CSS styles (CSS3), and JavaScript, with Redux for efficient state management.",
			"Integrated Node.js, npm, React, Redux, and various React libraries to deliver 7 robust and scalable solutions.",
			"Develop 120+ comprehensive unit tests using industry-standard testing frameworks such as JUnit, guaranteeing the functionality and integrity of individual components and modules.",
			"Mastered Git for version control, collaborated seamlessly on GitHub, and expertly implemented CI/CD pipelines for Docker-based applications using AWS Code Pipeline or Jenkins."
		  ],
	},
	// {
	// 	"title": "Student Graphic Designer",
	// 	"description": "",
	// 	"startDate": "",
	// 	"endDate": "",
	// 	"link": "",
	// 	"category": "Student Job"
	// },
]


const projects = [
	{
		"img": require('./img/projects/MERN.jpg'),
		"title": "Science-of-Me",
		"description": "Created 'Science-Of-Me', a streamlined MERN website hosting cognition experiments for Nobel Laureate Dr. Leland Hartwell. Utilized MongoDB, Express.js, React, and Node.js, with AWS Amplify deployment. Emphasized user-centric feature development, fostering personalized experiment versions, increased user engagement, and enhanced interactivity.",
		"techstack": "Tech Stack: MongoDB Atlas, Express.js, React JS, Node.js, AWS EC2, API.",
		"link": "https://github.com/sreyasukavasi3/Science-of-Me",
		// "category": "Android"
	},
	{
		"img": require('./img/projects/NYCTaxi.jpg'),
		"title": "New York City Taxi Ride Time Analysis",
		"description": "Processed Spatio-temporal big data with Spark in the Hadoop cluster to identify NYC's top pick-up areas from taxi drop-off data, resulting in a 40% increased pick-up rate and 80% faster processing",
		"techstack": "Tech Stack: Apache Spark, Hadoop, Scala, Python.",
		"link": "https://github.com/sreyasukavasi3/Hotspot-analysis-of-Geospatial-data",
		// "category": "Android"
	},
	{
		"img": require('./img/projects/OnlineCar.jpg'),
		"title": "Online Car Parking System",
		"description": "Designed an Online Car Parking System that enabled real-time parking management, reservations, and efficient data handling. I utilized Spring and Hibernate for CRUD operations on an MySQL, enhancing user experience by reducing retrieval times. Additionally, I incorporated secure credit card processing, facilitating seamless online transactions for payments",
		"techstack": "Tech Stack: Java, Spring, Hibernate, MySQL.",
		"link": "https://github.com/sreyasukavasi3/Parking_System",
		// "category": "Python"
	},
	{
		"img": require('./img/projects/MedECare.jpg'),
		"title": "Med-E-Care",
		"description": "Revolutionized E-commerce using Python with Flask, PostgreSQL, JavaScript, HTML, and CSS for efficient procurement. Complemented by an ML and NLP chatbot for enhanced user engagement and COVID-19 data in online healthcare.",
		"techstack": "Tech Stack: Python, Flask, PostgreSQL, JavaScript, HTML, CSS, ML, NLP.",
		"link": "https://github.com/sreyasukavasi3/Med-E-Care_",
		// "category": "Python"
	},
	{
		"img": require('./img/projects/todolist.jpg'),
		"title": "To-Do List",
		"description": "Spearheaded the development of a TypeScript-based 'To-Do List' application, featuring an array of user-friendly task management capabilities. This intuitive system enabled users to efficiently add tasks, remove them, and track their status, resulting in a significant enhancement of overall productivity.",
		"techstack": "Tech Stack: TypeScript, Jest",
		"link": "https://github.com/sreyasukavasi3/To_Do_List",
		// "category": "Python"
	},
	{
		"img": require('./img/projects/browserext.jpg'),
		"title": "Social Browser Extension",
		"description": "This project creates a personalized news recommendation system using NLP, web scraping, and machine learning to deliver relevant news articles based on the user's browsing history.",
		"techstack": "Tech Stack: Natural Language Processing, Web Scraping, Chrome history API, HTTP Server.",
		"link": "https://github.com/sreyasukavasi3/Social_Browser_Extention/tree/main",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/Steg.jpg'),
		"title": "Steganography: Image Processing using Python",
		"description": "Implemented steganography techniques to encrypt data and conceal it within images, enhancing data security.",
		"techstack": "Tech Stack: Python, Digital Image Processing, Vigenere cipher algorithm.",
		"link": "https://drive.google.com/file/d/1QxOG57uhsvEym-Zhpju4O4LJJzO_BR4l/view?usp=sharing",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/SER.jpg'),
		"title": "Speech Emotion Recognition System",
		"description": "Programmed a speech emotion recognition system utilizing Convolutional Neural Network (CNN) to classify individuals emotions into 6 categories with 89% accuracy using speech signal features from the RAVDESS and TESS datasets.",
		"techstack": "Tech Stack: Python, Machine Learning, NumPy, Pandas, TensorFlow, PyTorch, Scikit-learn, Jupyter Notebook.",
		"link": "https://colab.research.google.com/drive/1pE8FLzAtvirzpFPbVqBJUTZIQffhHeFQ?usp=sharing",
		// "category": "Python"
	},
	// {
	// 	"img": "",
	// 	"title": "Formula 1 Dashboard",
	// 	"description": "",
	// 	"link": "https://ninkuk.github.io/F1-Viz-Dashboard/",
	// 	"category": "Javascript"
	// },
	// {
	// 	"img": "",
	// 	"title": "American Food Access Visualizations",
	// 	"description": "",
	// 	"link": "https://github.com/Ninkuk/American-Food-Access-Visualization",
	// 	"category": "Javascript"
	// },
	// {
	// 	"img": require('./img/projects/asu.png'),
	// 	"title": "ASU Automation Scripts",
	// 	"description": "Python scripts to automate myASU and Canvas tasks. Includes utilities for class search and availability.",
	// 	"link": "https://github.com/Ninkuk/ASU_Scripts",
	// 	"category": "Python"
	// },
	// {
	// 	"img": "",
	// 	"title": "Photoshelter Migration",
	// 	"description": "",
	// 	"link": "",
	// 	"category": "Python"
	// },
]




export {categories, certifications, workExperience, projects};

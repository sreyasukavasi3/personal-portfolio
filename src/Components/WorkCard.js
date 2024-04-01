import React from 'react';

function WorkCard(props) {
	return (
		<div className="card text-bg-dark bg-transparent border border-2 border-light border-opacity-25">
			<div className="card-work-body">
				<h5 className="card-title">{props.work.title}</h5>
				<p className="card-text">{props.work.description}</p>
				<p className="card-period">{props.work.period}</p>
				{/* <ul>
          {props.work.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul> */}
				{/*<a href={props.work.link} className="btn btn-primary stretched-link">Go somewhere</a>*/}
			</div>
		</div>
	);
}

export default WorkCard;

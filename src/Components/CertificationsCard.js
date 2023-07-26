import React from 'react';

function CertificationsCard(props) {
	return (
		<div className="card text-bg-dark bg-transparent border border-2 border-light border-opacity-25">
    		<img src={props.certifications.img} className="card-img-top fixed-image" alt={props.certifications.title}/>
    		<div className="card-body">
        		<h5 className="card-title">{props.certifications.title}</h5>
        		<p className="card-text">{props.certifications.description}</p>
				<a href={props.certifications.link} className="stretched-link" target="_blank" rel="noreferrer"/>
        		{/* <a href={props.project.link} className="btn btn-primary stretched-link">Go somewhere</a> */}
    		</div>
		</div>

	);
}

export default CertificationsCard;

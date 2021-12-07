'use strict';

$(document).ready(init);

function init() {
	createProjects();
	renderProjects();
	renderModal();
	$('.contact-button').click(email);
}

function renderProjects() {
	const projects = getProjects();
	const strHTML = projects.map((project) => {
		return `
		<div class='col-md-3 col-sm-6 portfolio-item'>
				<a class='portfolio-link' data-toggle='modal' href='#portfolioModal${project.id}'>
					<div class='portfolio-hover'>
						<div class='portfolio-hover-content'>
							<i class='fa fa-plus fa-3x'></i>
						</div>
					</div>
					<img class='img-fluid' src='img/portfolio/${project.id}.jpg' alt='' />
				</a>
				<div class='portfolio-caption'>
					<h5>${project.name}</h5>
					<p>${project.title}</p>
				</div>
			</div>
		`;
	});
	$('.my-projects').html(strHTML);
}

function renderModal() {
	const projects = getProjects();
	const strHTML = projects.map((project) => {
		return `
				<div class="portfolio-modal modal fade"
			id="portfolioModal${project.id}"
			tabindex="-1"
			role="dialog"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="close-modal" data-dismiss="modal">
						<div class="lr">
							<div class="rl"></div>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-lg-8 mx-auto">
								<div class="modal-body">
									<h2>${project.name}</h2>
									<p class="item-intro text-muted">
										${project.title}
									</p>
									<img
										class="img-fluid d-block mx-auto"
										src="img/portfolio/${project.id}.jpg"
										alt=""
									/>
									<p>
									${project.desc}
									</p>
									<ul class="list-inline">
										<li class="text-lg" >Created at: ${project.publishedAt}</li>
										<a class="btn btn-primary" target="blank" href="${project.url}">Check it out!</a>
										<li>Category: ${project.labels}</li>
									</ul>
									<button
										class="btn btn-primary"
										data-dismiss="modal"
										type="button"
									>
										<i class="fa fa-times"></i>
										Close Project
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	});
	$('.my-modal').html(strHTML);
}

function email() {
	var email = $('.email').val();
	var subject = $('.subject').val();
	var text = $('.text').val() + ' my email is:';

	window.open(
		`https://mail.google.com/mail/?view=cm&fs=1&to=tomofekrytt@gmail.com&su=${subject}&body=${text}${email}`
	);
}

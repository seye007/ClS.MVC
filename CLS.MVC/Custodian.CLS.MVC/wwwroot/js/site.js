
document.addEventListener('DOMContentLoaded', function () {
	var navLinks = document.querySelectorAll('.general-box ul li');

	navLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			var targetId = this.querySelector('a').getAttribute('href');
			var targetContent = document.querySelector(targetId);

			// Hide all content sections
			var contentSections = document.querySelectorAll('.nav-items-contents');
			contentSections.forEach(function (section) {
				section.classList.add('d-none');
			});

			// Show the selected content section
			targetContent.classList.remove('d-none');

			// Remove 'active' class from all nav links
			navLinks.forEach(function (navLink) {
				navLink.classList.remove('active-nav-item');
			});

			// Add 'active' class to the clicked nav link
			this.classList.add('active-nav-item');
		});
	});
});

function toggle1() {
	document.getElementById("claim_status_form").classList.add("d-none");
	document.getElementById("make_claim_form").classList.remove("d-none");
}

function toggle2() {
	document.getElementById("make_claim_form").classList.add("d-none");
	document.getElementById("claim_status_form").classList.remove("d-none");
}
document.addEventListener("DOMContentLoaded", function () {
	var flipCards = document.getElementsByClassName("flip-card");

	for (var i = 0; i < flipCards.length; i++) {
		flipCards[i].addEventListener("mouseover", flipCard);
		flipCards[i].addEventListener("mouseout", flipCard);
	}

	function flipCard(event) {
		var card = event.currentTarget;
		var inner = card.querySelector(".flip-card-inner");

		if (event.type === "mouseover") {
			inner.style.transform = "rotateY(180deg)";
		} else if (event.type === "mouseout") {
			inner.style.transform = "rotateY(0deg)";
		}
	}
});
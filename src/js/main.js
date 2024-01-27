// Copyright (c) 2024 Logan Dhillon. All rights reserved.

async function loadContentIntoElement(staticUri, tagName) {
	try {
		const element = document.getElementsByTagName(tagName)[0];
		const response = await fetch(staticUri);

		if (!response.ok) {
			throw new Error(`Network response for ${tagName} was not ok`);
		}

		const content = await response.text();
		element.innerHTML = content;
	} catch (error) {
		console.error('Error:', error);
	}
}

// Get header & footer from static
document.addEventListener('DOMContentLoaded', async function () {
	await loadContentIntoElement('/src/static/header.html', 'header');
	await loadContentIntoElement('/src/static/footer.html', 'footer');
});

/**
 * `data-replace` value. Replaces key with value on load.
 * @example data-replace="{'replace-this': 'with-this'}" (HTML)
 */
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		var replacers = document.querySelectorAll('[data-replace]');
		for (var i = 0; i < replacers.length; i++) {
			let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
			Object.keys(replaceClasses).forEach(function (key) {
				replacers[i].classList.remove(key);
				replacers[i].classList.add(replaceClasses[key]);
			});
		}
	}, 1);
});
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

document.addEventListener('DOMContentLoaded', async function () {
	// Get header & footer from static
	await loadContentIntoElement('/src/static/header.html', 'header');
	await loadContentIntoElement('/src/static/footer.html', 'footer');
});
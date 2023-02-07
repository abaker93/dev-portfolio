export const Accent = () => {
	const queryAccents = document.querySelectorAll(".accent");

	for (let i = 0; i < queryAccents.length; i++) {
		const accent = queryAccents[i].innerHTML
		queryAccents[i].innerHTML = accent.replaceAll(/a/gi, '<i>a</i>');
	}
}
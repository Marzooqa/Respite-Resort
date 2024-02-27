document.addEventListener("DOMContentLoaded", function () {
	let articles = document.querySelectorAll("article");
	let popup = document.getElementById("popup");
	let overlay = document.getElementById("overlay");
	let popupContent = document.getElementById("popup-content");

	articles.forEach(function (article) {
		article.addEventListener("click", function (event) {
			let blockquote = article.querySelector("blockquote[data-url]");
			if (blockquote) {
				window.open(blockquote.getAttribute("data-url"), "_blank");
				return;
			}

			let rect = article.getBoundingClientRect();
			let x = event.clientX - rect.left;
			let y = event.clientY - rect.top;

			let figcaption = article.querySelector("figcaption span:first-child");
			let figcaptionText = figcaption ? figcaption.textContent : ""; // check if figcaption is present
			let dateAndTimeText = article
				.querySelector(".date-and-time")
				.textContent.trim();
			let authorText = article
				.querySelector("figcaption span:last-child")
				.textContent.trim();

			let img = article.querySelector("img");
			let imgSrc = img ? img.getAttribute("src") : ""; // check if image is present
			let imgElement = imgSrc ? `<img src="${imgSrc}" alt="Popup Image">` : ""; // create img element if image is present

			popupContent.innerHTML = `
                ${imgElement}
                <div>${figcaptionText}</div>
                <div class="flex"><div class="dt-popup">${dateAndTimeText}</div><div>${authorText}</div></div>
                <p>Lorem ipsum dolor sit amet, nam sale civibus conclusionemque et, ad qui omnes audire eloquentiam, at vis lucilius expetenda. Est ad meis putant suscipiantur, cu vix vidisse pertinax, in sea exerci mandamus. Usu id iriure tritani, vel quis fierent abhorreant id. Pri ne minimum legendos, ius sale ornatus argumentum id. In ius tale dico debet, per regione nonumes in. At ius tollit laudem molestiae, dicam praesent quo an. His ex mentitum electram.</p>
            `;
			popup.style.top = rect.top + y + "px";
			popup.style.left = rect.left + x + "px";
			overlay.style.display = "block";
			popup.style.display = "block";

			setTimeout(() => {
				popup.style.top = "50%";
				popup.style.left = "50%";
			}, 10);
		});
	});

	overlay.addEventListener("click", function () {
		popup.style.display = "none";
		overlay.style.display = "none";
	});

	// Close button functionality
	document.getElementById("close-btn").addEventListener("click", function () {
		popup.style.display = "none";
		overlay.style.display = "none";
	});
});

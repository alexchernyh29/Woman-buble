import svg4everybody from "svg4everybody";
import $ from "jquery";

$(() => {
	function animateBubble() {
		$(".bubles__img.two,.bubles__img.four,.bubles__img.six")
			.animate({ top: "+=50" }, 3000)
			.animate({ top: "-=50" }, 2000, animateBubble);
		$(".bubles__img.one ,.bubles__img.three,.bubles__img.five")
			.animate({ top: "+=50" }, 5000)
			.animate({ top: "-=50" }, 3000, animateBubble);
	}
	animateBubble();

	const groupLinks = {
		1: "https://example.com/group1",
		2: "https://example.com/group2",
		3: "https://example.com/group3",
		4: "https://example.com/group4",
	};

	let selectedMyths = [];

	function getMythGroup(mythId) {
		if (mythId === 1 || mythId === 2) return 1;
		if (mythId === 3 || mythId === 4) return 2;
		if (mythId === 5 || mythId === 6) return 3;
		if (mythId === 7 || mythId === 8) return 4;
		return null;
	}

	function redirect() {
		const firstGroup = getMythGroup(selectedMyths[0]);
		const secondGroup = getMythGroup(selectedMyths[1]);
		window.location.href = groupLinks[firstGroup];
	}

	$(".bubles__buble").click(function () {
		const mythId = parseInt($(this).data("id"));
		if (selectedMyths.length < 2) {
			$(this).addClass("selected");
			selectedMyths.push(mythId);
		}
		if (selectedMyths.length === 2) {
			redirect();
		}
	});

	function updateBubbleClass() {
		if ($(window).width() <= 800) {
			$('.bubles__buble[data-id="3"]')
				.removeClass("blue")
				.addClass("pink");
		} else {
			$('.bubles__buble[data-id="3"]')
				.removeClass("pink")
				.addClass("blue");
		}
		if ($(window).width() <= 800) {
			$('.bubles__buble[data-id="4"]')
				.removeClass("pink")
				.addClass("blue");
		} else {
			$('.bubles__buble[data-id="4"]')
				.removeClass("blue")
				.addClass("pink");
		}
		if ($(window).width() <= 800) {
			$('.bubles__buble[data-id="7"]')
				.removeClass("blue")
				.addClass("pink");
		} else {
			$('.bubles__buble[data-id="7"]')
				.removeClass("pink")
				.addClass("blue");
		}
		if ($(window).width() <= 800) {
			$('.bubles__buble[data-id="8"]')
				.removeClass("pink")
				.addClass("blue");
		} else {
			$('.bubles__buble[data-id="8"]')
				.removeClass("blue")
				.addClass("pink");
		}
	}

	updateBubbleClass();

	$(window).resize(function () {
		updateBubbleClass();
	});
});

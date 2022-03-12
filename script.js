const comments = [
	{
		userName: "Yu Yan",
		timePosted: "Just now",
		profilePhoto: "https://media.timeout.com/images/105653190/image.jpg",
		comment: "This is MegaFlash Shorts, a TikTok Clone 😎"
	},
	{
		userName: "Wes",
		timePosted: "3 mins ago",
		profilePhoto:
			"https://yeezymafia.com/content/images/2019/08/Kanye-West-adidas-Yeezy-Basketball-Shoe-YZY-BSKTBL.png",
		comment: "Love the color, whats the color code!"
	},
	{
		userName: "traviScott",
		timePosted: "48 mins ago",
		profilePhoto:
			"https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ.jpg",
		comment: "💘💗💚💕🖤"
	},
	{
		userName: "mr305",
		timePosted: "2hrs ago",
		profilePhoto:
			"https://www.extremecustoms.com/inc.store/images/gallery/2008-gmc-sierra-2500-hd-with-leveling-kit-gear-alloy-big-block-726mb-22x12--44-offset-22-by-12-inch-wide-wheel-toyo-proxes-st-305-40r22-tire-pic4.jpg",
		comment: "I need one right now"
	},
	{
		userName: "its50",
		timePosted: "Just now",
		profilePhoto:
			"https://media.npr.org/assets/music/sotd/2009/11/50cent-606653ff4067b3c2488559211d4adddf497a103b-s800-c85.jpg",
		comment: "What wheels are those?"
	},
	{
		userName: "ciciFlores",
		timePosted: "12 mins ago",
		profilePhoto:
			"https://post.healthline.com/wp-content/uploads/2021/06/1336289-The-10-Best-Self-Help-Books-for-Women-in-2021-732x549-Feature.jpg",
		comment: "WOW love the wheel set up"
	},
	{
		userName: "boldJet",
		timePosted: "1 day ago",
		profilePhoto:
			"https://worldarchery.sport/sites/default/files/styles/header_desktop/https/photos.smugmug.com/OLYMPIC-GAMES/TOKYO-2020/23-JULY-QUALIFICATION/i-K2L7PfT/0/125fcb9f/X3/X21_7255-X3.jpg?h=2e8ccfe0&itok=fkr_S58k",
		comment: "Nice !!!"
	},
	{
		userName: "nikeHead32",
		timePosted: "3 mins ago",
		profilePhoto:
			"https://static.nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/a95ae79b-df88-4b50-86d2-a1c046a81033/nike-air-max-air-max-day-2020.jpg",
		comment: "Omw! 🤐😅"
	},
	{
		userName: "kidCudi",
		timePosted: "Just now",
		profilePhoto:
			"https://media.pitchfork.com/photos/5dbb9348892ad400095d279c/4:3/w_1912,h_1434,c_limit/Kid-Cudi.jpg",
		comment: "Buyn one tomorrow for my show!"
	},
	{
		userName: "KanyeW213",
		timePosted: "8/13/21",
		profilePhoto:
			"https://cdn.vox-cdn.com/thumbor/db1ZWaAzB_kNVvTzFFkSGlC7t3k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20055434/kanye_west_kid_cudi_kids_see_ghosts_review.jpg",
		comment: "Thats crazy quick."
	},
	{
		userName: "houseOf4382",
		timePosted: "7hrs ago",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/9/9c/House_of_Highlights_logo.png",
		comment: "What model porsche is that"
	},
	{
		userName: "_1995till",
		timePosted: "55 mins ago",
		profilePhoto: "https://pbs.twimg.com/media/Ec08188XgAE-Xux.jpg",
		comment: "🔥🔥"
	},
	{
		userName: "omgGT3_992",
		timePosted: "Just now",
		profilePhoto: "https://i.ytimg.com/vi/cLBVGqeEHLo/maxresdefault.jpg",
		comment: "hahahah twins 😎"
	},
	{
		userName: "F80_WES",
		timePosted: "6 mins ago",
		profilePhoto: "https://solomotorsports.net/wp-content/uploads/DSC_1102-1.jpg",
		comment: "F80 M3 > GT3"
	},
	{
		userName: "codewithWes",
		timePosted: "1 min ago",
		profilePhoto:
			"https://www.minimaldesksetups.com/wp-content/uploads/2020/09/Featureimage.jpg",
		comment: "Dream car !!!"
	}
];

let likesAmount = "";

const video = document.querySelector(".video");
const duration = document.querySelector(".progress-duration");
const range = document.querySelector(".progress-range");
const bar = document.querySelector(".progress-bar");
const commentsCount = document.querySelector(".comments-head-label");
const commentsCount2 = document.querySelector(".comments");

const commentsList = document.querySelector(".comments-list");

// overlay

const overlay = document.querySelector(".overlay");
const closeOvelay = document.querySelector(".howto-close");

//
const commentsIcon = document.getElementById("comments-icon");
const commentsContainer = document.querySelector(".comments-container");
const closeComments = document.querySelector(".comments-head-close");

//

const likes = document.querySelector(".likes");
const likesIcon = document.getElementById("likes-icon");

// iife

(() => {
	video.pause();
})();

function displayTime(time) {
	const mins = Math.floor(time / 60); // devide (time | given) by 60 (mins)
	let seconds = Math.floor(time % 60); // remainder of (time | given) divided by 60
	seconds = seconds <= 9 ? `0${seconds}` : seconds;
	return `${mins}:${seconds}`;
}

function updateProgress() {
	bar.style.width = `${(video.currentTime / video.duration) * 100}%`;
	duration.textContent = `${displayTime(video.currentTime)} : ${displayTime(
		video.duration
	)}`;
}

function setProgress(e) {
	const time = e.offsetX / range.offsetWidth; // get percentage where clicked and devide by duration
	bar.style.width = `${time * 100}%`;
	video.currentTime = time * video.duration;
}

// Comments | Active |

function activateComments() {
	commentsContainer.classList.add("comments-active");
	video.pause();
	if (video.pause) {
		video.style.cursor = "pointer";
	}
}
function deactivateComments() {
	if (video.pause) {
		commentsContainer.classList.remove("comments-active");
		video.play();
		video.style.cursor = "default";
	}
}

function loadComments() {
	commentsList.innerHTML = "";
	commentsCount.textContent = `${comments.length} comments`;
	commentsCount2.textContent = `${comments.length}`;
	comments.forEach((comment) => {
		const html = `<div class="comments-item">
					<span class="comment-top">
						<span class="comment-top-logo" style="background-image:url(${comment.profilePhoto})"></span>
						<span class="comment-top-details">
							<span class="user-name">${comment.userName}</span>
							<span class="user-time">${comment.timePosted}</span>
							<span class="user-comment">${comment.comment}</span>
						</span>
					</span>
				</div>`;
		commentsList.insertAdjacentHTML("afterbegin", html);
	});
	likesAmount = Number(likes.dataset.likes);
}

function updateLikes() {
	if (likesAmount >= 1000) return;
	likesIcon.src = `https://assets.codepen.io/2629920/heart+%281%29.png`;
	likesAmount = likesAmount + 1;
	likes.textContent = `${likesAmount === 1000 ? "1K" : likesAmount}`;
}

// Event listeners

range.addEventListener("click", setProgress);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);
commentsIcon.addEventListener("click", activateComments);
video.addEventListener("click", deactivateComments);
closeComments.addEventListener("click", deactivateComments);
likesIcon.addEventListener("click", updateLikes);
closeOvelay.addEventListener("click", () => {
	video.play();
	overlay.style.display = "none";
});

// on load

loadComments();

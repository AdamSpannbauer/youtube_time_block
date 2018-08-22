
function block_thumbnail_times() {
	let thumb_time = document.getElementsByTagName('ytd-thumbnail-overlay-time-status-renderer');

	for (let ts of thumb_time) {
  		ts.innerHTML = '<span class="style-scope ytd-thumbnail-overlay-time-status-renderer" aria-label="Spoiler">Spoiler</span>';
	};
};

function block_duration() {
   	let video_duration = document.getElementsByClassName('ytp-time-duration');

   	for (let ts of video_duration) {
   		ts.className = 'spoiler_extension';
  		ts.innerHTML = 'Spoiler'
	};
};

function block_progress_bar() {
	let progress_bar = document.getElementsByClassName('ytp-progress-bar-container');

	for (let pb of progress_bar) {
		pb.className = 'spoiler_extension';
		pb.innerHTML = ''
	};
};

function block_times() {
	block_thumbnail_times();
	block_duration();
	block_progress_bar();
};

document.addEventListener("mousemove", block_times);
window.addEventListener("mousemove", block_times);
window.addEventListener("scroll", block_times);

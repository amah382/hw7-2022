var video;

window.addEventListener("load", function() {
		console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play the video");
	video.play();
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume+"%";
});

// pause video
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause the video");
	video.pause();
});

// slow down video
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down the video");
	video.playbackRate *= .90;
	console.log("Speed is", video.playbackRate)
});

// speed up video
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up the video");
	video.playbackRate *= 1.10;
	console.log("Speed is", video.playbackRate)
});

// skip ahead 10s
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead 10s");
	video.currentTime += 10;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.play();
	}
	console.log("The current time is", video.currentTime)
});

// mute video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute");
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else {
		console.log("Mute");
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function(){
	console.log("The current value is", video.volume);
	video.volume = this.value/100 + "%";
	console.log("The current volume is", video.volume)
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Add oldSchool Class");
});
	
// Original 
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Remove oldSchool Class");
});

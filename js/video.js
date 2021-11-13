var video;
var vol; 
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video =document.querySelector("#player1");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate =video.playbackRate * 0.95;
	console.log("Video playback rate" + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate * 1.05;
	console.log("Video playback rate " + " " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if(video.currentTime > video.duration - 15){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 15;
	}
	video.play();
	console.log("Currnt location of the video is " + video.currentTime );
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video muted");
	console.log(video.muted);
	if(video.muted == true){
		video.muted = false;
		this.innerHTML = "Mute"
	}
	else{
		video.muted = true;
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value / 100;

});
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
});

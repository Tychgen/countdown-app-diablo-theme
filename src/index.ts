type StringOrNumber = string | number;


let launchDate: number = new Date("Jan 28, 2024 12:00:00").getTime();


let timer = setInterval(tick, 1000);

function tick(): void {

  let now: StringOrNumber = new Date().getTime();

  let t: StringOrNumber = launchDate - now;


  if (t > 0) {
    let days: StringOrNumber = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }

    let hours: StringOrNumber = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }

  
    let mins: StringOrNumber = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) {
      mins = "0" + mins;
    }

  
    let secs: StringOrNumber = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) {
      secs = "0" + secs;
    }


    let time: string = `${days} : ${hours} : ${mins} : ${secs}`;

 
    const countdownElement: HTMLElement | null = document.querySelector('.countdown');
    if (countdownElement) {
      countdownElement.innerText = time;
    }
  }
}


// Video sound section 
const video: HTMLVideoElement | null = document.getElementById('background-video') as HTMLVideoElement | null;
const toggleSoundDiv: HTMLDivElement | null = document.querySelector('.toggle-sound') as HTMLDivElement | null;

if (video && toggleSoundDiv) {
  let isMuted: boolean = true; 

  toggleSoundDiv.addEventListener('click', () => {
    if (isMuted) {
      video.muted = false; 
      toggleSoundDiv.querySelector('.sound--icon')?.classList.remove('fa-volume-off');
      toggleSoundDiv.querySelector('.sound--icon')?.classList.add('fa-volume-up');
      toggleSoundDiv.classList.remove('sound-mute'); // 
    } else {
      video.muted = true; // Video sesini kapat
      toggleSoundDiv.querySelector('.sound--icon')?.classList.remove('fa-volume-up');
      toggleSoundDiv.querySelector('.sound--icon')?.classList.add('fa-volume-off');
      toggleSoundDiv.classList.add('sound-mute'); // 
    }
    isMuted = !isMuted; 
  });
}
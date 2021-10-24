

const progress_bar = document.querySelector('.progress_bar');
const main = document.querySelector('main');
const documentHeight = document.documentElement.clientHeight;

const animateProgressBar = ()=> {
  const scrollDistance = -main.getBoundingClientRect().top;
  let progressWidth = Math.floor((scrollDistance / (main.getBoundingClientRect().height - documentHeight)) * 100)
  if(progressWidth < 1) {
    progressWidth = 0;
  }
  progress_bar.style.width = `${progressWidth}%`
}


window.addEventListener('scroll', animateProgressBar)





const buttonLeft = document.querySelector('.about_reading-menu_left-button');
const buttonRight = document.querySelector('.about_reading-menu_right-button');
const menuTxt = document.querySelector('.about_reading-menu_txt');
const aboutTxt = document.querySelector('.about_txt_1');
const menuNbr = document.querySelectorAll('.video_reading-menu_part');
const video = document.querySelectorAll('.video_main_all-video_clip');
const clip1 = document.querySelector('.clip_1');
let buttonNbr = 0;
let menuButtonNbr = 1;
const lightsUp = new Audio("lights-up.mp3");
const playButton = document.querySelector(".music_main_player_play-button");
const timeline = document.querySelector(".music_main_player_timeline");
let playPause = true;
let timer;
let iconsTimer = window.setInterval(switchIcons, 2000);
let iconsCounter = 1;
const buttonVideo = document.querySelector('.fa-circle-chevron-right');
const buttonPhoto = document.querySelector('.fa-circle-chevron-left');
const videoAll = document.querySelector('.video');
const photo1 = document.querySelector('.photo_main_1');
const photo2 = document.querySelector('.photo_main_2');
const photo3 = document.querySelector('.photo_main_3');
const photo4 = document.querySelector('.photo_main_4');
const photos = [photo1, photo2, photo3, photo4];
const photoMain34 = document.querySelector('.photo_main_34');
const photoMain12 = document.querySelector('.photo_main_12');
const icons = document.querySelector('.icons');
const reseaux = document.querySelector('.reseaux');
const musicMainTxt = document.querySelector('.music_main_txt');
const aboutMainTxt = document.querySelector('.about_title');
const videoMainTxt = document.querySelector('.video_main_txt');
const dateMainTxt = document.querySelector('.date_title');
const contactMainTxt = document.querySelector('.contact_title');
// const logoYkonsNbr1 = document.querySelectorAll('.head_logo_ykons-logo_part_nbr1');
// const logoYkonsNbr2 = document.querySelectorAll('.head_logo_ykons-logo_part_nbr2');
// const logoYkonsNbr3 = document.querySelectorAll('.head_logo_ykons-logo_part_nbr3');
const logoYkons = Array.from(document.querySelectorAll('.head_logo_ykons-logo_part'));
const dateMainPart = Array.from(document.querySelectorAll('.date_main_part'));
let photo = 0;
let timerPhoto;
let photoActive = false;
lightsUp.volume = 0.3;
let iconsClick;

window.addEventListener('load', () =>{
    logoYkons[1].style.animation= '1.5s linear 1 logo2'
    logoYkons[2].style.animation= '1.5s linear 1 logo3'
    stop()
})

function stop(){
    logoYkons[1].style.marginLeft= "117.5px"
    logoYkons[2].style.marginLeft= "190px"
}

document.addEventListener('scroll', () => {
    let top = window.pageYOffset;
    let topBetter = ( top - 1200)/10;
    getBounding(musicMainTxt, "100px");
    getBounding(aboutMainTxt, "125px");
    getBounding(videoMainTxt, "100px");
    getBounding(dateMainTxt, "100px");
    getBounding(contactMainTxt, "100px");
    function getBounding(item, nbr){
        if (item.getBoundingClientRect().y <= 800){
            item.style.transition= 'height .3s ease-in-out'
            item.style.height= nbr;
        }
        if (item.getBoundingClientRect().y > 800){
            item.style.transition= 'height .3s ease-in-out'
            item.style.height= 0;
        }
        return;
    }
    dateMainPart.forEach(item => {
        if (item.getBoundingClientRect().y <= 800){
            item.style.transition= 'all .7s ease-in-out'
            item.style.transform= 'translateX(0)'
        }
        if (item.getBoundingClientRect().y > 800){
            item.style.transition= 'all .7s ease-in-out'
            item.style.transform= 'translateX(-110%)'
        }
        return;
    })
})

window.addEventListener('contextmenu', e => {
    e.preventDefault();
})

buttonLeft.addEventListener('mousedown', () => {
    if (buttonNbr === 1){
        aboutTxt.style.marginLeft= '0';
        buttonNbr -=1;
        buttonLeft.style.opacity= ".5";
        menuTxt.innerHTML= '<p class="about_reading-menu_txt">1/3</p>';
        buttonLeft.style.cursor= "auto";
    }
    else if (buttonNbr === 2){
        aboutTxt.style.marginLeft= '-100%';
        buttonNbr -=1;
        buttonRight.style.opacity= "1";
        menuTxt.innerHTML= '<p class="about_reading-menu_txt">2/3</p>';
        buttonRight.style.cursor= "pointer";
    }
})

buttonRight.addEventListener('mousedown', () => {
    if (buttonNbr === 0){
        aboutTxt.style.marginLeft= '-100%';
        buttonNbr +=1;
        buttonLeft.style.opacity= "1";
        menuTxt.innerHTML= '<p class="about_reading-menu_txt">2/3</p>';
        buttonLeft.style.cursor= "pointer";
    }
    else if (buttonNbr === 1){
        aboutTxt.style.marginLeft= '-200%';
        buttonNbr +=1;
        buttonRight.style.opacity= ".5";
        menuTxt.innerHTML= '<p class="about_reading-menu_txt">3/3</p>';
        buttonRight.style.cursor= "auto";
    }
})

console.log(menuNbr[0].getAttribute('data-id'));

menuNbr.forEach(menu => {
    menu.addEventListener('click', () => {
        menuNbr.forEach(el => {
            el.classList.remove('selected');
        })
        menu.classList.add('selected');
        pauseVideo();
        const id = menu.getAttribute('data-id');
        switch (id) {
            case 'menu1':
                clip1.style.marginLeft= '5%'
                break;
            case 'menu2':
                clip1.style.marginLeft= '-95%'
                break;
            case 'menu3':
                clip1.style.marginLeft= '-195%'
                break;
            case 'menu4':
                clip1.style.marginLeft= '-295%'
                break;
            case 'menu5':
                clip1.style.marginLeft= '-395%'
                break;
            case 'menu6':
                clip1.style.marginLeft= '-495%'
                break;
            case 'menu7':
                clip1.style.marginLeft= '-595%'
                break;
            default:
                return;
        }
    })
})

function pauseVideo(){
    video.forEach(e => {
        e.pause();
    })
}

playButton.addEventListener("click", () => {
    if (playPause) {
        playPause = false;
        lightsUp.play();
        timer = window.setInterval(check, 200);
        playButton.className = "fa-solid fa-pause fa-2xl music_main_player_play-button"
    } else {
        playPause = true;
        lightsUp.pause();
        clearInterval(timer);
        playButton.className = "fa-solid fa-play fa-2xl music_main_player_play-button"
    }
});

function check() {
    timeline.value = lightsUp.currentTime;
    const max = timeline.max;
    const val = timeline.value;
    timeline.style.backgroundSize = val * 100 / max + 0.5 + '% 100%';
    if (timeline.value === timeline.max){
        timeline.value = 0;
        timeline.style.backgroundSize = '0% 100%';
        lightsUp.currentTime = 0;
        playPause = true;
        lightsUp.pause();
        clearInterval(timer);
        playButton.className = "fa-solid fa-play fa-2xl music_main_player_play-button"
    }
}
  
timeline.addEventListener("input", () => {
    lightsUp.currentTime = timeline.value;
    const max = timeline.max;
    const val = timeline.value;
    timeline.style.backgroundSize = val * 100 / max + 0.5 + '% 100%';
});

buttonVideo.addEventListener('click', () => {
    videoAll.style.marginLeft= '-100%';
    timerPhoto = window.setInterval(switchPhoto, 3000);
})

buttonPhoto.addEventListener('click', () => {
    videoAll.style.marginLeft= '0';
    clearInterval(timerPhoto);
})

function switchPhoto() {
    if (photo === 0){
        photo ++;
        photos.forEach(e => {
            let photoNumber = e.getAttribute('data-id');
            switch (photoNumber){
                case 'photo1':
                    e.style.backgroundImage= "url(./sass/img/ykons_5.webp)";
                break;
                case 'photo2':
                    e.style.backgroundImage= "url(./sass/img/ykons_6.webp)";
                break;
                case 'photo3':
                    e.style.backgroundImage= "url(./sass/img/ykons_8.webp)";
                break;
                case 'photo4':
                    e.style.backgroundImage= "url(./sass/img/ykons_7.webp)";
                    e.style.backgroundPosition= 'top'
                break;
                default:
                    return;
            }
        });
    }
    else if (photo ===1){
        photo ++;
        photos.forEach(e => {
            let photoNumber = e.getAttribute('data-id');
            switch (photoNumber){
                case 'photo1':
                    e.style.backgroundImage= "url(./sass/img/ykons_9.webp)";
                break;
                case 'photo4':
                    e.style.backgroundImage= "url(./sass/img/ykons_10.webp)";
                break;
                default:
                    return;
            }
        });
    }
    else{
        photo = 0;
        photos.forEach(e => {
            let photoNumber = e.getAttribute('data-id');
            switch (photoNumber){
                case 'photo1':
                    e.style.backgroundImage= "url(./sass/img/ykons_1.webp)"
                break;
                case 'photo2':
                    e.style.backgroundImage= "url(./sass/img/ykons_2.webp)"
                break;
                case 'photo3':
                    e.style.backgroundImage= "url(./sass/img/ykons_3.webp)"
                break;
                case 'photo4':
                    e.style.backgroundImage= "url(./sass/img/ykons_4.webp)"
                    e.style.backgroundPosition= 'top'
                break;
                default:
                    return;
            }
        })
    }
}

photos.forEach(el => {
    el.addEventListener('click', e => {
        if (photoActive == false){
            photoActive = true;
            photos.forEach(item => {
                if ( e.target !== item){
                    item.style.width= '0';
                    item.style.height= '0';
                    item.style.margin= '0';
                }
                else {
                    item.style.margin= '0';
                }
            })
            e.target.style.width= '100%'
            e.target.style.height= '100%'
            clearInterval(timerPhoto);
        }
        else {
            photoActive = false;
            photos.forEach(item => {
                item.style.width= '48.5%';
                item.style.height= '48.5%';
                console.log('hi');
                photo1.style.margin= '0 3% 3% 0'
                photo3.style.margin= '0 3% 0 0'
            })
            timerPhoto = window.setInterval(switchPhoto, 3000);
        }
    })
})

function switchIcons(){
    iconsCounter ++;
    switch (iconsCounter) {
        case 1:
            icons.className= "fa-brands fa-facebook-f fa-xl icons";
            icons.style.marginRight= "0px"
            reseaux.style.background= "#4267b2"
        break;
        case 2:
            icons.className= "fa-brands fa-instagram fa-xl icons";
            icons.style.marginRight= "-4px"
            reseaux.style.background= "#8134AF"
        break;
        case 3:
            icons.className= "fa-brands fa-twitter fa-xl icons";
            icons.style.marginRight= "-6px"
            reseaux.style.background= "#1DA1F2"
        break;
        case 4:
            icons.className= "fa-brands fa-youtube fa-xl icons";
            icons.style.marginRight= "-6.5px"
            reseaux.style.background= "#E62117"
        break;
        case 5:
            icons.className= "fa-brands fa-tiktok fa-xl icons";
            icons.style.marginRight= "-4px"
            reseaux.style.background= "#25f4ed"
        break;
        case 6:
            icons.className= "fa-brands fa-spotify fa-xl icons";
            icons.style.marginRight= "-5px"
            reseaux.style.background= "#1ed760"
        break;
        case 7:
            icons.className= "fa-brands fa-deezer fa-xl icons";
            icons.style.marginRight= "-5.2px"
            reseaux.style.background= "#4b9f6b"
        break;
        case 8:
            icons.className= "fa-brands fa-apple fa-xl icons";
            icons.style.marginRight= "-2px"
            reseaux.style.background= "#5fb643"
            iconsCounter = 0;
        break;
        default:
        break;
    }
}

let reseauxCounter = true;

reseaux.addEventListener('click', () => {
    if(reseauxCounter){
        reseauxCounter = false;
        icons.className= 'fa-solid fa-xmark fa-xl icons';
        clearInterval(iconsTimer);
        reseaux.style.background= 'rgb(7, 218, 165)';
        reseaux.style.clipPath= 'circle(75%)';
    }
    else {
        reseauxCounter = true;
        icons.className= 'fa-brands fa-facebook-f fa-xl icons';
        reseaux.style.clipPath= "circle(6% at 89.5% 7.5%)";
        icons.style.marginRight= "0px";
        reseaux.style.background= "#4267b2";
        iconsTimer = window.setInterval(switchIcons, 2000);
    }
})



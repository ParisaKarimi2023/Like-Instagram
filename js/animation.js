const fg = document.querySelector('#fg');
const fg2 = document.querySelector('#fg2');
const mid1 = document.querySelector('#mid1');
const mid2 = document.querySelector('#mid2');
const bg1 = document.querySelector('#bg1');
const bg2 = document.querySelector('#bg2');
const clouds = document.querySelector('#clouds');
const bgColor = document.querySelector('#bgColor');
//=======================================================
fg.style.opacity = 0;
fg2.style.opacity = 0;
mid1.style.opacity = 0;
mid2.style.opacity = 0;
bg1.style.opacity = 0;
bg2.style.opacity = 0;
clouds.style.opacity = 0;
bgColor.style.opacity = 0;
//=======================================================
anime.timeline({
    duration:800,
    direction: 'alternate',
    loop: true
})
.add({
    targets:'#red',
    scaleY:[0,1],
    easing: 'easeInOutExpo'
})
.add({
    targets:'#heart',
    opacity:[0,1],
    scale:[0,1]
})
.add({
    targets:'#likes',
    scale:[1,2]
})
    .add({
        targets:'#red',
        opacity:[1,0]
    })
    .add({
        targets:bgColor,
        opacity:[0,1]
    },'-=1000')
    .add({
        targets:[fg,fg2,mid1,mid2,bg1,bg2,clouds],
        opacity:1,
        translateY:[50,0],
        delay:anime.stagger(100)
    },'-=1000')
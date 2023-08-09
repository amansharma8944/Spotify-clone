let songsList=Array.from(document.getElementsByClassName("songItem"));


let songs = [
    {songName: "Warriyo ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba -", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan ", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula ", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam ", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - q", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
] 

songsList.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 


    
});

//-------------music masterplay 
let mmusic=new Audio("songs/1.mp3");
$("#masterplay").click(()=>{

if (mmusic.paused|| mmusic.currentTime<=0) {
    mmusic.play();
     $("#masterplay").removeClass("fa-play-circle");
     $("#masterplay").addClass("fa-pause-circle");
   


    
}
else{
    mmusic.pause();
    $("#masterplay").removeClass("fa-pause-circle");
    $("#masterplay").addClass("fa-play-circle");
   
}



})

//------------------------------------------



//-================== range value changes with time----------=

let range=document.getElementById("range");
mmusic.addEventListener("timeupdate",()=>{

    // console.log(parseInt((mmusic.currentTime/mmusic.duration)*100));

let rangee=parseInt((mmusic.currentTime/mmusic.duration)*100);
range.value=rangee;




})


range.addEventListener("change",()=>{

mmusic.currentTime=(range.value*mmusic.duration/100);

})


//-----------------------------------------------------------==============
function makeallplay(){

    let are=Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{





        $(element).addClass("fa-play");
        $(element).removeClass("fa-pause");
    })


}


let songIndex;

let arrayy=Array.from(document.getElementsByClassName("songItemPlay"));
arrayy.forEach((element)=>{

// element.addEventListener("click",(e)=>{

   
//     // console.log("fuck u");
// })


$(element).click((e)=>{
    // console.log("fuck u");
  makeallplay();

if(mmusic.paused){
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
let idd=parseInt(e.target.id);
songIndex=parseInt(e.target.id);
mmusic.src=`songs/${idd+1}.mp3`
mmusic.currentTime=0;
mmusic.play();
$("#masterplay").addClass("fa-pause-circle");}
else{



    e.target.classList.add("fa-play");
    e.target.classList.remove("fa-pause");  
    let idd=parseInt(e.target.id);
songIndex=parseInt(e.target.id);
mmusic.src=`songs/${idd+1}.mp3`
mmusic.paused=true;  

}






})








})



// console.log(songIndex);
if(songIndex=="none"){
    songIndex=0;
    console.log("hello");
}


$("#previous").click(()=>{

    if (songIndex>=0 &&songIndex<=9) {
     
        

    }
    else{
        songIndex=0;
    }
// console.log(songIndex+"  ->");
    if(songIndex<1){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }

    mmusic.src=`songs/${songIndex+1}.mp3`;
    let newww=parseInt(songIndex);
    console.log(newww);
    //  console.log($("newww").hasClass("fa-play"));
     $("newww").removeClass("fa-pause");
    mmusic.play();
    makeallplay();
    // console.log()
    $("#masterplay").addClass("fa-pause");
    $("#masterplay").removeClass("fa-play fa-play-circle");

    // document.getElementById("").classList.add("fa-play-circle");






   






})

$("#next").click(()=>{

    if (songIndex>=0 &&songIndex<=9) {
     
        

    }
    else{
        songIndex=0;
    }
// console.log(songIndex+"  ->");
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    mmusic.src=`songs/${songIndex+1}.mp3`;
    let newww=parseInt(songIndex);
    console.log(newww);
    //  console.log($("newww").hasClass("fa-play"));
     $("newww").removeClass("fa-pause");
    mmusic.play();
    makeallplay();
    // console.log()
    $("#masterplay").addClass("fa-pause");
    $("#masterplay").removeClass("fa-play fa-play-circle");

    // document.getElementById("").classList.add("fa-play-circle");






   






})


$(".no-volume").click(()=>{
    mmusic.muted=true;
    alert("muted");
})
$(".yes-voume").click(()=>{
    mmusic.muted=false;
})
let varr=1;
$(document).keypress((event)=>{
    if(event.which==32 && !mmusic.muted){
        mmusic.muted=true;
 
        varr=0
    }
    else{
        mmusic.muted=false;
      
        varr=1;

    }


})
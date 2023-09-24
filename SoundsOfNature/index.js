var BirdsSounds=[bird0=new Audio("./file-storage-eco-sounds/assets/audio/forest.mp3"),
bird1=new Audio("./file-storage-eco-sounds/assets/audio/solovey.mp3"),
bird2=new Audio("./file-storage-eco-sounds/assets/audio/drozd.mp3"),
bird3=new Audio("./file-storage-eco-sounds/assets/audio/zarynka.mp3"),
bird4=new Audio("./file-storage-eco-sounds/assets/audio/javoronok.mp3"),
bird5=new Audio("./file-storage-eco-sounds/assets/audio/slavka.mp3")];
var AudioState=[true,false,false,false,false,false];
var Curentaudio=null;
function playBut(){
    document.getElementById('pauseButton').style.display="unset";
    document.getElementById('playButton').style.display="none";
    for(var i=0;i<BirdsSounds.length;++i){
        if(AudioState[i]==false){
            AudioState[i]=true;
            BirdsSounds[i].play();
        }
    }
}
function pauseBut(){
    document.getElementById('pauseButton').style.display="none";
    document.getElementById('playButton').style.display="unset";
    for(var i=0;i<BirdsSounds.length;++i){
        if(AudioState[i]==true){
            AudioState[i]=false;
            BirdsSounds[i].pause();
        }
    }
}
var backgrounds=["url('./file-storage-eco-sounds/assets/img/solovey.jpg')",
                     "url('./file-storage-eco-sounds/assets/img/drozd.jpg')",
                     "url('./file-storage-eco-sounds/assets/img/zarynka.jpg')",
                     "url('./file-storage-eco-sounds/assets/img/javoronok.jpg')",
                     "url('./file-storage-eco-sounds/assets/img/slavka.jpg')"];
function bgChange(num){ 
    document.getElementById("mainStyle").style.backgroundImage=backgrounds[num];
    document.getElementById("birdsMenu").addEventListener("click",evt=>{
        Curentaudio=BirdsSounds[parseInt(evt.target.id,10)];
        BirdsSounds[parseInt(evt.target.id,10)].pause();
        BirdsSounds[parseInt(evt.target.id,10)+1].play();
    });
    playBut();
}
function bgdefault(){
    Curentaudio=BirdsSounds[0];
    document.getElementById("mainStyle").style.backgroundImage="url('./file-storage-eco-sounds/assets/img/forest.jpg')";
    for(var i=1;i<BirdsSounds.length;++i){
        BirdsSounds[i].pause();    
    }
    BirdsSounds[0].play();
    playBut();
}
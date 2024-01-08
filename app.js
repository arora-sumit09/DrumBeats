class DrumKit{
    constructor(){
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index =0;
        this.bpm =150;
        this.isPlaying = null;
    }
    activePad(){
        // console.log(this);
        this.classList.toggle("active");
    }
    // to loop over the pads 
    repeat(){
        let step = this.index % 8; 
        // console.log(`step ${step} and index is ${this.index}`);
        // the activeBars will firstly select 0th pad , 1 ,2 ..so on
        const activeBars = document.querySelectorAll(`.b${step}`);
        activeBars.forEach(bar=>{
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if(bar.classList.contains("active")){
                // check for which pads
                if(bar.classList.contains("kick-pad")){
                    
                    this.kickAudio.currentTime=0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains("snare-pad")){
                    this.snareAudio.currentTime=0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains("hihat-pad")){
                    this.hihatAudio.currentTime=0;
                    this.hihatAudio.play();
                }
            }
        });
        // Check if pads are active
        this.index++;
    }
    start(){
        const interval = (60/this.bpm)*1000;
        if(!this.isPlaying){
            this.isPlaying = setInterval(()=>{ // setInterval will return some sort of random id
                this.repeat();
            },interval);
        }else{
            // we will clear the interval and set it again to null
            clearInterval(this.isPlaying);
            this.isPlaying = null; // this resetting is imp or else it will always be a random no and it will not start again 
        }
    }
    updateBtn(){
        if(!this.isPlaying){
            this.playBtn.innerText = "Stop";
            this.playBtn.classList.add("active");
        }else{
            this.playBtn.innerText = " Play";
            this.playBtn.classList.remove("active");
        }
    }
}
const drumKit = new DrumKit();
// drumKit.start();

drumKit.pads.forEach(pad=>{
    pad.addEventListener("click" , drumKit.activePad);
    pad.addEventListener("animationend" , function(){
        this.style.animation ="";
    });

});

// drumKit.playBtn.addEventListener("click", drumKit.start);
//in the above the dumkit.start , in it this was pointing to the button  


drumKit.playBtn.addEventListener("click",function(){
    drumKit.start();   
    drumKit.updateBtn(); 
});
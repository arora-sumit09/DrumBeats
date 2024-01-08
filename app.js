class DrumKit{
    constructor(){
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index =0;
        this.bpm =60;
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
        // console.log(step);
        this.index++;
    }
    start(){
        const interval = (60/this.bpm)*1000;
        setInterval(()=>{
            this.repeat();
        },interval);
    }
}
const drumKit = new DrumKit();
// drumKit.start();

drumKit.pads.forEach(pad=>{
    pad.addEventListener("click" , drumKit.activePad);
});

// drumKit.playBtn.addEventListener("click", drumKit.start);
//in the above the dumkit.start , in it this was pointing to the button  


drumKit.playBtn.addEventListener("click",function(){
    drumKit.start();    
});
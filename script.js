
let voiceSelect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

   
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];

});

document.querySelector("button").addEventListener("click", ()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});

convert.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.lang="ar";

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result => result.transcript)
        
        text.innerHTML = transcript; 
    })

    if(speech == true){
        recognition.start();
    }
})
function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XXMFGddjR/model.json" , modelready);
}

function modelready(){
    Classifier.classify(gotresult);
}

function  gotresult(error , results){
    if (error){
        console.log(error);
    
    }
}
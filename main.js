function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    v1 = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5rKR3-M4E/model.json', model);
}

function model() {
    v1.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);

        r1 = Math.floor(Math.random()*255)+1;
        r2 = Math.floor(Math.random()*255)+1;
        r3 = Math.floor(Math.random()*255)+1;

        document.getElementById("obj").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("ac").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(1)+"%";

        document.getElementById("obj").style.color = "rgb(" + r1 + "," + r2 + "," + r3 + ")";
        document.getElementById("ac").style.color = "rgb(" + r1 + "," + r2 + "," + r3 + ")";



        img = document.getElementById("a1");
        img1 = document.getElementById("a2");
        img2 = document.getElementById("a3");
        img3 = document.getElementById("a4");

        if (results[0].label == "Dogy") {
            img.src = "https://c.tenor.com/b1DVdUGztTIAAAAC/cartoon-dog.gif" ;
        }
        else  {
            img.src = "https://c.tenor.com/sAWDvQPwGPcAAAAM/mochi-cat.gif" ;
         }
         
    }

}
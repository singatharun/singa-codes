var typing_title = document.getElementById('typing_title');

var title_typewriter = new Typewriter(typing_title, {
    loop: false,
    cursor:""
});

var title_text = "Singa Tharun"
title_typewriter.typeString(title_text)
    .callFunction(end_typing_title)
    .start();

function end_typing_title(){
title_typewriter.stop();
console.log("Title typing ends here")
typing_title.innerHTML = title_text
}

// this is a break////////////////////////////////////////////////////////
// var i = 0;
// var txt = 'PARAS VARSHNEY';
// var speed = 210;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("typing_title").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// this is a break////////////////////////////////////////////////////////

var typing_description = document.getElementById('typing_description');

var description_typewriter = new Typewriter(typing_description, {
    loop: true,
    delay: 80,
    autoStart: true,
    deleteSpeed:4
});

description_typewriter.typeString('<strong>Hi there!</strong>')
    .pauseFor(1200)
    .deleteAll()

    .typeString("I'm a <strong>Data Scientist</strong>")
    .pauseFor(1500)
    .deleteChars(22)

    .typeString("<strong>Sales Analyst @ Johnson Controls</strong>")
    .pauseFor(1500)
    .deleteChars(45)

    .typeString("<strong>Kaggle Contributor</strong>")
    .pauseFor(1500)
    .deleteChars(18)

    .typeString("<strong>Graphic Designer</strong>")
    .pauseFor(1500)
    // .deleteChars(31)
    .deleteAll()
    .start();


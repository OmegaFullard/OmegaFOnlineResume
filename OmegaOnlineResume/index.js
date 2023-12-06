// index.js

// var number = 5;
//         let name = "Omega";

//         number = 10;
//         name = "PluralSight";

//     // Writing to the document
//     document.writeln(name + number);

//         // document.writeln(number);
//         document.writeln("Welcome to Omega's Resume");
//         alert("Omega's Resume");

let hasJob = true;
if (hasJob) {
// I have a job
document.writeln("Thanks for visiting, I am currently employed.")
}
else {
// I need a job
document.writeln("Please look around, I am currently looking for a position");
}

let today = new Date();
let dayOfWeek = today.getDay(); 
if (dayOfWeek === 0 || dayOfWeek === 6) {
showMessage("Since it is the weekend, please be patient with my returning your email.");

}
function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}
function clearMessage() {
    formInfo.innerHTML = "";
}
const first = "first";
const contactForm = document. getElementById("contactForm");
contactForm.addEventListener ("submit", function (event) {
event.preventDefault();
const contact = new Contact();
contact.send();
showMessage ("Sending your message...Thank You: " + contact.fullName);
});
const experiences = document. getElementsByClassName ("experience");
for (let x = 0; x < experiences, length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #999999;";
    });
    item. addEventListener ("mouse leave", function (event) {
        event.target.style = "";
    });
}

class Contact {
    fullName = "";
    email = "";
    subject = "";
    body = "";

    send() {
        console.info(this.formatMessage());
        showMessage("We are not sending emails yet, feature for version 2.0");
    } 
    formatMessage() {
        //return 'To: ${this.fullName}
        //Email:${this.email}
        //Subject: ${this.subject}
        //Body: ${this.body};'
    }

};
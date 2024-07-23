const form=document.querySelector("form");
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");
function sendEmail(){
    const bodyMessage=`Full Name:${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br>
    Message:${mess.value}<br>`;
    Email.send({
        SecureToken:"1dc29076-bada-4af1-9be0-f08aa33ac50a ",
        Host : "smtp.elasticemail.com",
        Username : "arunjakkaiyan@gmail.com",
        Password : "7AD15EB28D36F1AA6B7A024B11D08DBAFDA5",
        To : 'arunjakkaiyan@gmail.com',
        From : "arunjakkaiyan@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

// function checkInputs() {
//     const items=document.querySelector(".item");
//     for (const item of items){
//         if (item.value==""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         item.addEventListener("keyup",(e)=>{
//             if(item.value!=""){
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else{
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

form.addEventListener("submit",(e)=>{
    e.preventDefault();


    sendEmail();
});


function myMenuFunction(){
    var menuBtn=document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className +="responsive";
    } 
    else{
        menuBtn.className = "nav-menu";
    }
}

// dark mode

const body=document.querySelector("body"),
    toggleSwitch=document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

// typing effect

var typingEffect=new Typed (".typedText",{
        strings:["Designer" ,"Coder" ,"developer"],
        loop:true,
        
        typeSpeed:100,
        backSpeed:80,
        backDelay:2000,


});

// scroll animation

const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,
});

sr.reveal(".featured-name",{delay: 100});
sr.reveal(".text-info",{delay: 100});
sr.reveal(".text-btn",{delay: 100});
sr.reveal(".social_icons",{delay: 100});
sr.reveal(".featured-image",{delay: 320});


sr.reveal(".project-box",{interval: 200});

sr.reveal(".top-header",{});

const srleft=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})

srleft.reveal(".about-info",{delay:100});
srleft.reveal(".about",{delay:100});
srleft.reveal(".skill",{delay:100});
srleft.reveal(".form-controls",{delay:100});
srleft.reveal(".contact-info",{delay:100});
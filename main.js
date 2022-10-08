const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const navbar = document.querySelector('.navdiv')
const middle = document.querySelector('.middle')

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        navbar.style.display = 'block';
        middle.style.filter = 'blur(8px)';
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        navbar.style.display = 'none';
        middle.style.filter = 'blur(0px)';
        menuOpen = false;
    }
})

const cex = document.getElementById('cex');
const vodaphone = document.getElementById('vodaphone');
const modulr = document.getElementById('modulr');
const codeninjas = document.getElementById('codeninjas');

const cexBox = document.querySelector('.cex');
const vodBox = document.querySelector('.vodaphone');
const modBox = document.querySelector('.modulr');
const codeBox = document.querySelector('.codeninjas');


cex.addEventListener('click', () => {
    cexBox.style.display = 'block';
    vodBox.style.display = 'none';
    modBox.style.display = 'none';
    codeBox.style.display = 'none';
    cex.style.borderBottom = '7px solid rgb(255,255,255)';
    vodaphone.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    modulr.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    codeninjas.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
})

codeninjas.addEventListener('click', () => {
    codeBox.style.display = 'block';
    vodBox.style.display = 'none';
    modBox.style.display = 'none';
    cexBox.style.display = 'none';
    cex.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    vodaphone.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    modulr.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    codeninjas.style.borderBottom = '7px solid rgb(255,255,255)';
})

vodaphone.addEventListener('click', () => {
    vodBox.style.display = 'block';
    cexBox.style.display = 'none';
    modBox.style.display = 'none';
    codeBox.style.display = 'none';
    cex.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    vodaphone.style.borderBottom = '7px solid rgb(255,255,255)';
    modulr.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    codeninjas.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
})

modulr.addEventListener('click', () => {
    modBox.style.display = 'block';
    vodBox.style.display = 'none';
    cexBox.style.display = 'none';
    codeBox.style.display = 'none';
    cex.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    vodaphone.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
    modulr.style.borderBottom = '7px solid rgb(255,255,255)';
    codeninjas.style.borderBottom = '7px solid rgb(255,255,255,0.5)';
})


function sendEmail(){

    let first = document.querySelector(".firstname").value;
    let last = document.querySelector(".lastname").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    console.log(first+last+email+subject+message);

    Email.send({
        SecureToken : "ddc987ef-2caf-4a00-a468-944f1dddc660",
        To : 'saraahmed706@gmail.com',
        From : email,
        Subject : subject,
        Body : (first+last+" "+message) 
    }).then(
    message => alert(message)
    );

}


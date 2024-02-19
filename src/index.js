import './style.css'

const ball = document.querySelector('.ball')
const text = ball.querySelector('.text')


const answer = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]




ball.addEventListener('click',()=>{
    const randomIndex = Math.floor(Math.random() * answer.length) ;
    text.textContent = answer[randomIndex]
    text.classList.remove('anim');
    setTimeout(() => {
        // Додаємо класи анімації знову
        text.classList.add('anim');
        
    }, 10);
    console.log(randomIndex)
})
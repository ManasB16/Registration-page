
const ul = document.querySelector('.items')

ul.firstElementChild.textContent = 'Hello'
ul.firstElementChild.style.background = 'green'

ul.children[1].style.background = 'yellow'


const btn = document.querySelector('#btn')

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'grey'
//     document.querySelector('body').style.background = 'lightblue'
//     document.querySelector('.items').lastElementChild.innerHTML = 'WORLD'
// })

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'grey'
//     document.querySelector('body').style.background = 'lightblue'
//     document.querySelector('.items').lastElementChild.innerHTML = 'WORLD'
// })

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'grey'
//     document.querySelector('body').style.background = 'lightblue'
//     document.querySelector('.items').lastElementChild.innerHTML = 'WORLD'
// })

const form = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const date = document.querySelector('#date')
const time = document.querySelector('#time')
const userlist = document.querySelector('#users')

form.addEventListener('submit', onsubmit)

function onsubmit(e){
    e.preventDefault();

    // console.log(name.value)
    // console.log(email.value)
    // console.log(phone.value)
    // console.log(date.value)
    // console.log(time.value)

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`))
    // localStorage.setItem('Name', name.value)
    // localStorage.setItem('Email', email.value)
    // localStorage.setItem('Phone', phone.value)
    // localStorage.setItem('Date', date.value)
    // localStorage.setItem('Time', time.value)

    let obj1 = {
        name : name.value,
        email : email.value,
        phone : phone.value,
        date : date.value,
        time : time.value
    } 

    let serialized = JSON.stringify(obj1)

    localStorage.setItem('Myobj', serialized)

    userlist.append(li);

    name.value = ''
    email.value = ''

}


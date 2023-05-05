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
    const btn = document.createElement('button')
    btn.className = 'delete'
    let btntxt = document.createTextNode('Delete')
    li.appendChild(document.createTextNode(`${name.value} : ${email.value} - ${phone.value}`))
    btn.appendChild(btntxt)
    

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

    localStorage.setItem(name.value, serialized)

    userlist.append(li);
    li.appendChild(btn)

    // name.value = ''
    email.value = ''
    phone.value = ''
    date.value = ''
    time.value = ''

}

    let itemlist = document.getElementById('users')
    itemlist.addEventListener('click', removeitem)

function removeitem(e) {
    if(e.target.classList.contains('delete')){
        localStorage.removeItem(name.value)
        let li = e.target.parentElement;
        itemlist.removeChild(li)
        
    }
    
}
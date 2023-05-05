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

    let obj1 = {
        name : name.value,
        email : email.value,
        phone : phone.value,
        date : date.value,
        time : time.value
    } 

    const li = document.createElement('li')
    const btn = document.createElement('button')
    const edit = document.createElement('button')
    let btntxt = document.createTextNode('Delete')
    let edittxt = document.createTextNode('Edit')

    let text = obj1.name + '-' + obj1.email + '-' + obj1.phone

    li.appendChild(document.createTextNode(text))
    btn.appendChild(btntxt)
    edit.appendChild(edittxt)


    btn.onclick = (e) => {
        localStorage.removeItem(obj1.name) 
        userlist.removeChild(e.target.parentElement)
    }
    edit.onclick = (e) => {
        localStorage.removeItem(obj1.name)
        userlist.removeChild(e.target.parentElement)
        document.querySelector('#name').value = obj1.name
        document.querySelector('#email').value = obj1.email
        document.querySelector('#phone').value = obj1.phone
    }



    li.appendChild(btn)
    li.appendChild(edit)
    userlist.append(li);

    let serialized = JSON.stringify(obj1)

    localStorage.setItem(name.value, serialized)

    // name.value = ''

}
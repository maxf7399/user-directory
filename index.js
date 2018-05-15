const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const userName = form.userName.value
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value
    const users = document.querySelector('#users')

    const list = document.createElement('ul')
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`
  
    users.appendChild(list)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)

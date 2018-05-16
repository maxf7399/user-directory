const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    users.appendChild(renderList())
    form.reset()
    form.userName.focus()
}
function renderColor() {
    const favoriteColor = form.favoriteColor.value
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}
function renderListItem() { 
    return document.createElement('li')
}
function renderList() { 
    const userName = form.userName.value
    const age = form.age.value
    const users = document.querySelector('#users')
    const favoriteColor = form.favoriteColor.value
    const list = document.createElement('ul')
    const nameItem = renderListItem()
    nameItem.textContent = `Name: ${userName}`
    const ageItem = renderListItem()
    ageItem.textContent = `Age: ${age}`
    const colorItem = renderListItem()
    colorItem.textContent = `Favorite Color:` 
    colorItem.appendChild(renderColor())
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    return list
}
form.addEventListener('submit', handleSubmit)

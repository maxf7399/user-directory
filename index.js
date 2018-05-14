const changeHeading = function() {
    document.getElementsByClassName('h1')[0].innerHTML = 'It was clicked!'
  }
const heading = document.querySelector('button')
heading.addEventListener('click', changeHeading)


//homework: Make the button change the text of the heading. 

//bonus credit: add multiple headings to the page, and make the button
//change the _second_ ones

//super mega bonus credit: add a form to the page, add a text input to the form, update the 
//heading with the text that you type in the text input
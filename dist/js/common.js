var anchors = document.querySelectorAll('a[href*="#"]')
var buttons = document.getElementsByClassName('item__button')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    let blockID = anchor.getAttribute('href').substring(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

for (let button of buttons) {
  button.addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

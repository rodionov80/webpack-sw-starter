(() => {
  const div = document.createElement("div");

  div.style.width = '330px'
  div.style.height = '3rem'
  div.style.textAlign = 'left'
  div.style.backgroundColor = '#eee'
  div.style.padding = '1rem'
  document.body.appendChild(div)

  const messages = [
    'Technologies:',
    'Webpack',
    'Babel',
    'Sass',
    'PostCss',
    '',
  ]

  let date = new Date().getTime()
  let currentMessage = 0

  const render = () => {
    const newDate = new Date().getTime()

    if (newDate - date > 1000) {

      div.innerHTML = messages[currentMessage]
      currentMessage += 1
      date = newDate

      if (currentMessage === messages.length) {
        currentMessage = 0
      }      
    }

    requestAnimationFrame(render)
  }

  render()

})()
(() => {
  const div = document.createElement("div");

  document.body.appendChild(div)

  const messages = [
    'Technologies:',
    'Webpack',
    'Babel',
    'Sass',
    'PostCss'
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
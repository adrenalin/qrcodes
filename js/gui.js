$(function () {
  const code = new QRCode(document.getElementById('qrcode'), {
    text: '',
    width: 1100,
    height: 1100,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel : QRCode.CorrectLevel.H
  })

  $('#url').on('keyup', (e) => {
    switch (e.keyCode) {
      case 13:
        updateCode()
        break

      case 27:
        $(e.target).blur()
        break

      default:
        return true
    }

    e.preventDefault()
    e.stopPropagation()
    return false
  })

  $('#update').on('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    updateCode()
  })

  const updateCode = () => {
    const url = $('#url').val()
    console.log('url', url)

    code.clear()
    code.makeCode(url)

    const canvas = $('#qrcode > canvas').get(0)
    console.log('canvas', canvas)
    const data = canvas.toDataURL('image/png')
    $('#image').find('> *').detach()

    const image = document.createElement('img')
    image.src = data

    $(image).appendTo('#image')
    $('#url').focus()
  }
})

const campos = [
  document.getElementById('data'),
  document.getElementById('quantidade'),
  document.getElementById('valor')
]

const form = document.getElementById('form')
const table = document.getElementById('tbody')

form.addEventListener('submit', e => {
  e.preventDefault()

  const tr = document.createElement('tr')

  campos.forEach(array => {
    const td = document.createElement('td')
    td.textContent = array.value
    tr.appendChild(td)
  })

  const tdVolume = document.createElement('td')
  tdVolume.textContent = campos[1].value * campos[2].value

  tr.appendChild(tdVolume)

  tbody.appendChild(tr)

  campos[0].value = ''
  campos[1].value = 1
  campos[2].value = 0
  campos[0].focus()
})
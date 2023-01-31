let input = document.getElementById('input')
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
let p = document.getElementById('p')
let h3 = document.getElementById('h3')
let h4 = document.getElementById('h4')
let btn = document.getElementById('btn')
let icon = document.getElementById('icon')

let whether = 'https://api.openweathermap.org/data/2.5/weather?q=Osh&appid=0c427c2e14007930b75c8356085add64'

const weather = async (city) => {
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c427c2e14007930b75c8356085add64`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      h1.innerText = `Погода в ${data.name}`
      if(data.name === undefined) {
        h1.innerText = 'такого города нет'
        h2.style.display = 'none'
        h3.style.display = 'none'
        h4.style.display = 'none'
        p.style.display = 'none'
        icon.style.display = 'none'
      }else{
        h2.style.display = 'block'
        h3.style.display = 'block'
        h4.style.display = 'block'
        p.style.display = 'block'
        icon.style.display = 'block'
      }
      p.innerText = `${data.weather[0].main}`
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      h2.innerHTML = `${Math.floor(data.main.temp-273)} &deg`
      h3.innerText = `влажность: ${data.wind.deg} %`
      h4.innerText = `скорость ветра: ${data.wind.speed} км/ч`
    })
}
btn.onclick = () => {
  weather(input.value)
  input.value = ''
}
weather('osh')
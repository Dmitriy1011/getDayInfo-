let body = document.querySelector('body')
let div = document.createElement('div')
div.style.textAlign = 'center'
div.style.marginTop = '12%'

body.appendChild(div)


let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
]


function getDayInfo(date) {
    let convertedDate = date.replace(/^(\d{2}).(\d{2}).(\d{4})/, '$2-$1-$3')
    let myDate = new Date(convertedDate)
    myDate.toLocaleDateString('en-GB')

    const thisDate = myDate.getDate();
    const day = myDate.getDay(); 

    const weekOfMonth = Math.ceil((thisDate - 1 - day) / 7);

    return days[myDate.getDay()] + ', ' + weekOfMonth + ' ' + 'неделя' + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' года'
}

console.log(getDayInfo("02.01.2022"))



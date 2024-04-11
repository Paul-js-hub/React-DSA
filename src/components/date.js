function nextWeek(date){
    let dt = new Date(date)
    dt.setDate(dt.getDate() + 7)
    let nextWeekDate = dt.getDate()
    let year = dt.getFullYear()
    let month = dt.getMonth()
    let weekDate = `${year}/${month + 1}/${nextWeekDate}`
    return weekDate
    }
    
    console.log(nextWeek("2022, 10, 06"))

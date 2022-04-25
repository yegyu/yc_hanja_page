


function getDate (year , month , week )   {
    const d = new Date();
    d.setFullYear(year);
    d.setMonth(month - 1,1);
    // d.setDate(1);

    // d.setHours(0, 0, 0, 0);

    //day indexing >> lord's day:0, mon:1 ~
    var initDay  = d.getDay()
    console.log(">> getDay(),",initDay);
    console.log('getDate params:year:',year,",month:",month,",week:",week);
    console.log('getDate init D', d);
    console.log("year:",d.getUTCFullYear(),",month:",d.getUTCMonth(),",day:",d.getUTCDate());
    var offset = 1;
    if( initDay == 0){
        let leftDate  = (week - 1) * 7;
        d.setDate(1 + leftDate);
    } else {
        let nextOffsetOfSundayFromInitDay = 7 - initDay
        let leftDate = (week - 1) * 7 
        d.setDate(1 + nextOffsetOfSundayFromInitDay + leftDate)
    }
    return d;

    let nextOffsetOfSundayFromInitDay = 6 - initDay

    // 1일이 월요일 즉, 7일이 첫째 주일일 경우
    // if (d.getDay() == 1)
    //     offset = 0;
    // while (true) {
    //     if (0 == d.getDay()) {
    //         if ((Math.floor(d.getDate() / 7) + offset) == week) {
    //             break;
    //         } else {
    //             d.setDate(d.getDate() + 7);
    //         }
    //     } else {
    //         d.setDate(d.getDate() + 1);
    //     }
    // }
    // d.setDate(d.getDate())
    // console.log('getDate last D', d);
    // if (month - 1 != d.getMonth()) {
    //     console.error('correct month:', month, ',but result:', d.getMonth() + 1);

    // }
    // return d;
}

let d = getDate(2022,1,5)
console.log(d);
var topic = [
    "檢查四肢",
    "檢查內臟",
    "檢查眼睛",
    "檢查頭腦",
    "照X光",
    "智力測驗",
    "報告出來"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,21);
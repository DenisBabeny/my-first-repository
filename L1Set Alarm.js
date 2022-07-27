//Напишите функцию под названием setalarm, которая принимает два параметра. Первый используемый параметр верен, когда работает, а второй параметр верен, когда находится в отпуске.

//Если вы работаете и не в отпуске, функция должна вернуть «истину» (потому что в таких ситуациях вам нужно установить будильник). В противном случае он должен вернуть false. Примеры:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

function setAlarm(employed, vacation){
    return employed && !vacation
    }
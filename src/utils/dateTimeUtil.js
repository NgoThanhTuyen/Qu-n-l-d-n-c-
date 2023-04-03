function toTimestamp(year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0) {
    var datum = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    return datum.getTime() / 1000;
}

function addDayTimestamp(dateTimestamp, day) {
    return dateTimestamp + 86400 * day;
}

function dateToTimestamp(str) {
    let arr = str.split('/');
    let year = arr[0];
    let month = arr[1];
    let day = arr[2];
    if (arr.length !== 3) {
        return 0;
    }
    return toTimestamp(year, month, day)
}

function dateTimeToTimestamp(str) {
    let datetime_arr = str.split(' ');
    if (datetime_arr.length !== 2) {
        return 0;
    }
    let date_str = datetime_arr[0];
    let time_str = datetime_arr[1];
    let date_arr = date_str.split('/');
    let year = date_arr[0];
    let month = date_arr[1];
    let day = date_arr[2];
    if (date_arr.length !== 3) {
        return 0;
    }
    let time_arr = time_str.split(':');
    let hour = time_arr[0];
    let minute = time_arr[1];
    if (time_arr.length !== 2) {
        return 0;
    }
    return toTimestamp(year, month, day, hour, minute)
}

export {
    dateToTimestamp,
    dateTimeToTimestamp,
    addDayTimestamp
}
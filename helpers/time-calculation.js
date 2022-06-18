import { fromUnixTime, differenceInHours } from 'date-fns';

export const getDiffFromNow = (epoch) => {
    const diffHour = differenceInHours(fromUnixTime(epoch), new Date());
    let timeObject = 'day';
    if (diffHour >= 24 && diffHour < 48) {
        timeObject = 'days';
    } else if (diffHour < 24 && diffHour > 1) {
        timeObject = 'hours';
    } else if (diffHour === 1) {
        timeObject = 'hour';
    }
    return `${diffHour < 24 ? diffHour : Math.floor(diffHour/24)} ${timeObject}`;
}
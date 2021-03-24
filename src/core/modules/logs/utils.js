import padTime from '../../utils/padTime';

const formatMinutesToString = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    return `${padTime(hours)}:${padTime(min)}`;
};

const parseStringToMinutes = (string) => {
    const parts = string.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    return hours * 60 + minutes;
};

export { formatMinutesToString, parseStringToMinutes };

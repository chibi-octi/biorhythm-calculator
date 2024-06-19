import dayjs from "dayjs"

export const calculateBiorhythms = (birthDate, targetDate) => {
    return {
        physical: calculateBiorhythm(birthDate, targetDate, 23),
        emotional: calculateBiorhythm(birthDate, targetDate, 28),
        intellectual: calculateBiorhythm(birthDate, targetDate, 33),
    }
}

const calculateBiorhythm = (birthDate, targetDate, cycle) => {
    const birthDay = dayjs(birthDate);
    const targetDay = dayjs(targetDate);
    const diff = targetDay.diff(birthDay, 'day');
    return Math.sin(2 * Math.PI * diff / cycle);
}
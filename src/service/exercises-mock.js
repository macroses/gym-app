const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// ф-я генерации описания задачи.
const generateExerciseName = () => {
    const name = [
        `Подтягивания`,
        `Отжимания`,
        `Приседания`,
        `Тяга штанги в наклоне`,
        `Жим штанги на скамье`,
        `Подтягивания обратным хватом`,
        `Французский жим`,
    ];

    const randomIndex = getRandomInteger(0, name.length - 1);

    return name[randomIndex];
};

// ф-я генерации даты
const generateDate = () => {

    const maxDaysGap = 7;
    const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
    const currentDate = new Date();

    currentDate.setHours(23, 59, 59, 999);

    currentDate.setDate(currentDate.getDate() + daysGap);

    return new Date(currentDate);
};

let elem = 1;

export const generateExercise = () => {
    return {
        id: elem = elem + 1,
        exerciseName: generateExerciseName(),
        repeatNum: getRandomInteger(0, 25),
        extraWeight: Boolean(getRandomInteger(0, 1)),
        extraWeightValue: getRandomInteger(1, 100),
        overallVolume: getRandomInteger(10, 5000),
        lastChangeDate: generateDate(),
    };
};
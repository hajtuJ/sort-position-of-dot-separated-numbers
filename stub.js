export const correctOrderedTestData = [
    "1",
    "1.1",
    "1.2",
    "1.3",
    "1.3.1",
    "1.3.2",
    "1.3.3",
    "1.3.4",
    "1.3.5",
    "1.3.6",
    "1.3.7",
    "1.3.8",
    "1.3.9",
    "1.3.10",
    "1.3.11",
    "1.3.11.1",
    "1.3.11.2",
    "1.4",
    "1.4.1",
    "1.4.2",
    "1.4.2",
    "1.4.2.1",
    "1.4.2.2",
    "1.4.2.3",
    "1.4.2.3.1",
    "1.4.2.3.2",
    "1.4.2.3.3",
    "1.4.2.3.4",
    "1.4.2.3.5",
    "1.4.2.3.6",
    "1.4.2.3.7",
    "1.4.2.3.8",
    "1.4.2.3.9",
    "1.4.2.3.10",
    "1.4.2.3.11",
    "1.4.2.3.11.1.1.1",
    "1.4.2.3.11.1.2.1",
    "1.4.2.3.12",
    "1.4.2.3.13",
    "1.4.2.3.13.1.2.2",
    "1.4.2.3.13.1.2.3",
    "1.4.2.3.13.1.2.4",
    "1.4.2.3.13.1.2.4.1",
    "1.4.2.3.13.1.2.4.2",
    "1.4.2.3.13.1.2.4.3",
    "1.4.2.3.13.1.2.5",
    "1.4.2.3.13.1.2.5.1",
    "1.4.2.3.13.1.2.5.1.1",
    "1.4.2.3.13.1.2.5.1.2",
    "1.4.2.3.13.1.2.5.1.3",
    "1.4.2.3.13.1.2.5.1.4",
    "1.4.2.3.13.1.2.5.1.5",
    "1.4.2.3.13.1.2.5.1.6",
    "1.4.2.3.13.1.2.5.1.7",
    "1.4.2.3.14",
    "1.4.2.3.15",
    "1.4.3.1",
    "1.4.3.2",
    "1.4.3.3",
    "1.4.4",
    "1.4.4.1",
    "1.4.4.2",
    "1.5",
    "1.6",
    "1.6.1",
    "1.6.2",
    "1.6.3",
    "1.7",
    "1.8",
]

const getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};

export const randomizedOrderTestData = getShuffledArr(correctOrderedTestData);
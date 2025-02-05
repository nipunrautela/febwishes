export type Day = {
    name: string;
    date: Date;
    description: string;
    link: string;
    disabled?: boolean;
}

const days: Day[] = [
    {
        name: 'Rose Day',
        date: new Date('02-07-2025'),
        description: 'This day, you send a rose. Click to sned Rose!!!!!!',
        link: 'roseday',
    },
    {
        name: 'Propose Day',
        date: new Date('02-08-2025'),
        description: 'This day, you propose (you cna propose your homies too). Click to create generate script!!!',
        link: 'proposeday',
    },
    {
        name: 'Chocolate Day',
        date: new Date('02-09-2025'),
        description: 'This day, you gib chocolat. I won\'t mind if you send me one too. Click for chocolat! yumm! :)))',
        link: 'chocolateday',
    },
    {
        name: 'Teddy Day',
        date: new Date('02-10-2025'),
        description: 'Ummm, who doesn\'t liek teddies. Share a teddy wit your significat/non-significant other(s). {*}{*}',
        link: 'teddyday',
    },
    {
        name: 'Promise Day',
        date: new Date('02-11-2025'),
        description: 'Sussiest of all days. Make a promise, that you might or might not keep. :*D',
        link: 'promiseday',
    },
    {
        name: 'Hug Day',
        date: new Date('02-12-2025'),
        description: 'Who said the digital hug trend died in 2018. It STARTED in 2020!!! Send one today, free of cost!!',
        link: 'hugday',
    },
    {
        name: 'Kiss Day',
        date: new Date('02-13-2025'),
        description: 'This is too NSFW, so we\'ll have to disable this thing. Btw the "we" is just me.',
        link: 'kissday',
        disabled: true,
    },
    {
        name: 'Valentine\'s Day',
        date: new Date('02-14-2025'),
        description: 'By this day you should realize that you\'re supposed to create use the specific card the day before the day.',
        link: 'valentinesday',
    },
];

export default days;

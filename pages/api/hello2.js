// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const colorArry = [
    {
        names:'3004',
        group:'red',
        img:'https://eraberani.ru/image/cache/catalog/ral/purpurno-krasnyj-ral-3004-700x0.jpg',id:'1'
    },
    {
        names:'3005',
        group:'red',
        img:'https://dom198.ru/assets/images/products/18239/3009-2.jpeg',id:'2'
    },
    {
        names:'3007',
        group:'green',
        img:'https://tdmp69.ru/wp-content/uploads/2020/09/3007-scaled-1-2048x885.jpg',id:'3'
    },
    {
        names:'3008',
        group:'green',
        img:'https://tdmp69.ru/wp-content/uploads/2020/09/3007-scaled-1-2048x885.jpg',id:'3'
    },
    {
        names:'3009',
        group:'green',
        img:'https://tdmp69.ru/wp-content/uploads/2020/09/3007-scaled-1-2048x885.jpg',id:'3'
    },
    {
        names:'3010',
        group:'green',
        img:'https://tdmp69.ru/wp-content/uploads/2020/09/3007-scaled-1-2048x885.jpg',id:'3'
    },
    
]
export default function handler(req, res) {
    res.status(200).json(colorArry)
}


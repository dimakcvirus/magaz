// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const colorArry = [
    {
        names:'3004',
        group:'red',
        img:'https://www.palina-coatings.ru/img/ral/ral-3004.gif',id:'1'
    },
    {
        names:'3005',
        group:'red',
        img:'https://www.palina-coatings.ru/img/ral/ral-3005.gif',id:'2'
    },
    {
        names:'3007',
        group:'green',
        img:'https://www.palina-coatings.ru/img/ral/ral-3007.gif',id:'3'
    },
    {
        names:'3009',
        group:'green',
        img:'https://www.palina-coatings.ru/img/ral/ral-3009.gif',id:'3'
    },
    {
        names:'3011',
        group:'green',
        img:'https://www.palina-coatings.ru/img/ral/ral-3011.gif',id:'3'
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


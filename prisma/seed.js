import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

async function seed() {

    await createUser( 'student@test.com', 'Testpassword1!', 'student', 'test', '1234567891')

    for(let i = 0; i < 80; i++){
       await Buy(
        'https://pwm.im-cdn.it/image/1171723010/xxs-c.jpg',
        'Case - Appartamenti',
        `€${getRandomInt(50000, 500000).toString()}`,
        'Cupidatat ea duis aliquip magna.',
        getRandomInt(3, 5), 
        getRandomInt(70, 250),
        getRandomInt(1, 3), 
        getRandomInt(1, 4),
        'Eiusmod excepteur adipisicing dolor incididunt.',
        'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 20; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1285843429/xxs-c.jpg',
            'Nuove costruzioni',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 10; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1354672015/xxs-c.jpg',
            'Garage - Posti auto',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 25; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1263167228/xxs-c.jpg',
            'Palazzi - Edifici',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 6; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1381958279/xxs-c.jpg',
            'Uffici - Coworking',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 45; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1183885264/xxs-c.jpg',
            'Negozi - Locali commerciali',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 18; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1205551094/xxs-c.jpg',
            'Magazzini - Depositi',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 20; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1317372740/xxs-c.jpg',
            'Capannoni',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 60; i++){
        await Buy(
            'https://pwm.im-cdn.it/image/1385361429/xxs-c.jpg',
            'Terreni',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 100; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1378077681/xxs-c.jpg',
            'Case - Appartamenti',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 20; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1285843429/xxs-c.jpg',
            'Nuove costruzioni',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 10; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1354672015/xxs-c.jpg',
            'Garage - Posti auto',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 25; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1263167228/xxs-c.jpg',
            'Palazzi - Edifici',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 6; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1381958279/xxs-c.jpg',
            'Uffici - Coworking',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 45; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1183885264/xxs-c.jpg',
            'Negozi - Locali commerciali',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 18; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1205551094/xxs-c.jpg',
            'Magazzini - Depositi',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 20; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1317372740/xxs-c.jpg',
            'Caponnoni',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 60; i++){
        await Rent(
            'https://pwm.im-cdn.it/image/1385361429/xxs-c.jpg',
            'Terreni',
            `€${getRandomInt(200, 4000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 80; i++){
        await Auction(
         'https://pwm.im-cdn.it/image/1171723010/xxs-c.jpg',
         'Case - Appartamenti',
         `€${getRandomInt(50000, 500000).toString()}`,
         'Cupidatat ea duis aliquip magna.',
         getRandomInt(3, 5), 
         getRandomInt(70, 250),
         getRandomInt(1, 3), 
         getRandomInt(1, 4),
         'Eiusmod excepteur adipisicing dolor incididunt.',
         'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
         ) 
    }

    for(let i = 0; i < 20; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1285843429/xxs-c.jpg',
            'Nuove costruzioni',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 10; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1354672015/xxs-c.jpg',
            'Garage - Posti auto',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 25; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1263167228/xxs-c.jpg',
            'Palazzi - Edifici',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 6; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1381958279/xxs-c.jpg',
            'Uffici - Coworking',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 45; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1183885264/xxs-c.jpg',
            'Negozi - Locali commerciali',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 18; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1205551094/xxs-c.jpg',
            'Magazzini - Depositi',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 20; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1317372740/xxs-c.jpg',
            'Caponnoni',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 60; i++){
        await Auction(
            'https://pwm.im-cdn.it/image/1385361429/xxs-c.jpg',
            'Terreni',
            `€${getRandomInt(50000, 500000).toString()}`,
            'Cupidatat ea duis aliquip magna.',
            getRandomInt(3, 5), 
            getRandomInt(70, 250),
            getRandomInt(1, 3), 
            getRandomInt(1, 4),
            'Eiusmod excepteur adipisicing dolor incididunt.',
            'Sint ullamco proident cupidatat et ut est ullamco consectetur elit. Elit dolor aute reprehenderit ex. Do ad quis duis commodo elit consectetur labore. Occaecat id laborum qui eu mollit nulla qui nostrud cupidatat. Sunt ex eu occaecat deserunt non voluptate sunt et anim deserunt. Id cupidatat nulla est est nulla laborum nisi quis incididunt laboris cillum velit ullamco aliqua. Magna sunt consequat ad nulla aliquip dolor. Ea incididunt pariatur velit minim sit. Nulla Lorem ea reprehenderit eiusmod aliqua laborum et quis minim. Exercitation sit magna est id culpa sit voluptate et nulla nisi. Qui commodo excepteur eiusmod culpa veniam est irure duis. Fugiat qui minim occaecat dolor ullamco proident laborum magna enim commodo.'
        ) 
    }

    for(let i = 0; i < 173; i++){
        await Agency(
            'https://pic.im-cdn.it/imagenoresize/1266881754.jpg',
            'Lorem Immobiliare',
            'Non magna adipisicing.',
            getRandomInt(1, 30),
            '0541 325 2457',
            getRandomInt(5, 500)
        )
    }

    process.exit(0)
}

async function createUser(
    email,
    password, 
    firstname,
    lastname,
    phone
){
    const user = await prisma.user.create({
        data: {
            email,
            password: await bcrypt.hash(password, 10),
            firstname,
            lastname,
            phone
        }
    })

    console.info('user created', user)

    return user

}

async function Buy(
    image,
    type,
    price,
    address,
    bedrooms,
    sqFootage,
    bathrooms,
    floors,
    descriptionTitle,
    description
){
    const createBuy = await prisma.buy.create({
        data: {
            image,
            type,
            price,
            address,
            bedrooms,
            sqFootage,
            bathrooms,
            floors,
            descriptionTitle,
            description
        }
    })

    console.info('buy created', createBuy)

    return createBuy
}

async function Rent(
    image,
    type,
    price,
    address,
    bedrooms,
    sqFootage,
    bathrooms,
    floors,
    descriptionTitle,
    description
){
    const createRent = await prisma.rent.create({
        data: {
            image,
            type,
            price,
            address,
            bedrooms,
            sqFootage,
            bathrooms,
            floors,
            descriptionTitle,
            description
        }
    })

    console.info('rent created', createRent)

    return createRent
}

async function Auction(
    image,
    type,
    price,
    address,
    bedrooms,
    sqFootage,
    bathrooms,
    floors,
    descriptionTitle,
    description
){
    const createAuction = await prisma.auction.create({
        data: {
            image,
            type,
            price,
            address,
            bedrooms,
            sqFootage,
            bathrooms,
            floors,
            descriptionTitle,
            description
        }
    })

    console.info('auction created', createAuction)

    return createAuction
}

async function Agency(
    image,
    name,
    address,
    history,
    phone,
    announcements
){
    const createAgency = await prisma.agency.create({
        data: {
            image,
            name,
            address,
            history,
            phone,
            announcements
        }
    })

    console.info('agency created', createAgency)

    return createAgency

}



seed().catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
})
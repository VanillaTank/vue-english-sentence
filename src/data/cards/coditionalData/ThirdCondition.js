export default {
  title: 'THIRD CONDITION',
  id: 'active-third-condition',
  cardFilter: {
    condition: 'third',
    voice: 'active',
  },
  theory: `<div>Используется для выражения воображаемых ситуаций в прошлом — тех, которые не произошли. Это означает, что мы говорим о том, что бы произошло, если бы ситуация сложилась иначе, но на самом деле она не изменилась. Мы также используем этот тип условных предложений, чтобы выразить сожаление или указать на возможные последствия прошлого действия или бездействия. Этот тип предложений четко указывает на невозможность изменения событий в прошлом.</div>`,
  schemas: [
    'If + Past Perfect (subject + had + V3), + subject (the same or another) + would have + V3',
    'If + Past Perfect (subject + had not + V3), + subject (the same or another) + wouldn\'t have + V3',
  ],
  examples: [
// I - regular - statement
    {
      texts: [
        {
          en: 'If I had cleaned the house, I would be relaxing now.',
          ru: 'Если бы я убрал дом, я бы сейчас отдыхал.',
          comment: '',
        },
        {
          en: 'If I had called her, she would be here now.',
          ru: 'Если бы я ей позвонил, она бы сейчас здесь была.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
// I - regular - negation
    {
      texts: [
        {
          en: 'If I hadn’t missed the deadline, I wouldn’t be stressed now.',
          ru: 'Если бы я не пропустил срок, я бы не нервничал сейчас.',
          comment: '',
        },
        {
          en: 'If I hadn’t canceled the meeting, it would have happened.',
          ru: 'Если бы я не отменил встречу, она бы состоялась.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
// I - irregular - statement
    {
      texts: [
        {
          en: 'If I had taken the train, I would have arrived earlier.',
          ru: 'Если бы я сел на поезд, я бы прибыл раньше.',
          comment: '',
        },
        {
          en: 'If I had driven to the airport, I would be there now.',
          ru: 'Если бы я поехал в аэропорт, я бы был там сейчас.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
// I - irregular - negation
    {
      texts: [
        {
          en: 'If I hadn’t drunk coffee, I would be sleeping now.',
          ru: 'Если бы я не выпил кофе, я бы сейчас спал.',
          comment: '',
        },
        {
          en: 'If I hadn’t gone to the concert, I would have more energy now.',
          ru: 'Если бы я не пошел на концерт, у меня было бы больше энергии сейчас.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// We - regular - statement
    {
      texts: [
        {
          en: 'If we had organized the event better, more people would have come.',
          ru: 'Если бы мы лучше организовали мероприятие, пришло бы больше людей.',
          comment: '',
        },
        {
          en: 'If we had studied more, we would understand the topic now.',
          ru: 'Если бы мы больше учились, мы бы сейчас понимали тему.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
// We - regular - negation
    {
      texts: [
        {
          en: 'If we hadn’t forgotten the plan, we wouldn’t be confused now.',
          ru: 'Если бы мы не забыли план, мы бы сейчас не были в замешательстве.',
          comment: '',
        },
        {
          en: 'If we hadn’t skipped the meeting, we would know the details.',
          ru: 'Если бы мы не пропустили встречу, мы бы знали детали.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
// We - irregular - statement
    {
      texts: [
        {
          en: 'If we had seen the movie, we would be discussing it now.',
          ru: 'Если бы мы посмотрели фильм, мы бы сейчас его обсуждали.',
          comment: '',
        },
        {
          en: 'If we had gone hiking, we would be tired now.',
          ru: 'Если бы мы пошли в поход, мы бы сейчас устали.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
// We - irregular - negation
    {
      texts: [
        {
          en: 'If we hadn’t lost the map, we wouldn’t be lost now.',
          ru: 'Если бы мы не потеряли карту, мы бы не заблудились.',
          comment: '',
        },
        {
          en: 'If we hadn’t broken the camera, we would have more pictures.',
          ru: 'Если бы мы не сломали камеру, у нас было бы больше фотографий.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// You - regular - statement
    {
      texts: [
        {
          en: 'If you had sent the email, they would have responded by now.',
          ru: 'Если бы ты отправил письмо, они бы уже ответили.',
          comment: '',
        },
        {
          en: 'If you had finished your homework, you would have free time now.',
          ru: 'Если бы ты закончил домашнюю работу, у тебя было бы свободное время.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
// You - regular - negation
    {
      texts: [
        {
          en: 'If you hadn’t forgotten your wallet, you wouldn’t need to borrow money.',
          ru: 'Если бы ты не забыл кошелек, тебе не пришлось бы занимать деньги.',
          comment: '',
        },
        {
          en: 'If you hadn’t missed the train, you would be at home now.',
          ru: 'Если бы ты не пропустил поезд, ты был бы сейчас дома.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
// You - irregular - statement
    {
      texts: [
        {
          en: 'If you had driven slower, you would have avoided the accident.',
          ru: 'Если бы ты ехал медленнее, ты бы избежал аварии.',
          comment: '',
        },
        {
          en: 'If you had chosen a different career, you would be happier now.',
          ru: 'Если бы ты выбрал другую карьеру, ты был бы счастливее сейчас.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
// You - irregular - negation
    {
      texts: [
        {
          en: 'If you hadn’t broken your leg, you would be able to play football.',
          ru: 'Если бы ты не сломал ногу, ты бы мог играть в футбол.',
          comment: '',
        },
        {
          en: 'If you hadn’t eaten so much, you wouldn’t feel sick now.',
          ru: 'Если бы ты не съел столько, ты бы сейчас не чувствовал себя плохо.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// HeSheIt - regular - statement
    {
      texts: [
        {
          en: 'If he had practiced more, he would be a better player now.',
          ru: 'Если бы он больше тренировался, он был бы лучшим игроком.',
          comment: '',
        },
        {
          en: 'If she had painted the walls, the room would look brighter.',
          ru: 'Если бы она покрасила стены, комната выглядела бы светлее.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
// HeSheIt - regular - negation
    {
      texts: [
        {
          en: 'If he hadn’t missed the meeting, he would know the details now.',
          ru: 'Если бы он не пропустил встречу, он бы знал детали сейчас.',
          comment: '',
        },
        {
          en: 'If she hadn’t skipped breakfast, she wouldn’t be hungry.',
          ru: 'Если бы она не пропустила завтрак, она бы не была голодна.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
// HeSheIt - irregular - statement
    {
      texts: [
        {
          en: 'If he had spoken up, he would have gotten the job.',
          ru: 'Если бы он высказался, он бы получил работу.',
          comment: '',
        },
        {
          en: 'If she had written the report, the meeting would be easier now.',
          ru: 'Если бы она написала отчет, встреча была бы проще.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
// HeSheIt - irregular - negation
    {
      texts: [
        {
          en: 'If he hadn’t eaten so late, he would be sleeping now.',
          ru: 'Если бы он не поел так поздно, он бы сейчас спал.',
          comment: '',
        },
        {
          en: 'If she hadn’t driven so fast, she wouldn’t have gotten a ticket.',
          ru: 'Если бы она не ехала так быстро, она бы не получила штраф.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// They - regular - statement
    {
      texts: [
        {
          en: 'If they had planned the event better, it would be successful now.',
          ru: 'Если бы они лучше спланировали мероприятие, оно было бы успешным сейчас.',
          comment: '',
        },
        {
          en: 'If they had called the hotel, they would have a reservation now.',
          ru: 'Если бы они позвонили в отель, у них была бы бронь.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
// They - regular - negation
    {
      texts: [
        {
          en: 'If they hadn’t forgotten the address, they wouldn’t be lost now.',
          ru: 'Если бы они не забыли адрес, они бы не заблудились.',
          comment: '',
        },
        {
          en: 'If they hadn’t canceled the event, everyone would be there now.',
          ru: 'Если бы они не отменили мероприятие, все бы были там сейчас.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
// They - irregular - statement
    {
      texts: [
        {
          en: 'If they had flown earlier, they would have arrived by now.',
          ru: 'Если бы они вылетели раньше, они бы уже прибыли.',
          comment: '',
        },
        {
          en: 'If they had broken the rule, they would have been punished.',
          ru: 'Если бы они нарушили правило, их бы наказали.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
// They - irregular - negation
    {
      texts: [
        {
          en: 'If they hadn’t forgotten their passports, they would be on vacation now.',
          ru: 'Если бы они не забыли свои паспорта, они бы были в отпуске сейчас.',
          comment: '',
        },
        {
          en: 'If they hadn’t missed the bus, they would have arrived on time.',
          ru: 'Если бы они не пропустили автобус, они бы прибыли вовремя.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

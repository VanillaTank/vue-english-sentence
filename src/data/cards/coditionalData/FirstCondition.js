export default {
  title: 'FIRST CONDITION',
  id: 'active-first-condition',
  cardFilter: {
    condition: 'first',
    voice: 'active',
  },
  theory: `<div>Используется для описания реальных или возможных ситуаций, которые могут произойти в будущем при выполнении определенного условия. В этих предложениях событие в главной части происходит, если выполняется условие, указанное в придаточной части. Первый тип условных предложений указывает на реальную возможность наступления событий.</div>
<br />
<div>Применяется для обсуждения ситуаций, в которых условия и результаты относятся к будущему. Первое условие говорит о том, что если определенное условие произойдет, то результат также вполне возможен.</div>`,
  schemas: [
    'If + Present Simple (Subject + V1) + , + Subject (the same or another) + will + V1',
    'If + Present Simple (Subject + do/does + not + V1) + , + Subject  (the same or another + will not + V1',
  ],
  examples: [
    {
      texts: [
        {
          en: 'If I finish my work early, I will watch a movie.',
          ru: 'Если я закончу работу рано, я посмотрю фильм.',
          comment: '',
        },
        {
          en: 'If I call her, she will answer immediately.',
          ru: 'Если я позвоню ей, она ответит сразу.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If I don’t finish my work early, I won’t watch a movie.',
          ru: 'Если я не закончу работу рано, я не буду смотреть фильм.',
          comment: '',
        },
        { en: 'If I don’t call her, she won’t answer.', ru: 'Если я не позвоню ей, она не ответит.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        {
          en: 'If I buy the tickets, we will go to the concert.',
          ru: 'Если я куплю билеты, мы пойдем на концерт.',
          comment: '',
        },
        {
          en: 'If I write him a letter, he will reply soon.',
          ru: 'Если я напишу ему письмо, он ответит скоро.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If I don’t buy the tickets, we won’t go to the concert.',
          ru: 'Если я не куплю билеты, мы не пойдем на концерт.',
          comment: '',
        },
        {
          en: 'If I don’t write him a letter, he won’t reply.',
          ru: 'Если я не напишу ему письмо, он не ответит.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },

// we
    {
      texts: [
        {
          en: 'If we finish the project today, we will have a party.',
          ru: 'Если мы закончим проект сегодня, мы устроим вечеринку.',
          comment: '',
        },
        {
          en: 'If we clean the house, we will invite our friends.',
          ru: 'Если мы уберем дом, мы пригласим друзей.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If we don’t finish the project today, we won’t have a party.',
          ru: 'Если мы не закончим проект сегодня, вечеринки не будет.',
          comment: '',
        },
        {
          en: 'If we don’t clean the house, we won’t invite anyone.',
          ru: 'Если мы не уберем дом, мы никого не пригласим.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        {
          en: 'If we speak to the manager, we will get a discount.',
          ru: 'Если мы поговорим с менеджером, мы получим скидку.',
          comment: '',
        },
        {
          en: 'If we take the wrong train, we will be late.',
          ru: 'Если мы сядем не на тот поезд, мы опоздаем.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If we don’t speak to the manager, we won’t get a discount.',
          ru: 'Если мы не поговорим с менеджером, мы не получим скидку.',
          comment: '',
        },
        {
          en: 'If we don’t take the wrong train, we won’t be late.',
          ru: 'Если мы не сядем на неправильный поезд, мы не опоздаем.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },

// you
    {
      texts: [
        {
          en: 'If you finish your homework, you will go out with friends.',
          ru: 'Если ты закончишь домашнюю работу, ты пойдешь гулять с друзьями.',
          comment: '',
        },
        {
          en: 'If you work hard, you will get promoted.',
          ru: 'Если ты будешь усердно работать, тебя повысят.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If you don’t finish your homework, you won’t go out with friends.',
          ru: 'Если ты не закончишь домашнюю работу, ты не пойдешь гулять.',
          comment: '',
        },
        {
          en: 'If you don’t work hard, you won’t get promoted.',
          ru: 'Если ты не будешь усердно работать, тебя не повысят.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        {
          en: 'If you choose this option, you will save money.',
          ru: 'Если ты выберешь этот вариант, ты сэкономишь деньги.',
          comment: '',
        },
        {
          en: 'If you catch the early bus, you will arrive on time.',
          ru: 'Если ты успеешь на ранний автобус, ты приедешь вовремя.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If you don’t choose this option, you won’t save money.',
          ru: 'Если ты не выберешь этот вариант, ты не сэкономишь.',
          comment: '',
        },
        {
          en: 'If you don’t catch the early bus, you won’t arrive on time.',
          ru: 'Если ты не успеешь на ранний автобус, ты не приедешь вовремя.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },

// heSheIt
    {
      texts: [
        {
          en: 'If she passes the test, she will get a certificate.',
          ru: 'Если она сдаст тест, она получит сертификат.',
          comment: '',
        },
        {
          en: 'If he prepares well, he will win the competition.',
          ru: 'Если он хорошо подготовится, он выиграет соревнование.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If she doesn’t pass the test, she won’t get a certificate.',
          ru: 'Если она не сдаст тест, она не получит сертификат.',
          comment: '',
        },
        {
          en: 'If he doesn’t prepare well, he won’t win the competition.',
          ru: 'Если он не подготовится хорошо, он не выиграет соревнование.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        {
          en: 'If he drives fast, he will reach the airport in time.',
          ru: 'Если он будет ехать быстро, он успеет в аэропорт.',
          comment: '',
        },
        {
          en: 'If she sees him, she will invite him to the party.',
          ru: 'Если она увидит его, она пригласит его на вечеринку.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If he doesn’t drive fast, he won’t reach the airport in time.',
          ru: 'Если он не будет ехать быстро, он не успеет в аэропорт.',
          comment: '',
        },
        {
          en: 'If she doesn’t see him, she won’t invite him to the party.',
          ru: 'Если она не увидит его, она не пригласит его на вечеринку.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },

// they
    {
      texts: [
        {
          en: 'If they finish early, they will join the event.',
          ru: 'Если они закончат рано, они присоединятся к мероприятию.',
          comment: '',
        },
        {
          en: 'If they study hard, they will pass the exam.',
          ru: 'Если они будут усердно учиться, они сдадут экзамен.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If they don’t finish early, they won’t join the event.',
          ru: 'Если они не закончат рано, они не присоединятся к мероприятию.',
          comment: '',
        },
        {
          en: 'If they don’t study hard, they won’t pass the exam.',
          ru: 'Если они не будут усердно учиться, они не сдадут экзамен.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        {
          en: 'If they bring snacks, everyone will be happy.',
          ru: 'Если они принесут закуски, все будут рады.',
          comment: '',
        },
        {
          en: 'If they find the address, they will come to the party.',
          ru: 'Если они найдут адрес, они придут на вечеринку.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        {
          en: 'If they don’t bring snacks, everyone won’t be happy.',
          ru: 'Если они не принесут закуски, никто не будет рад.',
          comment: '',
        },
        {
          en: 'If they don’t find the address, they won’t come to the party.',
          ru: 'Если они не найдут адрес, они не придут на вечеринку.',
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

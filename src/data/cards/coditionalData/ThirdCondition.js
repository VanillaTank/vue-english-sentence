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
    // I
    {
      texts: [
        {
          en: 'If I had finished the project, I would be able to relax now.',
          ru: 'Если бы я закончил проект, я бы мог отдохнуть сейчас.',
          comment: '',
        },
        {
          en: 'If I had invited him to the party, he would have come.',
          ru: 'Если бы я пригласил его на вечеринку, он бы пришел.',
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
          en: 'If I hadn’t eaten the cake, I wouldn’t feel so full.',
          ru: 'Если бы я не съел торт, я бы не чувствовал себя таким сытым.',
          comment: '',
        },
        {
          en: 'If I hadn’t broken the glass, I would be home by now.',
          ru: 'Если бы я не разбил стекло, я бы сейчас был дома.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// We
    {
      texts: [
        {
          en: 'If we had studied harder, we would have passed the exam.',
          ru: 'Если бы мы учились усерднее, мы бы сдали экзамен.',
          comment: '',
        },
        {
          en: 'If we had organized the meeting, more people would have attended.',
          ru: 'Если бы мы организовали встречу, больше людей бы пришло.',
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
          en: 'If we hadn’t seen the movie, we wouldn’t feel disappointed.',
          ru: 'Если бы мы не посмотрели фильм, мы бы не были разочарованы.',
          comment: '',
        },
        {
          en: 'If we hadn’t lost the key, we would still be outside.',
          ru: 'Если бы мы не потеряли ключ, мы бы всё еще были снаружи.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// You
    {
      texts: [
        {
          en: 'If you had studied every day, you would speak English fluently now.',
          ru: 'Если бы ты учился каждый день, ты бы сейчас бегло говорил по-английски.',
          comment: '',
        },
        {
          en: 'If you had cleaned your room, it would look much nicer now.',
          ru: 'Если бы ты убрал свою комнату, она бы выглядела намного лучше.',
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
          en: 'If you hadn’t missed the bus, you wouldn’t be late now.',
          ru: 'Если бы ты не пропустил автобус, ты бы не опоздал.',
          comment: '',
        },
        {
          en: 'If you hadn’t broken your phone, you would be able to call me.',
          ru: 'Если бы ты не разбил телефон, ты бы смог позвонить мне.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// HeSheIt
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
    {
      texts: [
        {
          en: 'If he hadn’t spent all his money, he wouldn’t be broke now.',
          ru: 'Если бы он не потратил все деньги, он бы не был сейчас на мели.',
          comment: '',
        },
        {
          en: 'If she hadn’t lost her keys, she would already be inside.',
          ru: 'Если бы она не потеряла свои ключи, она бы уже была внутри.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
// They
    {
      texts: [
        {
          en: 'If they had prepared in advance, the event would be a success now.',
          ru: 'Если бы они подготовились заранее, мероприятие было бы успешным.', comment: '',
        },
        {
          en: 'If they had painted the house, it would sell faster now.',
          ru: 'Если бы они покрасили дом, он бы сейчас продался быстрее.',
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
          en: 'If they hadn’t missed the flight, they wouldn’t be stuck here now.',
          ru: 'Если бы они не опоздали на рейс, они бы сейчас не застряли здесь.',
          comment: '',
        },
        {
          en: 'If they hadn’t lost their passports, they would already be on vacation.',
          ru: 'Если бы они не потеряли свои паспорта, они бы уже были в отпуске.',
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

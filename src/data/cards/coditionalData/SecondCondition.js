export default {
  title: 'SECOND CONDITION',
  id: 'active-second-condition',
  cardFilter: {
    condition: 'second',
    voice: 'active',
  },
  theory: `<div>Используется для выражения воображаемых или нереальных ситуаций в настоящем или будущем. Это может быть ситуация, которая гипотетически могла бы произойти, но вероятность этого мала или невозможна. Чаще всего используется, чтобы говорить о мечтах, желаниях или воображаемых событиях, употребляется для выражения совета или предложения (например, "if I were you" - "если бы я был на твоем месте").</div>
<br />
<div>В главной части предложения используется модальный глагол would.</div>
<br />
<div>В английском языке, при использовании условных предложений второго типа, для всех лиц часто используется форма were вместо was в условной части ("If I were..."). Это особенно актуально при гипотетических ситуациях.</div>`,
  schemas: [
    'If + Past Simple (subject + V1+ed/V2), subject (the same or another) + would + V1',
    'If + Past Simple (subject +  did not + V1), + subject (the same or another)  + would not + V1',
  ],
  examples: [
    {
      texts: [
        {
          en: 'If I finished the project, I would be able to relax now.',
          ru: 'Если бы я закончил проект, я бы сейчас смог отдохнуть.',
          comment: '',
        },
        {
          en: 'If I invited him to the party, he would definitely come.',
          ru: 'Если бы я пригласил его на вечеринку, он бы точно пришел.',
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
          en: 'If I didn’t break the glass, I would be home by now.',
          ru: 'Если бы я не разбил стекло, я бы уже был дома.',
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
          en: 'If we studied harder, we would pass the exam.',
          ru: 'Если бы мы учились усерднее, мы бы сдали экзамен.',
          comment: '',
        },
        {
          en: 'If we organized the meeting, more people would attend.',
          ru: 'Если бы мы организовали встречу, пришло бы больше людей.',
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
          en: 'If we hadn’t seen the movie, we wouldn’t be disappointed.',
          ru: 'Если бы мы не посмотрели фильм, мы бы не были разочарованы.',
          comment: '',
        },
        {
          en: 'If we didn’t lose the key, we would still be outside.',
          ru: 'Если бы мы не потеряли ключ, мы бы все еще были снаружи.',
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
          en: 'If you studied every day, you would speak English fluently.',
          ru: 'Если бы ты учился каждый день, ты бы бегло говорил по-английски.',
          comment: '',
        },
        {
          en: 'If you cleaned your room, it would look much nicer.',
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
          en: 'If you didn’t miss the bus, you wouldn’t be late.',
          ru: 'Если бы ты не опоздал на автобус, ты бы не опоздал.',
          comment: '',
        },
        {
          en: 'If you didn’t break your phone, you would be able to call me.',
          ru: 'Если бы ты не разбил свой телефон, ты бы смог позвонить мне.',
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
          en: 'If he practiced more, he would become a better player.',
          ru: 'Если бы он больше тренировался, он бы стал лучшим игроком.',
          comment: '',
        },
        {
          en: 'If she painted the walls, the room would look brighter.',
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
          ru: 'Если бы он не потратил все свои деньги, он бы сейчас не был на мели.',
          comment: '',
        },
        {
          en: 'If she didn’t lose her keys, she would already be inside.',
          ru: 'Если бы она не потеряла ключи, она бы уже была внутри.',
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
          en: 'If they prepared in advance, the event would be successful.',
          ru: 'Если бы они подготовились заранее, мероприятие прошло бы успешно.',
          comment: '',
        },
        {
          en: 'If they painted the house, it would sell faster.',
          ru: 'Если бы они покрасили дом, он бы продался быстрее.',
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
          en: 'If they didn’t miss the flight, they wouldn’t be stuck here.',
          ru: 'Если бы они не опоздали на рейс, они бы не застряли здесь.',
          comment: '',
        },
        {
          en: 'If they didn’t lose their passports, they would already be on vacation.',
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

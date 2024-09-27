export default {
  title: 'ZERO CONDITION',
  id: 'active-zero-condition',
  cardFilter: {
    condition: 'zero',
    voice: 'active',
  },
  theory: `<div>Conditional 0 (нулевой тип условных предложений) используется для описания общеизвестных фактов, закономерностей, привычных действий или неизменных истин. В этом типе условных предложений условие и результат всегда верны, то есть речь идёт о ситуациях, которые происходят при определённых условиях. Conditional 0 не относится к будущему или прошлому, а описывает постоянные или регулярные ситуации в настоящем. Использование:</div>
<div><b>Факты и законы природы:</b></div>
<div>Используется для описания ситуаций, которые всегда происходят, если выполняется условие. Это законы природы, физические явления и общепризнанные истины.</div>
<div><b>Привычки и правила:</b></div>
<div>Описывает действия, которые всегда происходят, если выполняется определённое условие. Это могут быть привычки, распорядки, общие правила.</div>`,
  schemas: [
    'If + subject + V1, subject/another subject + V1',
    'If + subject + do/does not + V1, subject/another subject + do/does not + V1',
  ],
  examples: [
    {
      texts: [
        {
          en: 'If I water the plants, they grow well.',
          ru: 'Если я поливаю растения, они хорошо растут.',
          comment: '',
        },
        { en: 'If I study hard, I pass the exams.', ru: 'Если я усердно учусь, я сдаю экзамены.', comment: '' },
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
          en: 'If I don\'t exercise regularly, I feel weak.',
          ru: 'Если я не занимаюсь регулярно, я чувствую слабость.',
          comment: '',
        },
        {
          en: 'If I don\'t eat breakfast, I get hungry quickly.',
          ru: 'Если я не завтракаю, я быстро проголодаюсь.',
          comment: '',
        },
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
          en: 'If I catch a cold, I stay in bed all day.',
          ru: 'Если я простужаюсь, я весь день остаюсь в постели.',
          comment: '',
        },
        {
          en: 'If I go to bed late, I wake up tired.',
          ru: 'Если я ложусь спать поздно, я просыпаюсь усталым.',
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
          en: 'If I don\'t break the rules, nothing bad happens.',
          ru: 'Если я не нарушаю правила, ничего плохого не происходит.',
          comment: '',
        },
        { en: 'If I don\'t speak up, no one listens.', ru: 'Если я не говорю громко, никто не слушает.', comment: '' },
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
          en: 'If we recycle, we reduce waste.',
          ru: 'Если мы перерабатываем отходы, мы сокращаем количество мусора.',
          comment: '',
        },
        { en: 'If we eat healthy, we stay fit.', ru: 'Если мы питаемся правильно, мы остаёмся в форме.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'If we don\'t study, we fail the test.', ru: 'Если мы не учимся, мы проваливаем тест.', comment: '' },
        {
          en: 'If we don\'t drive carefully, we cause accidents.',
          ru: 'Если мы не водим осторожно, мы становимся причиной аварий.',
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
          en: 'If we forget the tickets, we can\'t enter the event.',
          ru: 'Если мы забываем билеты, мы не можем попасть на мероприятие.',
          comment: '',
        },
        {
          en: 'If we run fast, we get there quicker.',
          ru: 'Если мы бежим быстро, мы добираемся туда быстрее.',
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
        { en: 'If we don\'t take a break, we get exhausted.', ru: 'Если мы не делаем перерыв, мы устаем.', comment: '' },
        {
          en: 'If we don\'t leave early, we miss the train.',
          ru: 'Если мы не уходим рано, мы опаздываем на поезд.',
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
        { en: 'If you study well, you pass the test.', ru: 'Если ты хорошо учишься, ты сдаёшь тест.', comment: '' },
        {
          en: 'If you practice often, you improve your skills.',
          ru: 'Если ты часто практикуешься, ты улучшаешь свои навыки.',
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
          en: 'If you don\'t finish the work, you get in trouble.',
          ru: 'Если ты не заканчиваешь работу, ты попадаешь в неприятности.',
          comment: '',
        },
        {
          en: 'If you don\'t clean your room, it becomes messy.',
          ru: 'Если ты не убираешь свою комнату, она становится грязной.',
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
          en: 'If you drive fast, you get to your destination quicker.',
          ru: 'Если ты едешь быстро, ты быстрее добираешься до места назначения.',
          comment: '',
        },
        {
          en: 'If you eat too much, you feel full.',
          ru: 'Если ты ешь слишком много, ты чувствуешь себя сытым.',
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
          en: 'If you don\'t see the sign, you miss the turn.',
          ru: 'Если ты не видишь знак, ты пропускаешь поворот.',
          comment: '',
        },
        {
          en: 'If you don\'t leave early, you miss the bus.',
          ru: 'Если ты не выходишь рано, ты пропускаешь автобус.',
          comment: '',
        },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },

// He/She/It
    {
      texts: [
        {
          en: 'If she walks to work, she stays fit.',
          ru: 'Если она ходит на работу пешком, она остаётся в форме.',
          comment: '',
        },
        {
          en: 'If he plays the piano, he improves his skill.',
          ru: 'Если он играет на пианино, он улучшает свои навыки.',
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
          en: 'If he doesn\'t study, he fails the exam.',
          ru: 'Если он не учится, он проваливает экзамен.',
          comment: '',
        },
        { en: 'If it doesn\'t rain, the plants die.', ru: 'Если не идёт дождь, растения погибают.', comment: '' },
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
          en: 'If he forgets his wallet, he can\'t pay.',
          ru: 'Если он забывает кошелёк, он не может заплатить.',
          comment: '',
        },
        {
          en: 'If she takes the bus, she arrives on time.',
          ru: 'Если она садится на автобус, она приезжает вовремя.',
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
          en: 'If she doesn\'t break the rules, she stays safe.',
          ru: 'Если она не нарушает правила, она остаётся в безопасности.',
          comment: '',
        },
        { en: 'If it doesn\'t snow, we don\'t ski.', ru: 'Если не идёт снег, мы не катаемся на лыжах.', comment: '' },
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
          en: 'If they study every day, they pass the exam.',
          ru: 'Если они учатся каждый день, они сдают экзамен.',
          comment: '',
        },
        { en: 'If they visit us often, we have fun.', ru: 'Если они часто нас навещают, нам весело.', comment: '' },
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
          en: 'If they don\'t exercise, they gain weight.',
          ru: 'Если они не занимаются спортом, они набирают вес.',
          comment: '',
        },
        {
          en: 'If they don\'t water the plants, they die.',
          ru: 'Если они не поливают растения, они погибают.',
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
          en: 'If they forget the time, they arrive late.',
          ru: 'Если они забывают время, они опаздывают.',
          comment: '',
        },
        {
          en: 'If they go shopping, they spend a lot of money.',
          ru: 'Если они идут за покупками, они тратят много денег.',
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
          en: 'If they don\'t find their keys, they can\'t leave.',
          ru: 'Если они не находят свои ключи, они не могут уйти.',
          comment: '',
        },
        {
          en: 'If they don\'t keep the secret, everyone knows.',
          ru: 'Если они не сохраняют секрет, все узнают.',
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

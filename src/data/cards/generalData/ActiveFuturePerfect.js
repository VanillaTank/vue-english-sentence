export default {
  title: 'ACTIVE FUTURE PERFECT',
  id: 'active-future-perfect',
  cardFilter: {
    time: 'future',
    timeType: 'perfect',
    voice: 'active',
  },
  theory: `<div>Active Future Perfect используется для обозначения действий, которые завершится к определённому моменту в будущем или для акцентирования на результате, который будет достигнут к определенному времени. Редко используется в повседневной речи и чаще встречается в письменных текстах или в формальном общении.</div>
<br/>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>

<div><b>By (к какому-то времени)</b>: by tomorrow, by next week, by the time... — к завтрашнему дню, к следующей неделе, к тому времени...</div>

<div><b>Before (до какого-то времени)</b>: before you arrive, before midnight — до твоего приезда, до полуночи.</div>`,
  schemas: [
    'Subject + will have + V3',
    'Subject + will not have + V3',
    'Will + subject + have + V3 ?',
  ],
  examples: [
// I
    {
      texts: [
        {
          en: 'I will have finished my book by tomorrow.',
          ru: 'Я закончу свою книгу к завтрашнему дню.',
          comment: '',
        },
        {
          en: 'I will have learned a new language by next year.',
          ru: 'Я выучу новый язык к следующему году.',
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
          en: 'I will not have completed the project by the deadline.',
          ru: 'Я не завершу проект к крайнему сроку.',
          comment: '',
        },
        {
          en: 'I will not have started the assignment by this evening.',
          ru: 'Я не начну задание к сегодняшнему вечеру.',
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
          en: 'I will have eaten by the time you arrive.',
          ru: 'Я поем к тому времени, когда ты приедешь.',
          comment: '',
        },
        {
          en: 'I will have taken the medicine by the time you call.',
          ru: 'Я приму лекарство к тому времени, когда ты позвонишь.',
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
        { en: 'I will not have gone to bed before midnight.', ru: 'Я не лягу спать до полуночи.', comment: '' },
        {
          en: 'I will not have done the laundry by the weekend.',
          ru: 'Я не постираю белье к выходным.',
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
          en: 'We will have prepared dinner by the time they arrive.',
          ru: 'Мы приготовим ужин к тому времени, когда они приедут.',
          comment: '',
        },
        {
          en: 'We will have planned the trip by next month.',
          ru: 'Мы спланируем поездку к следующему месяцу.',
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
        { en: 'We will not have cleaned the house by evening.', ru: 'Мы не уберем дом к вечеру.', comment: '' },
        {
          en: 'We will not have painted the room by the time guests arrive.',
          ru: 'Мы не покрасим комнату к тому времени, когда придут гости.',
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
          en: 'We will have sung the song by the end of the party.',
          ru: 'Мы споем песню к концу вечеринки.',
          comment: '',
        },
        {
          en: 'We will have driven for five hours by noon.',
          ru: 'Мы будем ехать пять часов к полудню.',
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
          en: 'We will not have left the city by nightfall.',
          ru: 'Мы не уедем из города до наступления ночи.',
          comment: '',
        },
        {
          en: 'We will not have found the solution by tomorrow.',
          ru: 'Мы не найдем решение к завтрашнему дню.',
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
        { en: 'You will have finished the report by noon.', ru: 'Ты закончишь отчет к полудню.', comment: '' },
        {
          en: 'You will have submitted the form by the end of the day.',
          ru: 'Ты отправишь форму до конца дня.',
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
          en: 'You will not have cooked dinner by the time they arrive.',
          ru: 'Ты не приготовишь ужин к тому времени, когда они приедут.',
          comment: '',
        },
        {
          en: 'You will not have written the essay by the weekend.',
          ru: 'Ты не напишешь эссе к выходным.',
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
          en: 'You will have gone home by the time the movie ends.',
          ru: 'Ты уйдешь домой к тому времени, когда закончится фильм.',
          comment: '',
        },
        {
          en: 'You will have spoken to her by tomorrow morning.',
          ru: 'Ты поговоришь с ней до завтрашнего утра.',
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
        { en: 'You will not have slept before midnight.', ru: 'Ты не уснешь до полуночи.', comment: '' },
        {
          en: 'You will not have brought the documents by the meeting.',
          ru: 'Ты не принесешь документы к встрече.',
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
        { en: 'She will have cleaned the room by evening.', ru: 'Она уберет комнату к вечеру.', comment: '' },
        {
          en: 'He will have prepared the presentation by tomorrow.',
          ru: 'Он подготовит презентацию к завтрашнему дню.',
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
          en: 'He will not have finished his homework by dinner.',
          ru: 'Он не закончит домашнее задание к ужину.',
          comment: '',
        },
        {
          en: 'She will not have decorated the room by the party.',
          ru: 'Она не украсит комнату к вечеринке.',
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
          en: 'It will have grown by the time you see it.',
          ru: 'Оно вырастет к тому времени, когда ты его увидишь.',
          comment: '',
        },
        {
          en: 'He will have sung at the concert by next week.',
          ru: 'Он споет на концерте к следующей неделе.',
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
          en: 'She will not have left the office by 6 PM.',
          ru: 'Она не уйдет из офиса к 6 вечера.',
          comment: '',
        },
        {
          en: 'He will not have broken the habit by then.',
          ru: 'Он не избавится от привычки к тому времени.',
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
          en: 'They will have finished the project by Friday.',
          ru: 'Они закончат проект к пятнице.',
          comment: '',
        },
        { en: 'They will have painted the house by summer.', ru: 'Они покрасят дом к лету.', comment: '' },
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
          en: 'They will not have completed the assignment by tonight.',
          ru: 'Они не завершат задание к сегодняшнему вечеру.',
          comment: '',
        },
        {
          en: 'They will not have booked the tickets by tomorrow.',
          ru: 'Они не забронируют билеты к завтрашнему дню.',
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
          en: 'They will have driven to the airport by noon.',
          ru: 'Они приедут в аэропорт к полудню.',
          comment: '',
        },
        {
          en: 'They will have spoken to the manager by tomorrow.',
          ru: 'Они поговорят с менеджером к завтрашнему дню.',
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
          en: 'They will not have flown to Paris by next week.',
          ru: 'Они не улетят в Париж к следующей неделе.',
          comment: '',
        },
        {
          en: 'They will not have found the solution by tonight.',
          ru: 'Они не найдут решение к сегодняшнему вечеру.',
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

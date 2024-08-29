export default {
  title: 'ACTIVE FUTURE CONTINUOUS',
  id: 'active-future-continuous',
  cardFilter: {
    time: 'future',
    timeType: 'continuous',
    voice: 'active',
  },
  theory: `<div>Active Future Continuous используется для описания действий, которые будут находиться в процессе выполнения в заданный момент будущего времени. Это время используется в следующих ситуациях:</div>

<div><b>Действие, которое будет происходить в конкретный момент в будущем.</b></div>
<div><b>Длительное действие, которое будет происходить в будущем</b>: Указывает, что действие работы над проектом будет длиться в течение всей следующей недели.
</div>

<div><b>Прогнозы или предположения о будущем.</b><div>
<div><b>Запланированные события в будущем.</b><div>

<br/>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div>
<div><b>tomorrow</b>: завтра</div>
<div><b>next week</b>: на следующей неделе</div>
<div><b>at 8 o'clock</b>: в 8 часов</div>
и другие подобные временные маркеры, которые указывают на конкретные моменты или периоды в будущем.
</div>`,
  schemas: [
    'Subject + will be + V1-ing',
    'Subject + will not (won’t) be + V1-ing',
    'Will + Subject + be + V-ing?',
  ],
  examples: [
// I
    {
      texts: [
        { en: 'I will be calling my friend later.', ru: 'Я буду звонить своему другу позже.', comment: '' },
        {
          en: 'I will be discussing the project tomorrow morning.',
          ru: 'Завтра утром я буду обсуждать проект.',
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
        { en: 'I will not be traveling next week.', ru: 'Я не буду путешествовать на следующей неделе.', comment: '' },
        { en: 'I will not be finishing the report by noon.', ru: 'Я не буду заканчивать отчет к полудню.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'I will be driving to the city tonight.', ru: 'Сегодня вечером я буду ехать в город.', comment: '' },
        { en: 'I will be taking the test tomorrow.', ru: 'Завтра я буду сдавать тест.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I will not be eating out this weekend.', ru: 'Я не буду есть вне дома в эти выходные.', comment: '' },
        { en: 'I will not be getting up early tomorrow.', ru: 'Я не буду вставать рано завтра.', comment: '' },
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
          en: 'We will be visiting our relatives next month.',
          ru: 'Мы будем навещать наших родственников в следующем месяце.',
          comment: '',
        },
        { en: 'We will be preparing dinner together.', ru: 'Мы будем готовить ужин вместе.', comment: '' },
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
          en: 'We will not be studying for the exam tonight.',
          ru: 'Мы не будем готовиться к экзамену сегодня вечером.',
          comment: '',
        },
        {
          en: 'We will not be attending the meeting tomorrow.',
          ru: 'Мы не будем посещать собрание завтра.',
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
        { en: 'We will be choosing a new car soon.', ru: 'Скоро мы будем выбирать новую машину.', comment: '' },
        {
          en: 'We will be speaking with the manager later.',
          ru: 'Мы будем разговаривать с менеджером позже.',
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
        { en: 'We will not be buying groceries today.', ru: 'Мы не будем покупать продукты сегодня.', comment: '' },
        { en: 'We will not be taking any risks.', ru: 'Мы не будем рисковать.', comment: '' },
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
        { en: 'You will be learning a new language.', ru: 'Ты будешь изучать новый язык.', comment: '' },
        { en: 'You will be joining us for dinner.', ru: 'Ты присоединишься к нам на ужин.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You will not be finishing your work on time.', ru: 'Ты не закончишь свою работу вовремя.', comment: '' },
        {
          en: 'You will not be visiting them this weekend.',
          ru: 'Ты не будешь навещать их в эти выходные.',
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
        { en: 'You will be meeting the new team soon.', ru: 'Ты скоро встретишься с новой командой.', comment: '' },
        { en: 'You will be writing a report later.', ru: 'Ты будешь писать отчет позже.', comment: '' },
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
          en: 'You will not be taking any calls tomorrow.',
          ru: 'Ты не будешь отвечать на звонки завтра.',
          comment: '',
        },
        { en: 'You will not be seeing him for a while.', ru: 'Ты не увидишь его некоторое время.', comment: '' },
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
        { en: 'He will be painting the house.', ru: 'Он будет красить дом.', comment: '' },
        { en: 'She will be organizing the event.', ru: 'Она будет организовывать мероприятие.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'It will not be running smoothly.', ru: 'Это не будет работать гладко.', comment: '' },
        {
          en: 'He will not be cleaning the garage this weekend.',
          ru: 'Он не будет убирать гараж в эти выходные.',
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
          en: 'She will be driving her new car tomorrow.',
          ru: 'Она будет водить свою новую машину завтра.',
          comment: '',
        },
        { en: 'It will be breaking down soon.', ru: 'Это скоро сломается.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He will not be finding the answer easily.', ru: 'Он не найдет ответ легко.', comment: '' },
        { en: 'She will not be meeting him again.', ru: 'Она не будет встречаться с ним снова.', comment: '' },
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
        { en: 'They will be watching a movie tonight.', ru: 'Они будут смотреть фильм сегодня вечером.', comment: '' },
        {
          en: 'They will be attending a conference tomorrow.',
          ru: 'Они будут посещать конференцию завтра.',
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
        { en: 'They will not be playing soccer tomorrow.', ru: 'Они не будут играть в футбол завтра.', comment: '' },
        { en: 'They will not be preparing lunch.', ru: 'Они не будут готовить обед.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'They will be taking a break soon.', ru: 'Они скоро будут делать перерыв.', comment: '' },
        { en: 'They will be leaving the city tomorrow.', ru: 'Они будут покидать город завтра.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They will not be going to the concert.', ru: 'Они не пойдут на концерт.', comment: '' },
        { en: 'They will not be finding a solution soon.', ru: 'Они не найдут решение в ближайшее время.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

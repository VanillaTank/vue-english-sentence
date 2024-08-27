export default {
  title: 'ACTIVE FUTURE SIMPLE',
  id: 'active-future-simple',
  cardFilter: {
    time: 'future',
    timeType: 'simple',
    voice: 'active',
  },
  theory: `
<div>Active Future Simple — это время, используемое для описания действий, которые будут происходить в будущем. Оно охватывает планы, намерения, предсказания, предположения, а также спонтанные решения, принятые в момент разговора. Future Simple применяется в следующих случаях:</div>

<div><b>Планы и намерения</b>: Когда говорим о том, что собираемся сделать в будущем.</div>
<div>I will study hard for my exams. (Я буду усердно готовиться к экзаменам.)</div>

<div><b>Предсказания и предположения</b>: Когда выражаем мнение или прогноз на будущее.</div>
<div>It will rain tomorrow. (Завтра пойдет дождь.)</div>

<div><b>Спонтанные решения</b>: Когда решение принимается в момент речи.</div>
<div>I think I will have coffee. (Думаю, я выпью кофе.)</div>
`,
  schemas: [
    'Subject + will + V1',
    'Subject + will not + V1',
    'Will + subject + V1 ?',
  ],
  examples: [
    // I
    {
      texts: [
        { en: 'I will call you tomorrow.', ru: 'Я позвоню тебе завтра.', comment: '' },
        {
          en: 'I will finish my project next week.',
          ru: 'Я закончу свой проект на следующей неделе.',
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
        { en: 'I won’t visit the museum this weekend.', ru: 'Я не пойду в музей на этих выходных.', comment: '' },
        { en: 'I won’t watch TV tonight.', ru: 'Я не буду смотреть телевизор сегодня вечером.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'I will take the train to work.', ru: 'Я поеду на работу на поезде.', comment: '' },
        { en: 'I will eat lunch at 1 PM.', ru: 'Я пообедаю в час дня.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I won’t buy a new phone this year.', ru: 'Я не куплю новый телефон в этом году.', comment: '' },
        { en: 'I won’t forget to send you the report.', ru: 'Я не забуду отправить тебе отчет.', comment: '' },
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
          en: 'We will visit our friends next weekend.',
          ru: 'Мы навестим наших друзей на следующих выходных.',
          comment: '',
        },
        { en: 'We will bake cookies for the party.', ru: 'Мы испечем печенье для вечеринки.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We won’t go to the beach tomorrow.', ru: 'Мы не поедем на пляж завтра.', comment: '' },
        { en: 'We won’t paint the house this month.', ru: 'Мы не будем красить дом в этом месяце.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'We will have dinner at a new restaurant.', ru: 'Мы поужинаем в новом ресторане.', comment: '' },
        {
          en: 'We will choose a movie to watch tonight.',
          ru: 'Мы выберем фильм для просмотра сегодня вечером.',
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
        { en: 'We won’t buy tickets online.', ru: 'Мы не будем покупать билеты онлайн.', comment: '' },
        { en: 'We won’t fly to New York this summer.', ru: 'Мы не полетим в Нью-Йорк этим летом.', comment: '' },
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
        { en: 'You will complete the assignment by Friday.', ru: 'Ты закончишь задание к пятнице.', comment: '' },
        { en: 'You will start a new job soon.', ru: 'Ты скоро начнешь новую работу.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You won’t miss the meeting tomorrow.', ru: 'Ты не пропустишь встречу завтра.', comment: '' },
        { en: 'You won’t forget to bring the documents.', ru: 'Ты не забудешь принести документы.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'You will take a vacation next month.', ru: 'Ты возьмешь отпуск в следующем месяце.', comment: '' },
        { en: 'You will buy new shoes tomorrow.', ru: 'Ты купишь новые туфли завтра.', comment: '' },
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
          en: 'You won’t drive to the office tomorrow.',
          ru: 'Ты не поедешь в офис завтра на машине.',
          comment: '',
        },
        { en: 'You won’t wear a jacket to the party.', ru: 'Ты не наденешь куртку на вечеринку.', comment: '' },
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
          en: 'She will attend the conference next week.',
          ru: 'Она посетит конференцию на следующей неделе.',
          comment: '',
        },
        { en: 'He will cook dinner tonight.', ru: 'Он приготовит ужин сегодня вечером.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He won’t play soccer tomorrow.', ru: 'Он не будет играть в футбол завтра.', comment: '' },
        { en: 'It won’t rain this weekend.', ru: 'Дождя в эти выходные не будет.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'She will give a presentation tomorrow.', ru: 'Она выступит с презентацией завтра.', comment: '' },
        { en: 'It will take time to finish the project.', ru: 'Завершение проекта займет время.', comment: '' },
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
          en: 'She won’t buy a new dress this week.',
          ru: 'Она не купит новое платье на этой неделе.',
          comment: '',
        },
        { en: 'He won’t leave the office early.', ru: 'Он не уйдет из офиса рано.', comment: '' },
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
        { en: 'They will travel to Japan next year.', ru: 'Они поедут в Японию в следующем году.', comment: '' },
        {
          en: 'They will organize a meeting next Monday.',
          ru: 'Они организуют встречу в следующий понедельник.',
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
        { en: 'They won’t work late tonight.', ru: 'Они не будут работать допоздна сегодня.', comment: '' },
        {
          en: 'They won’t clean the house this weekend.',
          ru: 'Они не будут убирать дом в эти выходные.',
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
          en: 'They will buy a new car next month.',
          ru: 'Они купят новую машину в следующем месяце.',
          comment: '',
        },
        { en: 'They will write a letter to the company.', ru: 'Они напишут письмо в компанию.', comment: '' },
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
          en: 'They won’t bring lunch to the office tomorrow.',
          ru: 'Они не принесут обед в офис завтра.',
          comment: '',
        },
        { en: 'They won’t forget to lock the door.', ru: 'Они не забудут закрыть дверь на замок.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

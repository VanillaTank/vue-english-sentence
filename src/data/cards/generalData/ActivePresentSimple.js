export default {
  title: 'ACTIVE PRESENT SIMPLE',
  id: 'active-present-simple',
  cardFilter: {
    time: 'present',
    timeType: 'simple',
    voice: 'active',
  },
  theory: `
<div>Active Present Simple — это время, которое используется для описания действий, происходящих в настоящем с определенной регулярностью или частотой. Оно также может описывать общие истины, факты, привычки, повседневные действия или постоянные ситуации, которые верны на протяжении долгого времени.</div>

<div>
Временные маркеры, указывающие на Present Simple, включают: <b>every day/week/month, usually, often, sometimes, always, never, on Mondays, in the morning, at night</b> и т.д.
</div>`,

  schemas: [
    'Subject + V1+ed (для правильных глаголов) / V2 (для неправильных глаголов)',
    'Subject + did not + V1',
    'Did + subject + V1 ?',
  ],
  examples: [
    // I
    {
      texts: [
        { en: 'I enjoy reading books.', ru: 'Я наслаждаюсь чтением книг.', comment: '' },
        { en: 'I visit my friends every weekend.', ru: 'Я навещаю своих друзей каждые выходные.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I don’t watch TV often.', ru: 'Я не часто смотрю телевизор.', comment: '' },
        { en: 'I don’t play video games on weekdays.', ru: 'Я не играю в видеоигры по будням.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'I buy groceries every Monday.', ru: 'Я покупаю продукты каждый понедельник.', comment: '' },
        { en: 'I go to the gym after work.', ru: 'Я хожу в спортзал после работы.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I don’t take the bus to work.', ru: 'Я не езжу на автобусе на работу.', comment: '' },
        { en: 'I don’t eat meat.', ru: 'Я не ем мясо.', comment: '' },
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
        { en: 'We enjoy hiking on weekends.', ru: 'Мы наслаждаемся походами по выходным.', comment: '' },
        {
          en: 'We visit our grandparents every summer.',
          ru: 'Мы навещаем своих бабушку и дедушку каждое лето.',
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
        { en: 'We don’t watch scary movies.', ru: 'Мы не смотрим страшные фильмы.', comment: '' },
        { en: 'We don’t drink coffee in the evening.', ru: 'Мы не пьем кофе вечером.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'We buy fresh vegetables every week.', ru: 'Мы покупаем свежие овощи каждую неделю.', comment: '' },
        { en: 'We make plans for the weekend on Fridays.', ru: 'Мы планируем выходные по пятницам.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We don’t take the train to work.', ru: 'Мы не ездим на работу на поезде.', comment: '' },
        { en: 'We don’t eat out during the week.', ru: 'Мы не едим вне дома в течение недели.', comment: '' },
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
        { en: 'You play the guitar very well.', ru: 'Ты играешь на гитаре очень хорошо.', comment: '' },
        { en: 'You visit your parents every month.', ru: 'Ты навещаешь своих родителей каждый месяц.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You don’t like spicy food.', ru: 'Ты не любишь острую еду.', comment: '' },
        { en: 'You don’t watch TV in the morning.', ru: 'Ты не смотришь телевизор по утрам.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'You make excellent pancakes.', ru: 'Ты готовишь отличные блины.', comment: '' },
        { en: 'You go jogging every morning.', ru: 'Ты бегаешь каждое утро.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You don’t drive to work.', ru: 'Ты не ездишь на работу на машине.', comment: '' },
        {
          en: 'You don’t eat breakfast before leaving the house.',
          ru: 'Ты не завтракаешь перед выходом из дома.',
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
        { en: 'He enjoys running in the park.', ru: 'Он любит бегать в парке.', comment: '' },
        {
          en: 'She visits her grandmother every Sunday.',
          ru: 'Она навещает свою бабушку каждое воскресенье.',
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
        { en: 'She doesn’t like loud music.', ru: 'Она не любит громкую музыку.', comment: '' },
        { en: 'It doesn’t rain much in summer.', ru: 'Летом редко идет дождь.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'He takes the bus to work every day.', ru: 'Он каждый день ездит на работу на автобусе.', comment: '' },
        { en: 'It freezes during the winter.', ru: 'Зимой все замерзает.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He doesn’t eat fast food.', ru: 'Он не ест фастфуд.', comment: '' },
        { en: 'She doesn’t drive to work.', ru: 'Она не ездит на работу на машине.', comment: '' },
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
        { en: 'They enjoy going to the cinema.', ru: 'Они любят ходить в кино.', comment: '' },
        { en: 'They visit their friends on weekends.', ru: 'Они навещают своих друзей по выходным.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They don’t watch horror movies.', ru: 'Они не смотрят фильмы ужасов.', comment: '' },
        { en: 'They don’t eat junk food.', ru: 'Они не едят вредную еду.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'They go for a walk every evening.', ru: 'Они гуляют каждый вечер.', comment: '' },
        { en: 'They take the kids to school every day.', ru: 'Они каждый день отвозят детей в школу.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They don’t buy expensive clothes.', ru: 'Они не покупают дорогую одежду.', comment: '' },
        { en: 'They don’t drink coffee in the evening.', ru: 'Они не пьют кофе вечером.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

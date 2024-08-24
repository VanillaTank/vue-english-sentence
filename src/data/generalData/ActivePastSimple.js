export default {
  title: 'ACTIVE PAST SIMPLE',
  cardFilter: {
    time: 'past',
    timeType: 'simple',
    voice: 'active',
  },
  theory: `Past Simple в активном залоге (Active Voice) используется для описания действий, которые завершились в прошлом. Эта форма времени помогает выразить:

- Факты о прошлом. Действия или состояния, которые были истинными в определенный момент в прошлом.
"He was born in 1985."
"She lived in Paris for three years."

- Обычные или регулярные действия в прошлом.
Используются маркеры времени, указывающие на регулярность действия в прошлом.
"When I was young, I played soccer every weekend."
"They visited their grandparents every summer."

-Единичные, завершенные действия в прошлом. Эти действия произошли в конкретный момент в прошлом и больше не повторяются.
"I finished my homework last night." 
"We watched a movie yesterday."

Ключевые маркеры времени для Past Simple:

yesterday (вчера): Указывает на действия, произошедшие накануне. "I met him yesterday."
last week/month/year (на прошлой неделе/в прошлом месяце/в прошлом году): Указывает на конкретный период в прошлом. "She traveled to Spain last summer."
when + событие в прошлом (когда...): Обозначает время, когда произошло действие. Пример: "When I was a child, we lived near the beach."
ago (назад): Указывает на количество времени, прошедшее с момента действия. "He left two hours ago."
in [год] (в [год]): Указывает на конкретный год. "They moved to New York in 1997."
`,
  schemas: [
    'Subject + V1+ed (для правильных глаголов) / V2 (для неправильных глаголов)',
    'Subject + did not + V1',
    'Did + subject + V1 ?',
  ],
  examples: [
    // I
    {
      texts: [
        { en: 'I painted a picture.', ru: 'Я нарисовал картину.', comment: '' },
        {
          en: 'I visited my grandparents last weekend.',
          ru: 'Я навестил своих бабушку и дедушку на прошлых выходных.',
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
        { en: 'I didn’t finish the report.', ru: 'Я не закончил отчет.', comment: '' },
        { en: 'I didn’t clean the house yesterday.', ru: 'Я не убрал дом вчера.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'I wrote a letter.', ru: 'Я написал письмо.', comment: '' },
        {
          en: 'I drove to the countryside last weekend.',
          ru: 'Я поехал за город на прошлых выходных.',
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
        { en: 'I didn’t see the movie.', ru: 'Я не посмотрел фильм.', comment: '' },
        { en: 'I didn’t eat breakfast this morning.', ru: 'Я не позавтракал этим утром.', comment: '' },
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
        { en: 'We visited the museum.', ru: 'Мы посетили музей.', comment: '' },
        {
          en: 'We organized a charity event last year.',
          ru: 'Мы организовали благотворительное мероприятие в прошлом году.',
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
        { en: 'We didn’t complete the project.', ru: 'Мы не закончили проект.', comment: '' },
        {
          en: 'We didn’t attend the conference last week.',
          ru: 'Мы не посетили конференцию на прошлой неделе.',
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
        { en: 'We built a treehouse.', ru: 'Мы построили дом на дереве.', comment: '' },
        {
          en: 'We chose the best location for our vacation.',
          ru: 'Мы выбрали лучшее место для нашего отпуска.',
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
        { en: 'We didn’t swim in the lake.', ru: 'Мы не купались в озере.', comment: '' },
        { en: 'We didn’t take the early flight.', ru: 'Мы не взяли ранний рейс.', comment: '' },
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
        { en: 'You cleaned the room.', ru: 'Ты убрал комнату.', comment: '' },
        {
          en: 'You prepared the dinner for your family.',
          ru: 'Ты приготовил ужин для своей семьи.',
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
        { en: 'You didn’t finish the assignment.', ru: 'Ты не закончил задание.', comment: '' },
        { en: 'You didn’t call your friend yesterday.', ru: 'Ты не позвонил своему другу вчера.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'You drove to the city.', ru: 'Ты поехал в город.', comment: '' },
        { en: 'You took the last train home.', ru: 'Ты сел на последний поезд домой.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You didn’t eat the cake.', ru: 'Ты не съел торт.', comment: '' },
        { en: 'You didn’t see the email I sent.', ru: 'Ты не увидел письмо, которое я отправил.', comment: '' },
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
        { en: 'She cooked a delicious meal.', ru: 'Она приготовила вкусное блюдо.', comment: '' },
        { en: 'He finished his book yesterday.', ru: 'Он закончил свою книгу вчера.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He didn’t clean his room.', ru: 'Он не убрал свою комнату.', comment: '' },
        { en: 'It didn’t work properly.', ru: 'Это не работало должным образом.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'He wrote a letter to his friend.', ru: 'Он написал письмо своему другу.', comment: '' },
        { en: 'She drove to the store.', ru: 'Она поехала в магазин.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'She didn’t see the movie.', ru: 'Она не посмотрела фильм.', comment: '' },
        { en: 'It didn’t rain last night.', ru: 'Прошлой ночью не было дождя.', comment: '' },
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
        { en: 'They visited the park.', ru: 'Они посетили парк.', comment: '' },
        {
          en: 'They organized a surprise party for their friend.',
          ru: 'Они организовали вечеринку-сюрприз для своего друга.',
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
        { en: 'They didn’t complete the task.', ru: 'Они не завершили задание.', comment: '' },
        {
          en: 'They didn’t visit the museum during their trip.',
          ru: 'Они не посетили музей во время своей поездки.',
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
        { en: 'They bought new furniture.', ru: 'Они купили новую мебель.', comment: '' },
        { en: 'They flew to Paris last summer.', ru: 'Прошлым летом они полетели в Париж.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They didn’t find the keys.', ru: 'Они не нашли ключи.', comment: '' },
        {
          en: 'They didn’t bring the documents to the meeting.',
          ru: 'Они не принесли документы на встречу.',
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

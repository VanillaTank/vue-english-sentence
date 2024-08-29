export default {
  title: 'ACTIVE PRESENT CONTINUOUS',
  id: 'active-present-continuous',
  cardFilter: {
    time: 'present',
    timeType: 'continuous',
    voice: 'active',
  },
  theory: `<div>Active Present Continuous используется для описания действий, которые происходят в данный момент или в ближайшем будущем, например для выражения запланированных действий в будущем. Present Continuous используется в следующих ситуациях:</div>
<div><b>Действие, происходящее в момент речи.</b></div>
<div><b>Временное действие</b>: действие имеет определенные временные рамки, но не обязательно происходит прямо в данный момент.</div>
<div>"I am working on a new project this month." (Я работаю над новым проектом в этом месяце.)</div>
<div><b>Запланированное действие в ближайшем будущем</b>:</div>
<br/>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div>now, at the moment, currently, right now.</div>
<br/>
<div>Present Continuous помогает показать, что действие находится в процессе, а не является завершенным фактом.</div>`,
  schemas: [
    'Subject + am/is/are + V-ing',
    'Subject + am/is/are + not + V-ing',
    'Am/Is/Are + subject + V-ing ?',
  ],
  examples: [
    // I
    {
      texts: [
        { en: 'I am writing a letter.', ru: 'Я пишу письмо.', comment: '' },
        { en: 'I am painting a picture.', ru: 'Я рисую картину.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I am not driving to work.', ru: 'Я не еду на работу.', comment: '' },
        { en: 'I am not cooking dinner.', ru: 'Я не готовлю ужин.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'I am making a cake.', ru: 'Я делаю торт.', comment: '' },
        { en: 'I am singing a song.', ru: 'Я пою песню.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I am not drinking tea.', ru: 'Я не пью чай.', comment: '' },
        { en: 'I am not driving a car.', ru: 'Я не вожу машину.', comment: '' },
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
        { en: 'We are watching TV.', ru: 'Мы смотрим телевизор.', comment: '' },
        { en: 'We are playing chess.', ru: 'Мы играем в шахматы.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We are not cleaning the room.', ru: 'Мы не убираем комнату.', comment: '' },
        { en: 'We are not waiting for the bus.', ru: 'Мы не ждем автобус.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'We are taking a walk.', ru: 'Мы гуляем.', comment: '' },
        { en: 'We are driving home.', ru: 'Мы едем домой.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We are not eating lunch.', ru: 'Мы не обедаем.', comment: '' },
        { en: 'We are not drinking water.', ru: 'Мы не пьем воду.', comment: '' },
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
        { en: 'You are reading a book.', ru: 'Ты читаешь книгу.', comment: '' },
        { en: 'You are studying English.', ru: 'Ты изучаешь английский.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You are not listening to music.', ru: 'Ты не слушаешь музыку.', comment: '' },
        { en: 'You are not doing homework.', ru: 'Ты не делаешь домашнее задание.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'You are driving a car.', ru: 'Ты водишь машину.', comment: '' },
        { en: 'You are eating dinner.', ru: 'Ты ужинаешь.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You are not writing an email.', ru: 'Ты не пишешь письмо.', comment: '' },
        { en: 'You are not swimming in the pool.', ru: 'Ты не плаваешь в бассейне.', comment: '' },
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
        { en: 'She is cooking dinner.', ru: 'Она готовит ужин.', comment: '' },
        { en: 'He is learning to play the guitar.', ru: 'Он учится играть на гитаре.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He is not fixing the car.', ru: 'Он не чинит машину.', comment: '' },
        { en: 'She is not washing the dishes.', ru: 'Она не моет посуду.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'It is running fast.', ru: 'Оно быстро бежит.', comment: '' },
        { en: 'She is writing a letter.', ru: 'Она пишет письмо.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He is not drinking coffee.', ru: 'Он не пьет кофе.', comment: '' },
        { en: 'She is not driving to work.', ru: 'Она не едет на работу.', comment: '' },
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
        { en: 'They are playing soccer.', ru: 'Они играют в футбол.', comment: '' },
        { en: 'They are painting the house.', ru: 'Они красят дом.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They are not studying for exams.', ru: 'Они не готовятся к экзаменам.', comment: '' },
        { en: 'They are not planting trees.', ru: 'Они не сажают деревья.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'They are driving to the airport.', ru: 'Они едут в аэропорт.', comment: '' },
        { en: 'They are eating breakfast.', ru: 'Они завтракают.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They are not drinking coffee.', ru: 'Они не пьют кофе.', comment: '' },
        { en: 'They are not running in the park.', ru: 'Они не бегают в парке.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

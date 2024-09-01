export default {
  title: 'ACTIVE PRESENT PERFECT CONTINUOUS',
  id: 'active-present-perfect-continuous',
  cardFilter: {
    time: 'present',
    timeType: 'perfectContinuous',
    voice: 'active',
  },
  theory: `<div>Present Perfect Continuous (Present Perfect Progressive) используется для описания действий, которые начались в прошлом, продолжаются в настоящем и, возможно, будут продолжаться в будущем. Этот вид времени подчеркивает процесс или продолжительность действия. Используется, чтобы выразить:</div>

<div><b>Длительные действия, которые начались в прошлом и продолжаются до настоящего момента</b>: когда важно указать, как долго длится действие.</div>

<div><b>Действия, которые закончились недавно и результат которых виден в настоящем.</b></div>

<div><b>Для выражения раздражения или неодобрения</b> по поводу действия, которое происходило какое-то время.</div>
<br>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div>for (на протяжении, в течение), since (с какого-то времени), all morning/day/week (все утро / весь день / всю неделю), lately (в последнее время), recently (недавно, на днях).</div>
<br />
<div>Особенности использования</div>
<div>Некоторые глаголы состояния (например, love, know, believe) редко используются в форме Continuous, включая Present Perfect Continuous.<div>`,
  schemas: [
    'Subject + have/has been + V-ing',
    'Subject + have/has + not been + V-ing',
    'Have/has + subject + been + V-ing',
  ],
  examples: [
    // I
    {
      texts: [
        {
          en: 'I have been working on this project all day.',
          ru: 'Я работаю над этим проектом весь день.',
          comment: '',
        },
        { en: 'I have been studying English for three years.', ru: 'Я изучаю английский язык три года.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I have not been watching TV lately.', ru: 'В последнее время я не смотрел телевизор.', comment: '' },
        {
          en: 'I have not been visiting my friends as often as before.',
          ru: 'Я не навещаю своих друзей так часто, как раньше.',
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
        { en: 'I have been writing a book for two months.', ru: 'Я пишу книгу два месяца.', comment: '' },
        { en: 'I have been drawing this picture since morning.', ru: 'Я рисую эту картину с утра.', comment: '' },
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
          en: 'I have not been eating much junk food recently.',
          ru: 'В последнее время я не ем много вредной пищи.',
          comment: '',
        },
        {
          en: 'I have not been driving since I got my license.',
          ru: 'Я не вожу машину с тех пор, как получил права.',
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
          en: 'We have been organizing this event for months.',
          ru: 'Мы организовываем это мероприятие уже несколько месяцев.',
          comment: '',
        },
        { en: 'We have been planning a vacation together.', ru: 'Мы планируем отпуск вместе.', comment: '' },
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
          en: 'We have not been going to the gym recently.',
          ru: 'В последнее время мы не ходим в спортзал.',
          comment: '',
        },
        { en: 'We have not been practicing the piano.', ru: 'Мы не занимаемся на пианино.', comment: '' },
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
          en: 'We have been taking care of the garden since spring.',
          ru: 'Мы ухаживаем за садом с весны.',
          comment: '',
        },
        { en: 'We have been building this house for years.', ru: 'Мы строим этот дом уже много лет.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We have not been doing any heavy lifting.', ru: 'Мы не поднимали ничего тяжёлого.', comment: '' },
        {
          en: 'We have not been reading any books lately.',
          ru: 'В последнее время мы не читаем никаких книг.',
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
        { en: 'You have been learning new skills at work.', ru: 'Вы изучаете новые навыки на работе.', comment: '' },
        { en: 'You have been working hard this month.', ru: 'Вы усердно работаете в этом месяце.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You have not been paying attention in class.', ru: 'Вы не обращаете внимания на уроке.', comment: '' },
        {
          en: 'You have not been doing your homework lately.',
          ru: 'Вы не делали домашние задания в последнее время.',
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
          en: 'You have been growing vegetables in your garden.',
          ru: 'Вы выращиваете овощи в своём саду.',
          comment: '',
        },
        { en: 'You have been making progress in your studies.', ru: 'Вы делаете успехи в учёбе.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You have not been driving much lately.', ru: 'Вы мало водите в последнее время.', comment: '' },
        { en: 'You have not been eating well these days.', ru: 'Вы плохо питаетесь в последнее время.', comment: '' },
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
        { en: 'He has been working out every morning.', ru: 'Он занимается спортом каждое утро.', comment: '' },
        {
          en: 'She has been practicing the violin for hours.',
          ru: 'Она занимается на скрипке уже несколько часов.',
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
          en: 'He has not been attending his classes regularly.',
          ru: 'Он не посещает свои занятия регулярно.',
          comment: '',
        },
        {
          en: 'She has not been cleaning her room lately.',
          ru: 'Она не убирает свою комнату в последнее время.',
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
          en: 'He has been taking care of his little sister.',
          ru: 'Он ухаживает за своей младшей сестрой.',
          comment: '',
        },
        { en: 'It has been raining all day.', ru: 'Дождь идёт весь день.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He has not been sleeping well lately.', ru: 'Он плохо спит в последнее время.', comment: '' },
        { en: 'She has not been eating enough vegetables.', ru: 'Она не ест достаточно овощей.', comment: '' },
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
        { en: 'They have been organizing the conference.', ru: 'Они организуют конференцию.', comment: '' },
        { en: 'They have been painting the house.', ru: 'Они красят дом.', comment: '' },
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
          en: 'They have not been attending meetings regularly.',
          ru: 'Они не посещают собрания регулярно.',
          comment: '',
        },
        { en: 'They have not been watering the plants.', ru: 'Они не поливают растения.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'They have been building a new school.', ru: 'Они строят новую школу.', comment: '' },
        { en: 'They have been learning new languages.', ru: 'Они учат новые языки.', comment: '' },
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
          en: 'They have not been spending time together lately.',
          ru: 'В последнее время они не проводят время вместе.',
          comment: '',
        },
        { en: 'They have not been traveling much.', ru: 'Они мало путешествуют.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

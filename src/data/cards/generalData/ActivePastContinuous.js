export default {
  title: 'ACTIVE PAST CONTINUOUS',
  id: 'active-past-continuous',
  cardFilter: {
    time: 'past',
    timeType: 'continuous',
    voice: 'active',
  },
  theory: `
<div>Active Past Continuous — это время, которое используется для описания действий, происходивших в конкретный момент в прошлом. Оно позволяет подчеркнуть процесс выполнения действия, которое было начато до указанного момента в прошлом и могло продолжаться после него. Past Continuous используется в следующих ситуациях:</div>
<div><b>Действие, происходящее в определенный момент в прошлом</b>: Когда нужно подчеркнуть, что действие было в процессе выполнения в конкретное время в прошлом.</div>
<div>At 8 PM yesterday, I was watching a movie. (Вчера в 8 вечера я смотрел фильм.)</div>
<div><b>Фон для другого действия в прошлом</b>: Когда одно действие, происходившее в течение определенного времени, прерывается другим, обычно более коротким.</div>
<div>I was reading a book when you called. (Я читал книгу, когда ты позвонил.)</div>
<div><b>Параллельные действия в прошлом</b>: Когда два или более действия происходили одновременно.</div>
<div>While she was cooking, I was setting the table. (Пока она готовила, я накрывал на стол.)</div>
<br />
<div>Таким образом, Active Past Continuous подчеркивает продолжительность и незавершенность действий в прошлом, их связь с другими событиями или действиями, и акцентирует внимание на процессе, а не на результате.</div>`,
  schemas: [
    'Subject + was/were + Ving',
    'Subject + was/were not + Ving',
    'Was/were + subject + Ving ?',
  ],
  examples: [
    // I
    {
      texts: [
        { en: 'I was cooking dinner when you called.', ru: 'Я готовил ужин, когда ты позвонил.', comment: '' },
        { en: 'I was reading a book all evening.', ru: 'Я читал книгу весь вечер.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I wasn’t cleaning the house yesterday.', ru: 'Я не убирал дом вчера.', comment: '' },
        {
          en: 'I wasn’t working on the project last night.',
          ru: 'Я не работал над проектом прошлой ночью.',
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
        { en: 'I was writing a report at that time.', ru: 'Я писал отчет в то время.', comment: '' },
        {
          en: 'I was driving to the office when it started raining.',
          ru: 'Я ехал в офис, когда начался дождь.',
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
        { en: 'I wasn’t drinking coffee this morning.', ru: 'Я не пил кофе этим утром.', comment: '' },
        {
          en: 'I wasn’t writing an email when you arrived.',
          ru: 'Я не писал письмо, когда ты пришел.',
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
        { en: 'We were discussing the plans yesterday.', ru: 'Мы обсуждали планы вчера.', comment: '' },
        { en: 'We were painting the house all day.', ru: 'Мы красили дом весь день.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We weren’t watching TV last night.', ru: 'Мы не смотрели телевизор прошлой ночью.', comment: '' },
        { en: 'We weren’t planning the trip yesterday.', ru: 'Мы не планировали поездку вчера.', comment: '' },
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
          en: 'We were taking a walk when it started to rain.',
          ru: 'Мы гуляли, когда начался дождь.',
          comment: '',
        },
        { en: 'We were having dinner when you called.', ru: 'Мы ужинали, когда ты позвонил.', comment: '' },
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
          en: 'We weren’t speaking about the problem last night.',
          ru: 'Мы не говорили о проблеме прошлой ночью.',
          comment: '',
        },
        { en: 'We weren’t running late for the meeting.', ru: 'Мы не опаздывали на встречу.', comment: '' },
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
          en: 'You were finishing the report when I saw you.',
          ru: 'Ты заканчивал отчет, когда я тебя увидел.',
          comment: '',
        },
        {
          en: 'You were practicing the guitar all morning.',
          ru: 'Ты тренировался играть на гитаре все утро.',
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
          en: 'You weren’t cleaning the room when I called.',
          ru: 'Ты не убирал комнату, когда я позвонил.',
          comment: '',
        },
        {
          en: 'You weren’t studying for the exam yesterday.',
          ru: 'Ты не готовился к экзамену вчера.',
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
          en: 'You were driving home when the accident happened.',
          ru: 'Ты ехал домой, когда произошла авария.',
          comment: '',
        },
        {
          en: 'You were speaking with the manager when I arrived.',
          ru: 'Ты разговаривал с менеджером, когда я прибыл.',
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
          en: 'You weren’t eating breakfast when I saw you.',
          ru: 'Ты не завтракал, когда я тебя увидел.',
          comment: '',
        },
        { en: 'You weren’t reading the book last night.', ru: 'Ты не читал книгу прошлой ночью.', comment: '' },
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
        { en: 'He was painting the fence when I arrived.', ru: 'Он красил забор, когда я прибыл.', comment: '' },
        { en: 'She was preparing dinner all evening.', ru: 'Она готовила ужин весь вечер.', comment: '' },
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
          en: 'She wasn’t waiting for the bus at that time.',
          ru: 'Она не ждала автобус в то время.',
          comment: '',
        },
        { en: 'He wasn’t playing football yesterday.', ru: 'Он не играл в футбол вчера.', comment: '' },
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
          en: 'He was writing a letter when you called.',
          ru: 'Он писал письмо, когда ты позвонил.',
          comment: '',
        },
        { en: 'It was raining when we left the office.', ru: 'Шел дождь, когда мы вышли из офиса.', comment: '' },
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
          en: 'She wasn’t driving when the accident happened.',
          ru: 'Она не вела машину, когда произошла авария.',
          comment: '',
        },
        {
          en: 'He wasn’t reading the newspaper yesterday morning.',
          ru: 'Он не читал газету вчера утром.',
          comment: '',
        },
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
        { en: 'They were building the house all summer.', ru: 'Они строили дом всё лето.', comment: '' },
        {
          en: 'They were organizing the event when I arrived.',
          ru: 'Они организовывали мероприятие, когда я прибыл.',
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
          en: 'They weren’t waiting for the train when it arrived.',
          ru: 'Они не ждали поезд, когда он прибыл.',
          comment: '',
        },
        {
          en: 'They weren’t discussing the project last night.',
          ru: 'Они не обсуждали проект прошлой ночью.',
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
          en: 'They were driving to the airport when the storm hit.',
          ru: 'Они ехали в аэропорт, когда началась буря.',
          comment: '',
        },
        {
          en: 'They were flying to Paris when you called.',
          ru: 'Они летели в Париж, когда ты позвонил.',
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
          en: 'They weren’t drinking coffee when I saw them.',
          ru: 'Они не пили кофе, когда я их увидел.',
          comment: '',
        },
        { en: 'They weren’t singing when we arrived.', ru: 'Они не пели, когда мы прибыли.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

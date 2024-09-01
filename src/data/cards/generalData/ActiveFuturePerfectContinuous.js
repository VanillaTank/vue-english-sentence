export default {
  title: 'ACTIVE FUTURE PERFECT CONTINUOUS',
  id: 'active-future-perfect-continuous',
  cardFilter: {
    time: 'future',
    timeType: 'perfectContinuous',
    voice: 'active',
  },
  theory: `<div>Future Perfect Continuous используется для описания действия, которое будет продолжаться до определённого момента в будущем. Это время подчёркивает процесс и его длительность, а также указывает, что действие будет происходить в течение какого-то времени до определённого момента. Используется для:</div>

<div><b>Подчёркивания длительности действия к определённому моменту в будущем</b>: когда нужно подчеркнуть, как долго какое-то действие будет продолжаться до определённого момента в будущем.</div>

<div><b>Выполнение действия до конкретного момента в будущем</b>:
В отличие от простого будущего или будущего завершённого времени, Future Perfect Continuous акцентирует внимание на процессе, который будет длиться до определённого момента в будущем, а не на самом факте завершения действия.</div>
<br>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div>By the time (к тому времени), for (в течение), when (когда).</div>`,
  schemas: [
    'Subject + will have been + V-ing',
    'Subject + will not have been + V-ing',
    'Will + subject + have been + V-ing?',
  ],
  examples: [// I
    {
      texts: [
        {
          en: 'I will have been working on this project for five hours by the time you arrive.',
          ru: 'Я буду работать над этим проектом уже пять часов к тому моменту, как ты придешь.',
          comment: '',
        },
        {
          en: 'I will have been studying for the exam all night.',
          ru: 'Я буду учиться к экзамену всю ночь.',
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
          en: 'I will not have been playing video games for too long.',
          ru: 'Я не буду слишком долго играть в видеоигры.',
          comment: '',
        },
        {
          en: 'I will not have been practicing the piano regularly.',
          ru: 'Я не буду регулярно заниматься на пианино.',
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
          en: 'I will have been writing this book for over a year by the end of December.',
          ru: 'Я буду писать эту книгу уже больше года к концу декабря.',
          comment: '',
        },
        {
          en: 'I will have been driving this car for ten years next month.',
          ru: 'В следующем месяце будет десять лет, как я вожу эту машину.',
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
          en: 'I will not have been eating junk food by the time I start my diet.',
          ru: 'Я не буду есть вредную пищу к тому моменту, как начну свою диету.',
          comment: '',
        },
        {
          en: 'I will not have been taking any breaks until the work is done.',
          ru: 'Я не буду делать никаких перерывов, пока работа не будет закончена.',
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
          en: 'We will have been preparing for the event for weeks.',
          ru: 'Мы будем готовиться к мероприятию уже несколько недель.',
          comment: '',
        },
        {
          en: 'We will have been discussing the new strategy for hours.',
          ru: 'Мы будем обсуждать новую стратегию уже несколько часов.',
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
          en: 'We will not have been waiting here for too long.',
          ru: 'Мы не будем ждать здесь слишком долго.',
          comment: '',
        },
        {
          en: 'We will not have been planning this trip for very long.',
          ru: 'Мы не будем планировать эту поездку слишком долго.',
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
          en: 'We will have been running this campaign for a month by then.',
          ru: 'К тому времени мы будем вести эту кампанию уже месяц.',
          comment: '',
        },
        {
          en: 'We will have been building our new house for almost a year.',
          ru: 'Мы будем строить наш новый дом почти год.',
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
          en: 'We will not have been making any decisions until we have all the facts.',
          ru: 'Мы не будем принимать никаких решений, пока у нас не будет всех фактов.',
          comment: '',
        },
        {
          en: 'We will not have been buying new equipment until the budget is approved.',
          ru: 'Мы не будем покупать новое оборудование, пока не утвердят бюджет.',
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
          en: 'You will have been learning Spanish for a year by next summer.',
          ru: 'К следующему лету ты будешь учить испанский уже год.',
          comment: '',
        },
        {
          en: 'You will have been training for the marathon for months.',
          ru: 'Ты будешь готовиться к марафону несколько месяцев.',
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
          en: 'You will not have been staying at the hotel for too long.',
          ru: 'Ты не будешь оставаться в отеле слишком долго.',
          comment: '',
        },
        {
          en: 'You will not have been working on the project all night.',
          ru: 'Ты не будешь работать над проектом всю ночь.',
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
          en: 'You will have been swimming every day for a week.',
          ru: 'Ты будешь плавать каждый день в течение недели.',
          comment: '',
        },
        {
          en: 'You will have been driving for eight hours straight by the time we arrive.',
          ru: 'Ты будешь ехать уже восемь часов подряд к тому моменту, как мы приедем.',
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
          en: 'You will not have been keeping secrets from me.',
          ru: 'Ты не будешь держать от меня секреты.',
          comment: '',
        },
        {
          en: 'You will not have been spending money on unnecessary things.',
          ru: 'Ты не будешь тратить деньги на ненужные вещи.',
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
        {
          en: 'He will have been playing the piano for hours.',
          ru: 'Он будет играть на пианино уже несколько часов.',
          comment: '',
        },
        {
          en: 'She will have been preparing for the test all day.',
          ru: 'Она будет готовиться к тесту весь день.',
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
          en: 'She will not have been waiting for you all morning.',
          ru: 'Она не будет ждать тебя все утро.',
          comment: '',
        },
        {
          en: 'It will not have been raining for long by the time we leave.',
          ru: 'К тому времени, как мы уйдем, дождь не будет идти долго.',
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
          en: 'He will have been driving his new car for a week by then.',
          ru: 'К тому времени он будет водить свою новую машину уже неделю.',
          comment: '',
        },
        {
          en: 'She will have been reading that book for a month.',
          ru: 'Она будет читать эту книгу уже месяц.',
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
          en: 'He will not have been eating anything unhealthy by the time he starts his new diet.',
          ru: 'Он не будет есть ничего вредного к тому времени, как начнет свою новую диету.',
          comment: '',
        },
        {
          en: 'She will not have been seeing him for a while.',
          ru: 'Она не будет видеться с ним какое-то время.',
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
        {
          en: 'They will have been organizing the event for weeks.',
          ru: 'Они будут организовывать мероприятие уже несколько недель.',
          comment: '',
        },
        {
          en: 'They will have been working together for a long time.',
          ru: 'Они будут работать вместе уже долгое время.',
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
        { en: 'They will not have been waiting here for hours.', ru: 'Они не будут ждать здесь часами.', comment: '' },
        {
          en: 'They will not have been practicing every day.',
          ru: 'Они не будут тренироваться каждый день.',
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
          en: 'They will have been doing their homework for two hours by then.',
          ru: 'К тому времени они будут делать свою домашнюю работу уже два часа.',
          comment: '',
        },
        {
          en: 'They will have been getting ready for the trip all week.',
          ru: 'Они будут готовиться к поездке всю неделю.',
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
          en: 'They will not have been telling anyone about the plan.',
          ru: 'Они не будут рассказывать никому о плане.',
          comment: '',
        },
        {
          en: 'They will not have been finding the time to relax.',
          ru: 'Они не будут находить время для отдыха.',
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

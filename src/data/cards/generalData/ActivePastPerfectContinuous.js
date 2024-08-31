export default {
  title: 'ACTIVE PAST PERFECT CONTINUOUS',
  id: 'active-past-perfect-continuous',
  cardFilter: {
    time: 'past',
    timeType: 'perfectContinuous',
    voice: 'active',
  },
  theory: `<div>Past Perfect Continuous (другое название — Past Perfect Progressive) используется для описания действий или состояний, начавшихся в прошлом и продолжавшихся до определённого момента в прошлом. Оно помогает подчеркнуть длительность действия или его процесс, который предшествовал другому событию. Редко применяется для кратковременных или мгновенных действий, так как его основная функция — подчёркивание длительности процесса. Часто в предложении с Past Perfect Continuous используется Past Simple для обозначения действия, которое произошло после длительного процесса. В отличие от Past Perfect, который просто указывает на то, что действие завершилось до определённого момента в прошлом, Past Perfect Continuous акцентирует внимание на процессе этого действия и его длительности. Таким образом, эта форма времени помогает выразить:</div>

<div><b>Длительное действие, предшествующее другому прошлому событию</b>:одно действие длилось определённый промежуток времени до другого события в прошлом.</div>

<div><b>Длительное действие, предшествующее другому прошлому событию</b>: одно действие длилось определённый промежуток времени до другого события в прошлом.</div>

<div><b>Причина или источник состояния</b>: почему что-то произошло или почему существовало определённое состояние в прошлом.</div>
<div>"She was tired because she had been running for an hour."</div>
<div>"Она была уставшей, потому что бегала час."<div>

<div><b>Показатель длительности действия в прошлом</b>: Past Perfect Continuous подчёркивает именно длительность действия в прошлом, а не просто факт его завершения.</div>
<div>"We had been waiting for the bus for over an hour before it finally arrived."</div>
<div>"Мы ждали автобус больше часа, прежде чем он наконец приехал."</div>
<br>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div><b>for (в течение), since (с тех пор), before (до), all day (весь день), all morning (всё утро), how long (как долго)</b> часто используются с Past Perfect Continuous, чтобы подчеркнуть продолжительность действия.</div>`,
  schemas: [
    'Subject + had been + V-ing',
    'Subject + had not been + V-ing ',
    'Had + subject + been + V-ing?',
    'Had not + subject + been + V-ing?',
  ],
  examples: [
    // I
    {
      texts: [
        {
          en: 'I had been studying for three hours before the phone rang.',
          ru: 'Я занимался три часа, прежде чем зазвонил телефон.',
          comment: '',
        },
        {
          en: 'I had been waiting at the station for an hour before the train arrived.',
          ru: 'Я ждал на станции час, прежде чем прибыл поезд.',
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
          en: 'I had not been working on the project before the deadline was extended.',
          ru: 'Я не работал над проектом до того, как срок был продлен.',
          comment: '',
        },
        {
          en: 'I had not been practicing piano before the concert.',
          ru: 'Я не занимался на пианино перед концертом.',
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
          en: 'I had been running for an hour before I realized I was lost.',
          ru: 'Я бегал час, прежде чем понял, что заблудился.',
          comment: '',
        },
        {
          en: 'I had been driving for six hours before I took a break.',
          ru: 'Я вел машину шесть часов, прежде чем сделал перерыв.',
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
          en: 'I had not been eating properly before the doctor gave me advice.',
          ru: 'Я не ел правильно до того, как врач дал мне совет.',
          comment: '',
        },
        {
          en: 'I had not been thinking clearly before I had a cup of coffee.',
          ru: 'Я не думал ясно до того, как выпил чашку кофе.',
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
          en: 'We had been planning the trip for months before we finally booked the tickets.',
          ru: 'Мы планировали поездку несколько месяцев, прежде чем, наконец, забронировали билеты.',
          comment: '',
        },
        {
          en: 'We had been decorating the house for hours before the guests arrived.',
          ru: 'Мы украшали дом несколько часов, прежде чем прибыли гости.',
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
          en: 'We had not been saving money before we realized how expensive the vacation would be.',
          ru: 'Мы не копили деньги, прежде чем поняли, насколько дорогим будет отпуск.',
          comment: '',
        },
        {
          en: 'We had not been organizing the event before the boss asked us to do so.',
          ru: 'Мы не занимались организацией мероприятия до того, как начальник попросил нас об этом.',
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
          en: 'We had been swimming for an hour before the storm started.',
          ru: 'Мы плавали час, прежде чем начался шторм.',
          comment: '',
        },
        {
          en: 'We had been walking in the park before it started to rain.',
          ru: 'Мы гуляли в парке, прежде чем начался дождь.',
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
          en: 'We had not been eating well before we started the diet.',
          ru: 'Мы не питались хорошо до того, как начали диету.',
          comment: '',
        },
        {
          en: 'We had not been following the instructions before we made the mistake.',
          ru: 'Мы не следовали инструкциям до того, как совершили ошибку.',
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
          en: 'You had been working on that task for days before you finished it.',
          ru: 'Вы работали над этим заданием несколько дней, прежде чем закончили его.',
          comment: '',
        },
        {
          en: 'You had been studying hard before you passed the exam.',
          ru: 'Вы усердно занимались до того, как сдали экзамен.',
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
          en: 'You had not been cleaning the house before the guests arrived.',
          ru: 'Вы не убирали дом до того, как прибыли гости.',
          comment: '',
        },
        {
          en: 'You had not been paying attention before the teacher called on you.',
          ru: 'Вы не обращали внимания, прежде чем учитель вызвал вас.',
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
          en: 'You had been driving for hours before you stopped for a break.',
          ru: 'Вы ехали несколько часов, прежде чем сделали перерыв.',
          comment: '',
        },
        {
          en: 'You had been reading that book for weeks before you finished it.',
          ru: 'Вы читали эту книгу несколько недель, прежде чем закончили её.',
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
          en: 'You had not been eating before the meeting started.',
          ru: 'Вы не ели до того, как началась встреча.',
          comment: '',
        },
        { en: 'You had not been sleeping well before the exam.', ru: 'Вы не спали хорошо до экзамена.', comment: '' },
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
          en: 'He had been painting the fence before it started to rain.',
          ru: 'Он красил забор, прежде чем начался дождь.',
          comment: '',
        },
        {
          en: 'She had been cooking for hours before the guests arrived.',
          ru: 'Она готовила несколько часов, прежде чем прибыли гости.',
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
          en: 'She had not been practicing her speech before the presentation.',
          ru: 'Она не репетировала свою речь перед презентацией.',
          comment: '',
        },
        {
          en: 'He had not been fixing the car before the mechanic arrived.',
          ru: 'Он не чинил машину до приезда механика.',
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
          en: 'He had been running before he twisted his ankle.',
          ru: 'Он бегал, прежде чем подвернул лодыжку.',
          comment: '',
        },
        {
          en: 'It had been raining for hours before the sun came out.',
          ru: 'Шел дождь несколько часов, прежде чем выглянуло солнце.',
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
          en: 'He had not been sleeping well before he changed his mattress.',
          ru: 'Он не спал хорошо до того, как поменял матрас.',
          comment: '',
        },
        {
          en: 'She had not been eating properly before the doctor advised her.',
          ru: 'Она не питалась правильно до того, как врач посоветовал ей это.',
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
          en: 'They had been preparing for the party before everyone arrived.',
          ru: 'Они готовились к вечеринке, прежде чем все пришли.',
          comment: '',
        },
        {
          en: 'They had been planning the event for months before it took place.',
          ru: 'Они планировали мероприятие несколько месяцев, прежде чем оно состоялось.',
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
          en: 'They had not been cleaning the house before the guests came.',
          ru: 'Они не убирали дом до того, как пришли гости.',
          comment: '',
        },
        {
          en: 'They had not been saving money before the vacation.',
          ru: 'Они не копили деньги перед отпуском.',
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
          en: 'They had been reading the book for weeks before they finished it.',
          ru: 'Они читали книгу несколько недель, прежде чем закончили её.',
          comment: '',
        },
        {
          en: 'They had been driving for hours before they reached their destination.',
          ru: 'Они ехали несколько часов, прежде чем достигли пункта назначения.',
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
          en: 'They had not been following the rules before they were caught.',
          ru: 'Они не следовали правилам до того, как их поймали.',
          comment: '',
        },
        {
          en: 'They had not been eating well before the diet.',
          ru: 'Они не питались хорошо до начала диеты.',
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

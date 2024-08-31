export default {
  title: 'ACTIVE PRESENT PERFECT',
  id: 'active-present-perfect',
  cardFilter: {
    time: 'present',
    timeType: 'perfect',
    voice: 'active',
  },
  theory: `<div>Active Present Perfect используется для описания действий, которые начались в прошлом и продолжаются до настоящего момента или имеют последствия в настоящем. Это время также может использоваться для действий, которые произошли в неопределённый момент в прошлом. Используется, если:</div>

<div><b>Действия, произошедшие в прошлом, имеют результат в настоящем</b>:</div>
<div>"I have lost my keys." (Я потерял свои ключи.)</div>
<div>Здесь важно то, что ключи до сих пор потеряны.</div>

<div><b>Действия, которые начались в прошлом, продолжаются до настоящего момента</b>:</div>
<div>"She has lived here for ten years." (Она живёт здесь десять лет.)</div>
<div>Она начала жить здесь десять лет назад и живёт до сих пор.</div>

<div><b>Опыт или события, которые произошли в неопределённое время в прошлом</b>:</div>
<div>"We have visited Paris." (Мы посетили Париж.)</div>
<div>Когда именно, не уточняется, важно само событие.</div>
<br/>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div>Since, for, ever, never, just, already, yet, recently.</div>
<br/>
<div>Отличие от Past Simple</div>
<div>Present Perfect используется для акцентирования на результате в настоящем, тогда как Past Simple описывает действия, которые произошли в прошлом и не имеют прямой связи с настоящим. Например:</div>
<div>"I have lost my keys." (Я потерял свои ключи. — они все еще потеряны, и это важно сейчас.)<div>
<div>"I lost my keys yesterday." (Я потерял свои ключи вчера. — факт произошел в прошлом, и акцент на времени действия.)</div>`,
  schemas: [
    'Subject + have/has + V3', 'Subject + have/has not + V3', 'Have/has + subject + V3 ?',
  ],
  examples: [// I
    {
      texts: [
        { en: 'I have finished my homework.', ru: 'Я закончил свою домашнюю работу.', comment: '' },
        { en: 'I have painted the kitchen walls.', ru: 'Я покрасил стены на кухне.', comment: '' },
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
          en: 'I have not missed any classes this week.',
          ru: 'Я не пропустил ни одного занятия на этой неделе.',
          comment: '',
        },
        { en: 'I have not checked my email today.', ru: 'Я не проверял свою электронную почту сегодня.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'I have taken the dog for a walk.', ru: 'Я выгулял собаку.', comment: '' },
        { en: 'I have written a letter to my friend.', ru: 'Я написал письмо своему другу.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'I',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'I have not spoken to him yet.', ru: 'Я еще не поговорил с ним.', comment: '' },
        { en: 'I have not broken any rules.', ru: 'Я не нарушил никаких правил.', comment: '' },
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
        { en: 'We have planned our vacation.', ru: 'Мы спланировали наш отпуск.', comment: '' },
        { en: 'We have booked a table at the restaurant.', ru: 'Мы забронировали столик в ресторане.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We have not visited them recently.', ru: 'Мы не посещали их в последнее время.', comment: '' },
        { en: 'We have not finished our project yet.', ru: 'Мы еще не закончили наш проект.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'We have eaten breakfast already.', ru: 'Мы уже позавтракали.', comment: '' },
        { en: 'We have driven to the mountains before.', ru: 'Мы уже ездили в горы.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'we',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'We have not seen that movie yet.', ru: 'Мы еще не видели этот фильм.', comment: '' },
        { en: 'We have not spoken to her about it.', ru: 'Мы еще не поговорили с ней об этом.', comment: '' },
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
        { en: 'You have called him three times today.', ru: 'Ты позвонил ему трижды сегодня.', comment: '' },
        { en: 'You have asked a good question.', ru: 'Ты задал хороший вопрос.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You have not cleaned your room yet.', ru: 'Ты еще не убрал свою комнату.', comment: '' },
        { en: 'You have not answered my message.', ru: 'Ты не ответил на мое сообщение.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'You have seen this movie before.', ru: 'Ты уже видел этот фильм.', comment: '' },
        { en: 'You have driven this car before.', ru: 'Ты уже водил эту машину.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'you',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'You have not written to her yet.', ru: 'Ты еще не написал ей.', comment: '' },
        { en: 'You have not eaten anything today.', ru: 'Ты еще ничего не ел сегодня.', comment: '' },
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
        { en: 'She has called her parents.', ru: 'Она позвонила своим родителям.', comment: '' },
        { en: 'He has finished his assignment.', ru: 'Он закончил свое задание.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'He has not cleaned the house.', ru: 'Он не убрался в доме.', comment: '' },
        { en: 'It has not rained all day.', ru: 'Весь день не было дождя.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'He has eaten lunch already.', ru: 'Он уже пообедал.', comment: '' },
        { en: 'She has spoken to the manager.', ru: 'Она поговорила с менеджером.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'heSheIt',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'She has not seen the new exhibit.', ru: 'Она не видела новую выставку.', comment: '' },
        { en: 'He has not driven his new car yet.', ru: 'Он еще не ездил на своей новой машине.', comment: '' },
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
        { en: 'They have painted the house.', ru: 'Они покрасили дом.', comment: '' },
        { en: 'They have started the project.', ru: 'Они начали проект.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They have not booked a flight yet.', ru: 'Они еще не забронировали билет на самолет.', comment: '' },
        { en: 'They have not visited us this year.', ru: 'Они не навещали нас в этом году.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'regular',
        sentenceType: 'negation',
      },
    },
    {
      texts: [
        { en: 'They have built a new house.', ru: 'Они построили новый дом.', comment: '' },
        { en: 'They have eaten dinner already.', ru: 'Они уже поужинали.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'statement',
      },
    },
    {
      texts: [
        { en: 'They have not read the book yet.', ru: 'Они еще не прочитали книгу.', comment: '' },
        { en: 'They have not driven far yet.', ru: 'Они еще не уехали далеко.', comment: '' },
      ],
      exampleFilter: {
        pronoun: 'they',
        verb: 'irregular',
        sentenceType: 'negation',
      },
    },
  ],
}

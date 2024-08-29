export default {
  title: 'ACTIVE PAST PERFECT',
  id: 'active-past-perfect',
  cardFilter: {
    time: 'past',
    timeType: 'perfect',
    voice: 'active',
  },
  theory: `<div>Active Past Perfect используется для описания действий, которые произошли до другого действия или момента в прошлом. Это время подчеркивает, что одно событие завершилось перед началом другого. Важно: это время не используется для описания событий, которые произошли одно за другим без четкой временной связи. Обычно, Past Perfect используется в случаях:</div>

<div><b>Когда важно подчеркнуть, что одно действие произошло раньше другого</b>.</div>

<div><b>Для передачи прошлого действия, которое имело видимый результат в прошлом</b>:</div>
<div>She was sad because she had lost her favorite book.</div>
<div>(Она была грустной, потому что потеряла свою любимую книгу.)</div>
<br/>
<div style="text-transform:uppercase">Ключевые маркеры времени</div>
<div>before, after, by the time, already, just,  never, when и т.д. </div>
`,
  schemas: [
    'Subject + had + V3', 'Subject + had not + V3', 'Had + subject + V3 ?'
  ],
  examples: [// I
    {
      texts: [
        { en: "I had finished the report before the deadline.", ru: "Я закончил отчет до крайнего срока.", comment: "" },
        { en: "I had studied French for two years before moving to Paris.", ru: "Я изучал французский язык два года до переезда в Париж.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "I",
        verb: "regular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "I had not completed the task by the time you called.", ru: "Я не завершил задачу к тому моменту, когда ты позвонил.", comment: "" },
        { en: "I had not booked the tickets before the prices increased.", ru: "Я не забронировал билеты до того, как цены поднялись.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "I",
        verb: "regular",
        sentenceType: "negation"
      }
    },
    {
      texts: [
        { en: "I had seen that movie before it was released in theaters.", ru: "Я видел этот фильм до его выхода в кинотеатрах.", comment: "" },
        { en: "I had written the letter before receiving yours.", ru: "Я написал письмо до того, как получил твое.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "I",
        verb: "irregular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "I had not eaten breakfast before leaving the house.", ru: "Я не позавтракал перед тем, как выйти из дома.", comment: "" },
        { en: "I had not spoken to her before the meeting.", ru: "Я не говорил с ней до встречи.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "I",
        verb: "irregular",
        sentenceType: "negation"
      }
    },

// We
    {
      texts: [
        { en: "We had planned the event months in advance.", ru: "Мы спланировали мероприятие за несколько месяцев.", comment: "" },
        { en: "We had walked through the park before it started raining.", ru: "Мы прошли через парк до того, как начался дождь.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "we",
        verb: "regular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "We had not discussed the details before the meeting.", ru: "Мы не обсудили детали перед встречей.", comment: "" },
        { en: "We had not cleaned the house before the guests arrived.", ru: "Мы не убрали дом до прихода гостей.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "we",
        verb: "regular",
        sentenceType: "negation"
      }
    },
    {
      texts: [
        { en: "We had driven all night before reaching our destination.", ru: "Мы ехали всю ночь перед тем, как достигли пункта назначения.", comment: "" },
        { en: "We had taken the wrong train before realizing our mistake.", ru: "Мы сели на неправильный поезд, прежде чем поняли свою ошибку.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "we",
        verb: "irregular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "We had not spoken to the manager before submitting the complaint.", ru: "Мы не поговорили с менеджером перед подачей жалобы.", comment: "" },
        { en: "We had not bought the tickets before the concert sold out.", ru: "Мы не купили билеты до того, как концерт распродали.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "we",
        verb: "irregular",
        sentenceType: "negation"
      }
    },

// You
    {
      texts: [
        { en: "You had completed the course before applying for the job.", ru: "Ты завершил курс перед подачей заявления на работу.", comment: "" },
        { en: "You had painted the room before moving in.", ru: "Ты покрасил комнату перед тем, как въехать.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "you",
        verb: "regular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "You had not answered the email before the meeting.", ru: "Ты не ответил на письмо до встречи.", comment: "" },
        { en: "You had not tried the new recipe before the dinner party.", ru: "Ты не попробовал новый рецепт перед званым ужином.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "you",
        verb: "regular",
        sentenceType: "negation"
      }
    },
    {
      texts: [
        { en: "You had driven the car before it broke down.", ru: "Ты водил машину, прежде чем она сломалась.", comment: "" },
        { en: "You had written the report before the deadline.", ru: "Ты написал отчет до крайнего срока.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "you",
        verb: "irregular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "You had not eaten lunch before the meeting.", ru: "Ты не пообедал перед встречей.", comment: "" },
        { en: "You had not read the book before the exam.", ru: "Ты не прочитал книгу перед экзаменом.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "you",
        verb: "irregular",
        sentenceType: "negation"
      }
    },

// heSheIt
    {
      texts: [
        { en: "She had cooked dinner before we arrived.", ru: "Она приготовила ужин до того, как мы приехали.", comment: "" },
        { en: "He had finished his homework before going out to play.", ru: "Он закончил домашнее задание перед тем, как пойти играть.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "heSheIt",
        verb: "regular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "He had not locked the door before leaving.", ru: "Он не закрыл дверь перед уходом.", comment: "" },
        { en: "She had not sent the invitation before the event.", ru: "Она не отправила приглашение перед мероприятием.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "heSheIt",
        verb: "regular",
        sentenceType: "negation"
      }
    },
    {
      texts: [
        { en: "He had written the letter before she called.", ru: "Он написал письмо до того, как она позвонила.", comment: "" },
        { en: "It had flown across the ocean before stopping.", ru: "Оно пролетело через океан, прежде чем остановиться.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "heSheIt",
        verb: "irregular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "She had not seen the movie before it won an award.", ru: "Она не видела этот фильм до того, как он получил награду.", comment: "" },
        { en: "He had not spoken to her before the meeting.", ru: "Он не говорил с ней до встречи.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "heSheIt",
        verb: "irregular",
        sentenceType: "negation"
      }
    },

// They
    {
      texts: [
        { en: "They had organized the event before the guests arrived.", ru: "Они организовали мероприятие до прихода гостей.", comment: "" },
        { en: "They had printed the flyers before the campaign started.", ru: "Они напечатали флаеры до начала кампании.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "they",
        verb: "regular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "They had not prepared the presentation before the deadline.", ru: "Они не подготовили презентацию до крайнего срока.", comment: "" },
        { en: "They had not called the client before the meeting.", ru: "Они не позвонили клиенту перед встречей.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "they",
        verb: "regular",
        sentenceType: "negation"
      }
    },
    {
      texts: [
        { en: "They had built the house before winter arrived.", ru: "Они построили дом до наступления зимы.", comment: "" },
        { en: "They had eaten all the food before we arrived.", ru: "Они съели всю еду до нашего прихода.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "they",
        verb: "irregular",
        sentenceType: "statement"
      }
    },
    {
      texts: [
        { en: "They had not left the house before it started raining.", ru: "Они не вышли из дома перед тем, как начался дождь.", comment: "" },
        { en: "They had not driven far before the car broke down.", ru: "Они не уехали далеко, прежде чем машина сломалась.", comment: "" }
      ],
      exampleFilter: {
        pronoun: "they",
        verb: "irregular",
        sentenceType: "negation"
      }
    }
  ],
}

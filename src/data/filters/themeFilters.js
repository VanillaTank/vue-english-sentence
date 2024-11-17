export default [
  {
    title: 'times',
    selectedFiltersByDefault: {
      selectedCardFilters: {
        time: { expended: true, value: ['past'] },
        timeType: { expended: true, value: ['continuous'] },
        voice: { expended: true, value: ['active'] },
      },
      selectedExampleFilters: {
          pronoun: { expended: true, value: ['I', 'heSheIt'] },
          verb:{ expended: true, value: ['regular'] },
          sentenceType: { expended: false, value: [] },
      },
    }
  },
  {
    title: 'conditional',
    selectedFiltersByDefault: {
      selectedCardFilters: {
        condition: { expended: true, value: ['zero', 'first'] },
      },
      selectedExampleFilters: {
        pronoun: { expended: true, value: ['we', 'you'] },
        verb:{ expended: false, value: [] },
        sentenceType: { expended: true, value: ['statement'] },
      },
    }
  },

  // всегда пиши так, если фильтр должен быть пустым { expended: false, value: [] },
]

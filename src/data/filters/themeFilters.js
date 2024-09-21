export default [
  {
    title: 'times',
    selectedFiltersByDefault: {
      selectedCardFilters: { time: ['past'], timeType: ['continuous'], voice: ['active'] },
      selectedExampleFilters: { pronoun: ['I', 'heSheIt'], verb: ['regular'], sentenceType: ['statement'] },
    }
  },
  {
    title: 'conditional',
    selectedFiltersByDefault: {
      selectedCardFilters: { condition: ['zero', 'first'] },
      selectedExampleFilters: { pronoun: ['I', 'heSheIt'], verb: ['regular'], sentenceType: ['statement'] },
    }
  },
]

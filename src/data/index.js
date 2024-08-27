import themeFilters from '@/data/filters/themeFilters'
import timesCardFilters from '@/data/filters/timesCardFilters'
import exampleFilter from '@/data/filters/exampleFilter'

export const filters = {
  themeFilters,
  timesCardFilters,
  exampleFilter,
}

import activePastSimple from '@/data/cards/generalData/ActivePastSimple'
import activePresentSimple from '@/data/cards/generalData/ActivePresentSimple'
import activeFutureSimple from '@/data/cards/generalData/ActiveFutureSimple'
import activePastContinuous from '@/data/cards/generalData/ActivePastContinuous.js'

export const timesCards = [
  activePastSimple,
  activePresentSimple,
  activeFutureSimple,
  activePastContinuous,
]

import mainFilters from '@/data/filters/mainFilters'
import generalCardFilters from '@/data/filters/generalCardFilters'
import exampleFilter from '@/data/filters/exampleFilter'

export const filters = {
  mainFilters,
  generalCardFilters,
  exampleFilter,
}

import activePastSimple from '@/data/cards/generalData/ActivePastSimple'
import activePresentSimple from '@/data/cards/generalData/ActivePresentSimple'
import activeFutureSimple from '@/data/cards/generalData/ActiveFutureSimple'
import activePastContinuous from '@/data/cards/generalData/ActivePastContinuous.js'

export const generalCards = [
  activePastSimple,
  activePresentSimple,
  activeFutureSimple,
  activePastContinuous,
]

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
import activePresentContinuous from '@/data/cards/generalData/ActivePresentContinuous.js'
import activeFutureContinuous from '@/data/cards/generalData/ActiveFutureContinuous.js'
import activePastPerfect from '@/data/cards/generalData/ActivePastPerfect.js'
import activePresentPerfect from '@/data/cards/generalData/ActivePresentPerfect.js'

export const timesCards = [
  // Simple
  activePastSimple,
  activePresentSimple,
  activeFutureSimple,

  // Continuous
  activePastContinuous,
  activePresentContinuous,
  activeFutureContinuous,

  // Perfect
  activePastPerfect,
  activePresentPerfect,
]

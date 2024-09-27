import themeFilters from '@/data/filters/themeFilters'
import timesCardFilters from '@/data/filters/timesCardFilters'
import conditionalCardFilters from '@/data/filters/conditionalCardFilters'
import exampleFilter from '@/data/filters/exampleFilter'

export const filters = {
  themeFilters,
  timesCardFilters,
  conditionalCardFilters,
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
import activeFuturePerfect from '@/data/cards/generalData/ActiveFuturePerfect.js'
import activePastPerfectContinuous from '@/data/cards/generalData/ActivePastPerfectContinuous.js'
import activePresentPerfectContinuous from '@/data/cards/generalData/ActivePresentPerfectContinuous.js'
import activeFuturePerfectContinuous from '@/data/cards/generalData/ActiveFuturePerfectContinuous.js'
import zeroConditional from '@/data/cards/coditionalData/ZeroConditional.js'
import zeroCondition from '@/data/cards/coditionalData/ZeroCondition.js'

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
  activeFuturePerfect,

  // Prefect Continuous
  activePastPerfectContinuous,
  activePresentPerfectContinuous,
  activeFuturePerfectContinuous,
]

export const conditionalCards = [
  zeroConditional,
  zeroCondition,
]

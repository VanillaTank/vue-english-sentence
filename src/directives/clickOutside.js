export const clickOutside = {
  mounted: function (element, binding) {
    element.clickOutsideEvent = function (event) {

      if (
        !(element == event.target || element.contains(event.target))
      ) {
        binding.value(event, element)
      }
    }
    document.addEventListener('click', element.clickOutsideEvent)
  },
  unmounted: function (element) {
    document.removeEventListener('click', element.clickOutsideEvent)
  }
}

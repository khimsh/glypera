;(() => {
  'use strict'

  function scrollToTop() {
    if (!document.querySelector('[data-scroll-top]')) return

    const scrollToTopButton = document.querySelector('[data-scroll-top]')
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  scrollToTop()
})()

import { MutableRefObject, useState } from 'react'

export const useSlider = (articles: MutableRefObject<HTMLElement>[]) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleRightArrow = () => {
    const lastSlide = activeIndex === articles.length - 1
    const newIndex = lastSlide ? 0 : activeIndex + 1

    articles[activeIndex].current.dataset.status = 'inactive'

    articles[newIndex].current.dataset.status = 'active-from-right'

    setTimeout(() => {
      articles[newIndex].current.dataset.status = 'active'

      setActiveIndex(newIndex)
    })
  }

  const handleLeftArrow = () => {
    const firstSlide = activeIndex === 0
    const newIndex = firstSlide ? articles.length - 1 : activeIndex - 1

    articles[activeIndex].current.dataset.status = 'inactive'

    articles[newIndex].current.dataset.status = 'active-from-left'

    setTimeout(() => {
      articles[newIndex].current.dataset.status = 'active'

      setActiveIndex(newIndex)
    })

    setActiveIndex(newIndex)
  }

  return [handleRightArrow, handleLeftArrow]
}

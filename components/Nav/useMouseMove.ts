import { MouseEvent, MutableRefObject, useEffect } from 'react'

export const useMouseMove = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  eyeBallRef: MutableRefObject<HTMLDivElement | null>
) => {
  const angleCount = (
    mouseX: number,
    mouseY: number,
    eyeBallAchorX: number,
    eyeBallAnchorY: number
  ) => {
    const dY = eyeBallAnchorY - mouseY
    const dX = eyeBallAchorX - mouseX

    const rad = Math.atan2(dY, dX)
    const deg = (rad * 180) / Math.PI

    return deg
  }

  const handleMouseMove = (e: MouseEvent<Element> | globalThis.MouseEvent) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    if (svgRef.current && eyeBallRef.current) {
      const rekt = svgRef.current.getBoundingClientRect()
      const eyeBallAnchorX = rekt.left + rekt.width / 2
      const eyeBallAnchorY = rekt.top + rekt.height / 2

      const angle = angleCount(mouseX, mouseY, eyeBallAnchorX, eyeBallAnchorY)

      eyeBallRef.current.style.transform = `rotate(${90 + angle}deg)`
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return handleMouseMove
}

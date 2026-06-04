import React, { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

const COUNTER_NAMESPACE = 'moataz-badawy-portfolio'
const COUNTER_KEY = 'portfolio-visits'
const SESSION_FLAG = 'portfolio-visit-counted'

const formatCount = (value) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value)

const VisitorCounter = () => {
  const [count, setCount] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    const loadCount = async () => {
      try {
        const alreadyCounted = window.sessionStorage.getItem(SESSION_FLAG) === '1'
        const endpoint = alreadyCounted
          ? `https://api.countapi.xyz/get/${COUNTER_NAMESPACE}/${COUNTER_KEY}`
          : `https://api.countapi.xyz/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`

        const response = await fetch(endpoint)
        const data = await response.json()

        if (!alreadyCounted) {
          window.sessionStorage.setItem(SESSION_FLAG, '1')
        }

        if (isActive) {
          setCount(Number(data?.value ?? 0))
        }
      } catch {
        if (isActive) {
          setCount(null)
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadCount()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <div className="visitor-counter" aria-label="Portfolio visitor count">
      <span className="visitor-counter-dot" aria-hidden="true" />
      <Eye size={16} strokeWidth={2.2} />
      <span className="visitor-counter-number">
        {isLoading ? '...' : count === null ? '--' : formatCount(count)}
      </span>
      <span className="visitor-counter-label">views</span>
    </div>
  )
}

export default VisitorCounter
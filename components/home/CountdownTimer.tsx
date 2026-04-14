'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm sm:h-20 sm:w-20">
        <span className="font-heading text-2xl font-bold text-papal-gold sm:text-4xl">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-1.5 text-xs uppercase tracking-wider text-white/60">
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft(targetDate))
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3 sm:gap-5">
        {['Días', 'Horas', 'Min', 'Seg'].map((label) => (
          <TimeBox key={label} value={0} label={label} />
        ))}
      </div>
    )
  }

  if (!timeLeft) {
    return (
      <div className="rounded-xl bg-papal-gold/20 px-6 py-4 text-center backdrop-blur-sm">
        <p className="font-heading text-xl font-bold text-white">
          El Papa León XIV está en España
        </p>
      </div>
    )
  }

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      <TimeBox value={timeLeft.days} label="Días" />
      <TimeBox value={timeLeft.hours} label="Horas" />
      <TimeBox value={timeLeft.minutes} label="Min" />
      <TimeBox value={timeLeft.seconds} label="Seg" />
    </div>
  )
}

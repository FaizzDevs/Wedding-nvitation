"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { greatVibes } from "@/app/font"
import { motion } from "framer-motion"
import { Check, Minus, Plus } from "lucide-react"

export const RSVPSection = () => {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null)
  const [events, setEvents] = useState<string[]>([])
  const [guestCount, setGuestCount] = useState(2)
  const [submitted, setSubmitted] = useState(false)

  const toggleEvent = (event: string) => {
    setEvents(prev =>
      prev.includes(event) ? prev.filter(e => e !== event) : [...prev, event]
    )
  }

  const handleSubmit = () => {
    if (attending === "yes") {
      // Simulate submit
      setSubmitted(true)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section  className="px-4 text-center text-lime-900 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white/70 rounded-xl p-6 shadow-xl"
        >
          <h2 className={`${greatVibes.className} text-5xl mb-2`}>RSVP</h2>
          <p className="mb-4 italic text-sm">
            Please confirm your attendance before, <strong>Sept 27<sup>th</sup>, 2025</strong>
          </p>
          <div className="border-2 p-4 rounded-lg bg-white text-center">
            <h3 className="font-semibold text-lime-900 mb-1">Will Attend</h3>
            <p className="text-sm">Yey! Thank you for the attendance...<br /> See you there :)</p>
            <Button className="mt-4" variant="secondary" onClick={() => setSubmitted(false)}>Change</Button>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="px-4 text-center text-lime-900 relative scroll-mt-48">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white/70 rounded-xl p-6 shadow-md"
      >
        <h2 className={`${greatVibes.className} text-5xl mb-2`}>RSVP</h2>
        <p className="mb-6 italic text-sm">
          Please confirm your attendance before, <strong>Sept 27<sup>th</sup>, 2025</strong>
        </p>

        {/* Will Attend */}
        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant={attending === "yes" ? "default" : "outline"}
            className="px-6"
            onClick={() => setAttending("yes")}
          >
            Will Attend
          </Button>
          <Button
            variant={attending === "no" ? "default" : "outline"}
            className="px-6"
            onClick={() => setAttending("no")}
          >
            Unable To Attend
          </Button>
        </div>

        {/* Events */}
        {attending === "yes" && (
          <>
            <p className="mb-2 font-medium">Which event will you attend?</p>
            <div className="flex flex-col gap-2 mb-4">
              {[
                "Holy Matrimony",
                "Reception"
              ].map(event => (
                <Button
                  key={event}
                  variant={events.includes(event) ? "default" : "outline"}
                  className="justify-between"
                  onClick={() => toggleEvent(event)}
                >
                  {event}
                  {events.includes(event) && <Check className="w-4 h-4 ml-2" />}
                </Button>
              ))}
              <Button
                variant="secondary"
                className="bg-lime-800 text-white hover:bg-lime-700"
                onClick={() => setEvents(["Holy Matrimony", "Reception"])}
              >
                Attend All
              </Button>
            </div>

            {/* Guest Count */}
            <p className="mb-2 font-medium">People you bring including you?</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button variant="outline" size="icon" onClick={() => setGuestCount(c => Math.max(1, c - 1))}>
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-lg font-semibold w-10">{guestCount}</span>
              <Button variant="outline" size="icon" onClick={() => setGuestCount(c => c + 1)}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}

        <Button
          disabled={attending === null}
          className="bg-lime-800 text-white hover:bg-lime-700 w-full"
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </motion.div>
    </section>
  )
}

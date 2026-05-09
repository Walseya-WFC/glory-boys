"use client"

import { useState } from "react"

export default function GloryBoysGuildSite() {
  const expansions = {
    "Midnight Season 1": [
      {
        name: "The Voidspire",
        bosses: 6,
        completed: 6,
        icon: "🟣",
        desc: "Voidstorm citadel purged"
      },
      {
        name: "The Dreamrift",
        bosses: 1,
        completed: 1,
        icon: "🌙",
        desc: "Nightmare core eliminated"
      },
      {
        name: "March on Quel'Danas",
        bosses: 2,
        completed: 2,
        icon: "🔥",
        desc: "Sunwell reclaimed"
      }
    ],
    "Wrath Legacy": [
      {
        name: "Icecrown Citadel",
        bosses: 12,
        completed: 12,
        icon: "❄️",
        desc: "Lich King defeated"
      },
      {
        name: "Ulduar",
        bosses: 14,
        completed: 14,
        icon: "⚙️",
        desc: "All titans awakened and defeated"
      }
    ]
  }

  const [tab, setTab] = useState("Midnight Season 1")

  return (
    <div
      className="min-h-screen w-full overflow-y-auto relative text-[#cfe6ff]"
      style={{
        fontFamily: "Cinzel, serif",
        backgroundImage:
          "url('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/85" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 py-24 border-b border-blue-900/30">

        {/* GUILD ICON */}
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full border border-red-500/40 bg-black/60 flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.25)]">
            <div className="text-5xl">☠️</div>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-black to-red-900 drop-shadow-[0_0_25px_rgba(255,0,0,0.35)]">
            Glory Boys
          </span>
        </h1>

        <p className="max-w-3xl mt-6 text-lg text-blue-100/70">
          Discipline. Execution. Perfection.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">About The Guild</h2>
        <p className="text-blue-100/70 text-lg">
          A progression-focused raiding guild operating at high efficiency.
          Every encounter is planned, executed, and perfected.
        </p>
      </section>

      {/* RAID UI (ARMORY STYLE) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10">

        {/* TABS */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {Object.keys(expansions).map((exp) => (
            <button
              key={exp}
              onClick={() => setTab(exp)}
              className={`px-4 py-2 rounded-lg border transition-all text-sm ${
                tab === exp
                  ? "bg-red-500/20 border-red-400 text-red-200"
                  : "bg-black/60 border-blue-900/40 text-blue-200"
              }`}
            >
              {exp}
            </button>
          ))}
        </div>

        {/* RAID LIST */}
        <div className="space-y-4">
          {expansions[tab].map((raid) => {
            const percent = (raid.completed / raid.bosses) * 100

            return (
              <div
                key={raid.name}
                className="bg-black/80 border border-blue-900/40 rounded-xl p-6 hover:border-red-500/30 transition-all"
              >
                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{raid.icon}</div>

                    <div>
                      <div className="text-xl font-bold text-blue-200">
                        {raid.name}
                      </div>
                      <div className="text-sm text-blue-100/60">
                        {raid.desc}
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-red-300 font-bold">
                    {raid.completed}/{raid.bosses}
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-4 w-full h-2 bg-blue-950 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 text-center px-6 py-20">

        <h2 className="text-4xl font-black text-blue-200 mb-4">
          Now Recruiting
        </h2>

        <p className="text-blue-100/70 max-w-2xl mx-auto">
          Tanks • Healers • DPS — only disciplined players need apply.
        </p>

      </section>
    </div>
  )
}
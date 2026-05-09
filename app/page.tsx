"use client"

import { useState } from "react"

export default function GloryBoysGuildSite() {
  const [activeRaidTab, setActiveRaidTab] = useState("midnight")

  const raids = {
    midnight: [
      { name: "The Voidspire", bosses: 6 },
      { name: "The Dreamrift", bosses: 1 },
      { name: "March on Quel'Danas", bosses: 2 },
    ],
    dragonflight: [
      { name: "Aberrus, the Shadowed Crucible", bosses: 9 },
      { name: "Amirdrassil, the Dream’s Hope", bosses: 9 },
    ],
    classic: [
      { name: "Icecrown Citadel", bosses: 12 },
      { name: "Trial of the Crusader", bosses: 5 },
    ],
  }

  return (
    <div
      className="min-h-screen overflow-y-auto relative text-[#cfe6ff]"
      style={{
        fontFamily: "Cinzel, serif",
        backgroundImage:
          "url('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 border-b border-blue-900/30">

        {/* GUILD ICON */}
        <div className="mb-6">
          <div className="w-28 h-28 rounded-full bg-black/60 border border-red-900/40 flex items-center justify-center shadow-[0_0_40px_rgba(120,0,0,0.4)]">
            <div className="text-4xl">☠️</div>
          </div>
        </div>

        {/* TITLE (BLOOD STYLE) */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest blood-text">
          Glory Boys
        </h1>

        <p className="max-w-3xl mt-6 text-lg text-blue-100/70">
          A disciplined raiding guild forged in skill, coordination, and execution.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">About The Guild</h2>
        <p className="text-blue-100/70 leading-relaxed">
          Glory Boys is a progression-driven PvE guild built on precision, discipline,
          and mastery. We focus on high-end raiding performance, structured execution,
          and long-term progression.
        </p>
      </section>

      {/* RAID PROGRESSION (CLICKABLE TABS) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">
          Raid Progression
        </h2>

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {Object.keys(raids).map((key) => (
            <button
              key={key}
              onClick={() => setActiveRaidTab(key)}
              className={`px-5 py-2 rounded-lg border transition ${
                activeRaidTab === key
                  ? "bg-red-900/40 border-red-400 text-white"
                  : "bg-black/60 border-blue-900/40 text-blue-200"
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        {/* RAID LIST */}
        <div className="grid md:grid-cols-3 gap-6">
          {raids[activeRaidTab as keyof typeof raids].map((raid) => (
            <div
              key={raid.name}
              className="bg-black/80 border border-blue-900/40 rounded-2xl p-6"
            >
              <div className="text-lg font-bold text-blue-200 mb-2">
                {raid.name}
              </div>
              <div className="text-blue-100/70 text-sm">
                Cleared: 100% ({raid.bosses}/{raid.bosses} bosses)
              </div>
              <div className="mt-3 text-red-300 text-sm">
                Mythic: Completed
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="relative z-10 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold text-blue-200 mb-8">Recruitment</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: "🛡️", title: "Tanks", desc: "Required frontline leaders" },
            { icon: "✨", title: "Healers", desc: "Precision support players" },
            { icon: "⚔️", title: "DPS", desc: "High execution damage dealers" },
          ].map((r) => (
            <div
              key={r.title}
              className="bg-black/80 border border-blue-900/40 rounded-2xl p-6"
            >
              <div className="text-4xl mb-2">{r.icon}</div>
              <div className="font-bold text-blue-200">{r.title}</div>
              <div className="text-blue-100/70 text-sm mt-1">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER TEXT */}
      <div className="relative z-10 text-center text-xs text-blue-200/40 pb-10">
        Glory Boys Guild — Icecrown Legacy Division
      </div>
    </div>
  )
}
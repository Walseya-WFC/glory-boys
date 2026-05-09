"use client"

import { useEffect, useState } from "react"

export default function GloryBoysGuildSite() {
  const [activeExpansion, setActiveExpansion] = useState("classic")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const expansions = {
    classic: {
      name: "Classic",
      raids: [
        "Molten Core",
        "Blackwing Lair",
        "Naxxramas",
        "Zul'Gurub",
      ],
    },
    tbc: {
      name: "The Burning Crusade",
      raids: [
        "Karazhan",
        "Gruul’s Lair",
        "Serpentshrine Cavern",
        "Black Temple",
        "Sunwell Plateau",
      ],
    },
    wotlk: {
      name: "Wrath of the Lich King",
      raids: [
        "Naxxramas",
        "Ulduar",
        "Trial of the Crusader",
        "Icecrown Citadel",
      ],
    },
    retail: {
      name: "Modern Era",
      raids: [
        "Vault of the Incarnates",
        "Aberrus, the Shadowed Crucible",
        "Amirdrassil",
      ],
    },
    midnight: {
      name: "Midnight (Season 1)",
      raids: [
        "The Voidspire (6 bosses)",
        "The Dreamrift (1 boss)",
        "March on Quel’Danas (2 bosses)",
      ],
    },
  }

  return (
    <div
      className={`min-h-screen relative overflow-y-auto text-[#cfe6ff] transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        fontFamily: "Cinzel, serif",
        backgroundImage:
          "url('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">

        {/* FACTION ICONS */}
        <div className="flex gap-10 mb-6 items-center">
          <img
            src="https://wow.zamimg.com/images/wow/icons/large/faction_horde.jpg"
            className="w-14 h-14 rounded-full border border-red-600"
          />
          <div className="text-4xl">⚔️</div>
          <img
            src="https://wow.zamimg.com/images/wow/icons/large/faction_alliance.jpg"
            className="w-14 h-14 rounded-full border border-blue-400"
          />
        </div>

        {/* GUILD NAME */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-[6px] blood-text">
          Glory Boys
        </h1>

        <p className="mt-6 text-blue-100/80 max-w-2xl">
          A legacy raiding guild forged across Azeroth — discipline, execution, dominance.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-blue-200 mb-3">About</h2>
        <p className="text-blue-100/70">
          We are a progression-focused PvE guild spanning all eras of World of Warcraft.
          From Classic raids to modern Mythic encounters, we maintain perfect execution and discipline.
        </p>
      </section>

      {/* RAID PROGRESSION SYSTEM */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-bold text-blue-200 text-center mb-6">
          Raid Progression
        </h2>

        {/* EXPANSION TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(expansions).map(([key, exp]) => (
            <button
              key={key}
              onClick={() => setActiveExpansion(key)}
              className={`px-5 py-2 rounded-lg border transition ${
                activeExpansion === key
                  ? "bg-red-900/50 border-red-400 text-white"
                  : "bg-black/40 border-blue-900/40 text-blue-200"
              }`}
            >
              {exp.name}
            </button>
          ))}
        </div>

        {/* RAID LIST */}
        <div className="grid md:grid-cols-3 gap-6">
          {expansions[activeExpansion as keyof typeof expansions].raids.map(
            (raid) => (
              <div
                key={raid}
                className="bg-black/70 border border-blue-900/40 rounded-2xl p-6 hover:scale-[1.02] transition"
              >
                <div className="text-lg font-bold text-blue-200">{raid}</div>
                <div className="mt-2 text-sm text-green-300">
                  Cleared: 100%
                </div>
                <div className="text-xs text-blue-100/60 mt-1">
                  All bosses defeated on all difficulties
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 text-center px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-200 mb-6">
          Recruitment
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: "🛡️", role: "Tank", desc: "Raid leaders & frontline stability" },
            { icon: "✨", role: "Healer", desc: "Precision healing & reaction mastery" },
            { icon: "⚔️", role: "DPS", desc: "Maximum output with discipline" },
          ].map((r) => (
            <div
              key={r.role}
              className="bg-black/70 border border-blue-900/40 rounded-2xl p-6"
            >
              <div className="text-4xl">{r.icon}</div>
              <div className="text-blue-200 font-bold mt-2">{r.role}</div>
              <div className="text-blue-100/60 text-sm mt-1">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center text-xs text-blue-200/40 pb-10">
        Glory Boys Guild — Azeroth Eternal Progression
      </div>
    </div>
  )
}
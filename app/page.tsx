"use client"
import { useState, useEffect, useRef } from "react"

export default function GloryBoysGuildSite() {
  const expansions = [
    {
      expansion: "Midnight",
      raids: [
        { name: "The Voidspire", bosses: 6 },
        { name: "The Dreamrift", bosses: 1 },
        { name: "March on Quel'Danas", bosses: 2 }
      ]
    },
    {
      expansion: "The War Within",
      raids: [
        { name: "Nerub-ar Palace", bosses: 8 }
      ]
    },
    {
      expansion: "Dragonflight",
      raids: [
        { name: "Vault of the Incarnates", bosses: 8 },
        { name: "Aberrus", bosses: 9 },
        { name: "Amirdrassil", bosses: 9 }
      ]
    },
    {
      expansion: "Shadowlands",
      raids: [
        { name: "Castle Nathria", bosses: 10 },
        { name: "Sanctum of Domination", bosses: 10 },
        { name: "Sepulcher", bosses: 11 }
      ]
    },
    {
      expansion: "Battle for Azeroth",
      raids: [
        { name: "Uldir", bosses: 8 },
        { name: "Battle of Dazar'alor", bosses: 9 },
        { name: "Ny'alotha", bosses: 12 }
      ]
    },
    {
      expansion: "Legion",
      raids: [
        { name: "Emerald Nightmare", bosses: 7 },
        { name: "Nighthold", bosses: 10 },
        { name: "Antorus", bosses: 11 }
      ]
    },
    {
      expansion: "Warlords of Draenor",
      raids: [
        { name: "Highmaul", bosses: 7 },
        { name: "Blackrock Foundry", bosses: 10 },
        { name: "Hellfire Citadel", bosses: 13 }
      ]
    },
    {
      expansion: "Mists of Pandaria",
      raids: [
        { name: "Mogu'shan Vaults", bosses: 6 },
        { name: "Throne of Thunder", bosses: 13 },
        { name: "Siege of Orgrimmar", bosses: 14 }
      ]
    },
    {
      expansion: "Cataclysm",
      raids: [
        { name: "Blackwing Descent", bosses: 6 },
        { name: "Firelands", bosses: 7 },
        { name: "Dragon Soul", bosses: 8 }
      ]
    },
    {
      expansion: "Wrath of the Lich King",
      raids: [
        { name: "Ulduar", bosses: 14 },
        { name: "Icecrown Citadel", bosses: 12 },
        { name: "Ruby Sanctum", bosses: 1 }
      ]
    },
    {
      expansion: "The Burning Crusade",
      raids: [
        { name: "Karazhan", bosses: 12 },
        { name: "Serpentshrine Cavern", bosses: 6 },
        { name: "Black Temple", bosses: 9 },
        { name: "Sunwell Plateau", bosses: 6 }
      ]
    },
    {
      expansion: "Classic",
      raids: [
        { name: "Molten Core", bosses: 10 },
        { name: "Blackwing Lair", bosses: 8 },
        { name: "Temple of Ahn'Qiraj", bosses: 9 },
        { name: "Naxxramas", bosses: 15 }
      ]
    }
  ]

  const [activeExpansion, setActiveExpansion] = useState(expansions[0])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getDifficulties = (expansionName: string, raidName: string) => {
    const difficulties = []

    if (expansionName === "Cataclysm" && raidName === "Dragon Soul" || 
        ["Mists of Pandaria", "Warlords of Draenor", "Legion", "Battle for Azeroth", 
         "Shadowlands", "Dragonflight", "The War Within", "Midnight"].includes(expansionName)) {
      difficulties.push({ difficulty: "LFR", color: "bg-blue-500", text: "text-blue-300" })
    }

    difficulties.push({ difficulty: "Normal", color: "bg-green-500", text: "text-green-300" })

    if (expansionName !== "Classic" && expansionName !== "The Burning Crusade") {
      difficulties.push({ difficulty: "Heroic", color: "bg-yellow-500", text: "text-yellow-300" })
    }

    if (["Mists of Pandaria", "Warlords of Draenor", "Legion", "Battle for Azeroth", 
         "Shadowlands", "Dragonflight", "The War Within", "Midnight"].includes(expansionName)) {
      difficulties.push({ difficulty: "Mythic", color: "bg-red-500", text: "text-red-300" })
    }

    return difficulties
  }

  // =============== RAIN EFFECT - Slower + Fel Green ===============
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrame: number
    const drops: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    for (let i = 0; i < 110; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        length: Math.random() * 14 + 10,
        speed: Math.random() * 6.4 + 7.2,     // ~20% slower
        opacity: Math.random() * 0.45 + 0.35
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(3, 6, 18, 0.20)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(80, 255, 140, 0.85)"   // Dark Fel Green
      ctx.lineWidth = 1.5

      drops.forEach((drop) => {
        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x + 1.2, drop.y + drop.length)
        ctx.stroke()

        drop.y += drop.speed
        if (drop.y > canvas.height) {
          drop.y = -drop.length
          drop.x = Math.random() * canvas.width
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images5.alphacoders.com/881/thumb-1920-881374.jpg')"
        }}
      />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-10 pointer-events-none"
        style={{ opacity: 0.75 }}
      />

      <div className="fixed inset-0 bg-black/18 z-20 pointer-events-none" />

      <div className="relative z-30">
        {/* HERO - Green Glow Title */}
        <section className="text-center pt-24 pb-20 px-6">
          <h1 
            className="text-7xl md:text-9xl font-black uppercase tracking-[0.08em] text-green-100 text-center relative glow-title"
            style={{ 
              fontFamily: "'Cinzel', 'Playfair Display', serif",
              textShadow: "0 0 25px rgba(80, 255, 140, 0.9), 0 0 45px rgba(0, 200, 100, 0.7), 0 0 70px rgba(0, 150, 80, 0.5)"
            }}
          >
            Glory Boys
          </h1>
          
          <p 
            className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed tracking-wider"
            style={{ 
              fontFamily: "'Cinzel', serif",
              color: "#b8d4ff",
              textShadow: "0 2px 12px rgba(0,0,0,0.7)"
            }}
          >
            Elite raiding guild forged in the fires of Azeroth
          </p>
        </section>

        {/* All other sections remain exactly the same */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="bg-black/50 border border-blue-900/40 rounded-3xl p-10 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-blue-200 mb-6">About Glory Boys</h2>
            <div className="space-y-5 text-lg text-blue-100/85 leading-relaxed">
              <p>We are a progression-focused guild forged through discipline, preparation, loyalty, and execution. Every encounter is studied, every mechanic mastered, and every victory earned together.</p>
              <p>Outside progression raiding, our members actively participate in:</p>
              <ul className="list-disc list-inside space-y-2 text-blue-100/80">
                <li>Achievement Farming</li>
                <li>Rare Mount Runs</li>
                <li>Legacy Raid Clears</li>
                <li>Pet & Toy Collection Events</li>
                <li>Mythic+ Push Groups</li>
                <li>Rated PvP & Arenas</li>
                <li>Community Help & Player Guidance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🛡️", role: "Tanks", desc: "Reliable leaders capable of controlling chaos under pressure." },
              { icon: "✨", role: "Healers", desc: "Focused support players with awareness and consistency." },
              { icon: "⚔️", role: "DPS", desc: "High-performance players dedicated to optimization." }
            ].map((role) => (
              <div key={role.role} className="bg-black/50 border border-red-900/40 rounded-3xl p-8 text-center backdrop-blur-sm">
                <div className="text-5xl mb-4">{role.icon}</div>
                <h3 className="text-3xl font-bold text-red-200 mb-3">{role.role}</h3>
                <p className="text-blue-100/80 text-lg leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RAID PROGRESSION - unchanged except difficulties logic from before */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-5xl font-black text-center text-blue-200 mb-12">Raid Progression</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {expansions.map((exp) => (
              <button
                key={exp.expansion}
                onClick={() => setActiveExpansion(exp)}
                className={`px-5 py-3 rounded-xl border transition-all duration-200 text-sm md:text-base font-bold
                  ${activeExpansion.expansion === exp.expansion ? "bg-red-900/70 border-red-500 text-red-100 shadow-[0_0_20px_rgba(120,0,0,0.6)]" : "bg-black/50 border-blue-900/40 text-blue-100 hover:bg-blue-950/40"}`}
              >
                {exp.expansion}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {activeExpansion.raids.map((raid) => {
              const difficulties = getDifficulties(activeExpansion.expansion, raid.name)
              return (
                <div key={raid.name} className="bg-black/50 border border-blue-900/40 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-red-950/80 via-black to-blue-950/80 px-8 py-5 border-b border-blue-900/40">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-black text-blue-100">{raid.name}</h3>
                        <div className="text-blue-200/70 mt-1">{raid.bosses} / {raid.bosses} Bosses Defeated</div>
                      </div>
                      <div className="text-green-300 font-bold text-xl">100% Cleared</div>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    {difficulties.map((difficulty) => (
                      <div key={difficulty.difficulty}>
                        <div className="flex justify-between mb-2">
                          <div className={`font-bold ${difficulty.text}`}>{difficulty.difficulty}</div>
                          <div className={`${difficulty.text}`}>{raid.bosses}/{raid.bosses}</div>
                        </div>
                        <div className="w-full h-5 rounded-full bg-black/60 border border-blue-900/40 overflow-hidden">
                          <div className={`h-full ${difficulty.color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`} style={{ width: "100%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="text-center px-6 pb-24 pt-10">
          <h2 className="text-5xl font-black text-red-200 mb-6">Recruitment Open</h2>
          <p className="max-w-4xl mx-auto text-xl text-blue-100/85 leading-relaxed">
            We seek dedicated players who value teamwork, progression, consistency, and community. Join us as we conquer every challenge Azeroth has to offer.
          </p>
          <div className="mt-10 inline-block px-10 py-4 rounded-2xl border border-red-800/60 bg-black/50 text-red-100 text-xl font-bold shadow-[0_0_30px_rgba(120,0,0,0.5)]">
            Tanks • Healers • DPS Needed
          </div>
        </section>
      </div>
    </div>
  )
}
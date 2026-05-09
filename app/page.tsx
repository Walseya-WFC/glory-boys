export default function GloryBoysGuildSite() {
  const raids = [
    {
      name: "The Voidspire",
      bosses: 6,
      desc: "Complete clearance across all encounters"
    },
    {
      name: "The Dreamrift",
      bosses: 1,
      desc: "Nightmare core fully defeated"
    },
    {
      name: "March on Quel'Danas",
      bosses: 2,
      desc: "Sunwell defenses broken and secured"
    }
  ]

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
      <div className="absolute inset-0 bg-black/80" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 border-b border-blue-900/30">

        {/* GUILD ICON (BADASS) */}
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
          A disciplined raiding guild forged in skill, coordination, and execution.
        </p>
      </section>

      {/* ABOUT (RESTORED + EXPANDED) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">
          About The Guild
        </h2>

        <p className="text-blue-100/70 leading-relaxed text-lg">
          Glory Boys is a progression-driven PvE and PvP guild built on precision, discipline, and execution.
          We value preparation, mastery, and consistency above all else. Every encounter is studied, practiced,
          and executed with intent.
        </p>
      </section>

      {/* EXTRA PHILOSOPHY BLOCK (ADDED BEFORE RAID SECTION) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="bg-black/70 border border-blue-900/40 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">
            Guild Philosophy
          </h3>
          <p className="text-blue-100/70">
            We do not rely on luck. We do not rely on numbers. We rely on execution.
            Every player is accountable. Every mistake is corrected. Every raid is perfection-focused.
          </p>
        </div>
      </section>

      {/* RAID PROGRESSION (NEW BLIZZARD STYLE) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">
          Raid Progression — Midnight Season 1
        </h2>

        <div className="space-y-4">
          {raids.map((raid) => (
            <div
              key={raid.name}
              className="bg-black/80 border border-blue-900/40 rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <div className="text-xl font-bold text-blue-200">
                  {raid.name}
                </div>
                <div className="text-sm text-blue-100/60">
                  {raid.desc}
                </div>
              </div>

              <div className="text-right text-blue-200 font-bold">
                {raid.bosses}/{raid.bosses} Cleared
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RAID + PVP (RESTORED) */}
      <section className="relative z-10 px-6 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">Raid Schedule</h3>
          <div className="space-y-2 text-blue-100/70">
            <div>Monday — 20:00 - 22:00</div>
            <div>Wednesday — 20:00 - 22:00</div>
            <div>Friday — 20:00 - 22:00</div>
          </div>
        </div>

        <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">PvP Warfare</h3>
          <div className="space-y-2 text-blue-100/70">
            <div>Saturday — Arenas & Battlegrounds</div>
            <div>Sunday — World PvP</div>
          </div>
        </div>
      </section>

      {/* ROLES (RESTORED) */}
      <section className="relative z-10 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold text-blue-200 mb-8">
          Call To Arms
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-4xl">🛡️</div>
            <div className="font-bold text-blue-200">Tank</div>
            <div className="text-blue-100/60 text-sm">Unbreakable discipline</div>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-4xl">✨</div>
            <div className="font-bold text-blue-200">Healer</div>
            <div className="text-blue-100/60 text-sm">Precision support</div>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-4xl">⚔️</div>
            <div className="font-bold text-blue-200">DPS</div>
            <div className="text-blue-100/60 text-sm">Controlled destruction</div>
          </div>

        </div>
      </section>

      {/* RECRUITMENT (RESTORED) */}
      <section className="relative z-10 text-center px-6 pb-24">
        <h2 className="text-4xl font-black text-blue-200 mb-4">
          Recruitment
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100/70">
          We seek disciplined players committed to excellence, consistency, and progression.
        </p>

        <div className="mt-8 inline-block px-8 py-3 border border-blue-400 text-blue-200 rounded-xl">
          Tanks • Healers • DPS Needed
        </div>
      </section>
    </div>
  )
}
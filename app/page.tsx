export default function GloryBoysGuildSite() {
  const raids = [
    {
      name: "The Voidspire",
      bosses: 6,
      desc: "Victory secured across all encounters"
    },
    {
      name: "The Dreamrift",
      bosses: 1,
      desc: "Complete domination of the nightmare core"
    },
    {
      name: "March on Quel'Danas",
      bosses: 2,
      desc: "Sunwell defenses fully broken"
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
      <section className="relative z-10 flex flex-col items-center text-center px-6 py-24 border-b border-blue-900/30">

        {/* BADASS GUILD ICON */}
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full border border-red-500/40 bg-black/60 flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.25)]">
            <div className="text-5xl">☠️</div>
          </div>
        </div>

        {/* BLOOD + DARK ICE TITLE */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-black to-red-900 drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">
            Glory Boys
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-blue-100/70 text-lg">
          Forged in discipline. Bound by execution. Defined by perfection.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">
          The Guild
        </h2>
        <p className="text-blue-100/70 leading-relaxed text-lg">
          Glory Boys is a progression-driven raiding guild operating at the highest level of coordination, discipline, and mechanical execution.
          Every pull is preparation. Every kill is expected. Failure is not part of our structure.
        </p>
      </section>

      {/* RAID PROGRESSION (BLIZZARD STYLE) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10">
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
                {raid.bosses}/{raid.bosses} Bosses Cleared
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES / RECRUITMENT */}
      <section className="relative z-10 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-200 mb-8">
          Now Recruiting
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-black/80 border border-red-900/40 rounded-2xl p-6">
            <div className="text-4xl">🛡️</div>
            <div className="font-bold text-blue-200 mt-2">Tanks</div>
            <div className="text-blue-100/60 text-sm">
              Unbreakable frontline leadership
            </div>
          </div>

          <div className="bg-black/80 border border-red-900/40 rounded-2xl p-6">
            <div className="text-4xl">✨</div>
            <div className="font-bold text-blue-200 mt-2">Healers</div>
            <div className="text-blue-100/60 text-sm">
              Precision sustain under pressure
            </div>
          </div>

          <div className="bg-black/80 border border-red-900/40 rounded-2xl p-6">
            <div className="text-4xl">⚔️</div>
            <div className="font-bold text-blue-200 mt-2">DPS</div>
            <div className="text-blue-100/60 text-sm">
              Controlled destruction output
            </div>
          </div>
        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="relative z-10 text-center px-6 pb-24">
        <h2 className="text-4xl font-black text-red-500">
          Glory is not given. It is taken.
        </h2>

        <p className="mt-4 text-blue-100/60 max-w-2xl mx-auto">
          Only disciplined players who seek perfection need apply.
        </p>
      </section>
    </div>
  )
}
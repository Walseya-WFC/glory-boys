export default function GloryBoysGuildSite() {
  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{
        fontFamily: 'Cinzel, serif',
        color: '#cfe6ff',
        backgroundImage: "url('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 border-b border-blue-900/30">

        {/* CREST */}
        <div className="mb-6">
          <div className="w-28 h-28 rounded-full border border-blue-300/40 bg-black/60 flex items-center justify-center shadow-[0_0_30px_rgba(120,180,255,0.3)]">
            <div className="text-4xl">❄️</div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-blue-400">
          Glory Boys
        </h1>

        <p className="max-w-3xl mt-6 text-lg text-blue-100/80">
          A disciplined raiding guild forged in skill, coordination, and execution.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">About The Guild</h2>
        <p className="text-blue-100/70 leading-relaxed">
          Glory Boys is a progression-driven PvE and PvP guild built on precision, discipline, and execution.
          We value preparation, mastery, and consistency above all else.
        </p>
      </section>

      {/* RAID + PVP */}
      <section className="relative z-10 px-6 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">Raid Schedule</h3>
          <div className="space-y-2">
            <div>Monday — 20:00 - 22:00</div>
            <div>Wednesday — 20:00 - 22:00</div>
            <div>Friday — 20:00 - 22:00</div>
          </div>
        </div>

        <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">PvP Warfare</h3>
          <div className="space-y-2">
            <div>Saturday — Arenas & Battlegrounds</div>
            <div>Sunday — World PvP</div>
          </div>
        </div>

      </section>

      {/* RAID PROGRESS */}
      <section className="relative z-10 px-6 py-14 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">Raid Progression</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Normal', text: 'Clean execution across all encounters' },
            { name: 'Heroic', text: 'Perfect coordination under pressure' },
            { name: 'Mythic', text: 'Final challenge remains' }
          ].map((r) => (
            <div key={r.name} className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
              <div className="text-blue-200 font-bold text-lg mb-2">{r.name}</div>
              <div className="text-sm text-blue-100/70">{r.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="relative z-10 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold text-blue-200 mb-8">Call To Arms</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🛡️', title: 'Tank', desc: 'Unbreakable discipline' },
            { icon: '✨', title: 'Healer', desc: 'Precision support' },
            { icon: '⚔️', title: 'DPS', desc: 'Controlled destruction' }
          ].map((r) => (
            <div key={r.title} className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
              <div className="text-4xl mb-2">{r.icon}</div>
              <div className="font-bold text-blue-200">{r.title}</div>
              <div className="text-blue-100/70 text-sm mt-1">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 text-center px-6 pb-24">
        <h2 className="text-4xl font-black text-blue-200 mb-4">Recruitment</h2>
        <p className="max-w-2xl mx-auto text-blue-100/70">
          We seek disciplined players committed to excellence, consistency, and progression.
        </p>

        <div className="mt-8 inline-block px-8 py-3 border border-blue-400 text-blue-200 rounded-xl">
          Discord Recruitment Opening Soon
        </div>
      </section>

      {/* NOTE */}
      <div className="relative z-10 text-center text-xs text-blue-200/40 pb-6">
        Replace backgroundImage URL in code with any Icecrown Citadel image you prefer.
      </div>

    </div>
  )
}

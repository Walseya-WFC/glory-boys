export default function GloryBoysGuildSite() {
  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{
        fontFamily: 'Cinzel, serif',
        color: '#cfe6ff'
      }}
    >

      {/* ICECROWN BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d8?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black" />
      </div>

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(120,180,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 blur-2xl opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(200,220,255,0.15),transparent_60%)] animate-pulse" />

      {/* SNOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_2px)] bg-[length:30px_30px] animate-[spin_120s_linear_infinite] opacity-20" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(180,220,255,0.6)_1px,transparent_2px)] bg-[length:50px_50px] animate-[spin_200s_linear_infinite] opacity-10" />
      </div>

      {/* PORTAL GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(140,200,255,0.25),transparent_60%)] blur-3xl animate-pulse" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,220,150,0.18),transparent_60%)] blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 border-b border-blue-900/30">

        <div className="mb-6">
          <div className="w-28 h-28 rounded-full border border-blue-300/40 bg-black/40 flex items-center justify-center shadow-[0_0_30px_rgba(120,180,255,0.5)]">
            <div className="text-4xl">❄️</div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-blue-400 drop-shadow-[0_0_25px_rgba(120,180,255,0.5)]">
          Glory Boys
        </h1>

        <p className="max-w-3xl mt-6 text-lg text-blue-100/80">
          A disciplined raiding guild forged in the frozen citadel of Icecrown. We stand together where others fall.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">About The Guild</h2>
        <p className="text-blue-100/70 leading-relaxed">
          Glory Boys is a progression-driven PvE and PvP guild built on precision, discipline, and execution.
          We do not rely on luck — only preparation, coordination, and mastery of mechanics define us.
        </p>
      </section>

      {/* RAID + PVP */}
      <section className="relative z-10 px-6 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-black/60 border border-blue-900/40 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">Raid Schedule</h3>
          <div className="space-y-2">
            <div>Monday — 20:00 - 22:00</div>
            <div>Wednesday — 20:00 - 22:00</div>
            <div>Friday — 20:00 - 22:00</div>
          </div>
        </div>

        <div className="bg-black/60 border border-blue-900/40 rounded-2xl p-6">
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
            { name: 'Normal', p: 100, text: 'Flawless execution across all encounters' },
            { name: 'Heroic', p: 100, text: 'Perfect coordination under pressure' },
            { name: 'Mythic', p: 90, text: 'Final challenge remains — perfection pursued' }
          ].map((r) => (
            <div key={r.name} className="bg-black/60 border border-blue-900/40 rounded-2xl p-6">
              <div className="text-blue-200 font-bold text-lg mb-2">{r.name}</div>
              <div className="text-sm mb-2 text-blue-100/70">{r.text}</div>
              <div className="h-2 bg-blue-950 rounded overflow-hidden">
                <div className="h-full w-full bg-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ARMS */}
      <section className="relative z-10 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold text-blue-200 mb-8">Call To Arms</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🛡️', title: 'Tank', desc: 'Unbreakable discipline and control.' },
            { icon: '✨', title: 'Healer', desc: 'Precision support under any pressure.' },
            { icon: '⚔️', title: 'DPS', desc: 'Calculated destruction and execution.' }
          ].map((r) => (
            <div key={r.title} className="bg-black/60 border border-blue-900/40 rounded-2xl p-6">
              <div className="text-4xl mb-2">{r.icon}</div>
              <div className="font-bold text-blue-200">{r.title}</div>
              <div className="text-blue-100/70 text-sm mt-1">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GUILD PHILOSOPHY */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">Guild Philosophy</h2>
        <p className="text-blue-100/70 leading-relaxed mb-4">
          We pursue perfection in every pull, every encounter, and every decision. Mediocrity has no place among us.
        </p>
        <p className="text-blue-100/70 leading-relaxed mb-4">
          Every member is expected to master their role, understand encounters deeply, and execute with discipline under pressure.
        </p>
        <p className="text-blue-100/70 leading-relaxed">
          Victory is not an accident — it is the result of preparation, intelligence, and unity.
        </p>
      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 text-center px-6 pb-24">
        <h2 className="text-4xl font-black text-blue-200 mb-4">Recruitment</h2>
        <p className="max-w-2xl mx-auto text-blue-100/70">
          We are always seeking skilled players who value discipline, mastery, and continuous improvement.
          Only those committed to excellence will endure.
        </p>

        <div className="mt-8 inline-block px-8 py-3 border border-blue-400 text-blue-200 rounded-xl">
          Discord Recruitment Opening Soon
        </div>
      </section>

    </div>
  )
}

export default function GloryBoysGuildSite() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden overflow-y-auto"
      style={{
        fontFamily: "Cinzel, serif",
        color: "#cfe6ff",
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
        <h1 className="blood-title text-6xl md:text-8xl">
          Glory Boys
        </h1>

        <p className="max-w-3xl mt-6 text-lg text-blue-100/80">
          A disciplined raiding guild forged in execution, precision, and relentless improvement.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">Who We Are</h2>
        <p className="text-blue-100/70 leading-relaxed">
          Glory Boys is not a casual gathering. We are a structured raiding force built around consistency, preparation,
          and performance. Every pull matters. Every mistake is learned from. Every victory is earned.
        </p>

        <p className="text-blue-100/70 leading-relaxed mt-4">
          We value players who understand mechanics, respect raid time, and push their limits without excuses.
          Progress is not optional — it is the standard.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-blue-200 mb-6">Core Principles</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="text-blue-200 font-bold mb-2">Discipline</h3>
            <p className="text-blue-100/70 text-sm">
              We arrive prepared, on time, and ready to execute at maximum focus.
            </p>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="text-blue-200 font-bold mb-2">Consistency</h3>
            <p className="text-blue-100/70 text-sm">
              Performance is measured over time, not in single moments.
            </p>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="text-blue-200 font-bold mb-2">Execution</h3>
            <p className="text-blue-100/70 text-sm">
              Mechanics win fights. Communication wins raids.
            </p>
          </div>
        </div>
      </section>

      {/* RAID + PVP */}
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
          <h3 className="text-xl font-bold text-blue-200 mb-3">PvP Operations</h3>
          <div className="space-y-2 text-blue-100/70">
            <div>Saturday — Arenas & Battlegrounds</div>
            <div>Sunday — World PvP Domination</div>
          </div>
        </div>
      </section>

      {/* RAID PROGRESS */}
      <section className="relative z-10 px-6 py-14 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">
          Raid Progression
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-blue-200 font-bold mb-2">Normal</div>
            <div className="text-blue-100/70 text-sm">Full clear — mastered</div>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-blue-200 font-bold mb-2">Heroic</div>
            <div className="text-blue-100/70 text-sm">Full clear — optimized execution</div>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-blue-200 font-bold mb-2">Mythic</div>
            <div className="text-blue-100/70 text-sm">Final encounter remains</div>
          </div>
        </div>
      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 text-center px-6 pb-24">
        <h2 className="text-4xl font-black text-blue-200 mb-4">
          Recruitment
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100/70">
          We are currently looking for skilled players who want structured progression, not chaos.
          Tanks, healers, and DPS all welcome — performance matters more than role.
        </p>

        <div className="mt-6 inline-block px-8 py-3 border border-blue-400 text-blue-200 rounded-xl">
          Application via Discord (coming soon)
        </div>
      </section>
    </div>
  );
}
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
          A progression-driven raiding guild built on discipline, consistency, and high-performance execution.
        </p>
      </section>

      {/* GUILD IDENTITY */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">
          Guild Identity
        </h2>

        <p className="text-blue-100/70 leading-relaxed">
          Glory Boys exists for one purpose: to clear content at a high level with structure and discipline.
          We are not a casual community — we are a focused raiding team that values performance, preparation,
          and accountability.
        </p>

        <p className="text-blue-100/70 leading-relaxed mt-4">
          Every member is expected to understand their class, know encounters before pulls, and improve continuously.
          If you want carried gameplay, this is not your place. If you want progression through skill — welcome.
        </p>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-blue-200 mb-6">
          What Sets Us Apart
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="text-blue-200 font-bold mb-2">Structured Leadership</h3>
            <p className="text-blue-100/70 text-sm">
              Clear raid leadership, fast decisions, and zero confusion during progression.
            </p>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="text-blue-200 font-bold mb-2">Serious Progression Mindset</h3>
            <p className="text-blue-100/70 text-sm">
              We do not waste raid time. Every pull has purpose and improvement focus.
            </p>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="text-blue-200 font-bold mb-2">Performance Standards</h3>
            <p className="text-blue-100/70 text-sm">
              Players are measured by consistency, mechanics, and adaptability.
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
          <h3 className="text-xl font-bold text-blue-200 mb-3">PvP Division</h3>
          <div className="space-y-2 text-blue-100/70">
            <div>Saturday — Competitive Arenas & Rated Battlegrounds</div>
            <div>Sunday — World PvP Coordination & Events</div>
          </div>
        </div>
      </section>

      {/* PROGRESSION */}
      <section className="relative z-10 px-6 py-14 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">
          Progression Status
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-blue-200 font-bold mb-2">Normal</div>
            <div className="text-blue-100/70 text-sm">Cleared with consistency and efficiency</div>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-blue-200 font-bold mb-2">Heroic</div>
            <div className="text-blue-100/70 text-sm">Optimized execution across all encounters</div>
          </div>

          <div className="bg-black/80 border border-blue-900/40 rounded-2xl p-6">
            <div className="text-blue-200 font-bold mb-2">Mythic</div>
            <div className="text-blue-100/70 text-sm">Endboss progression in active development</div>
          </div>
        </div>
      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 text-center px-6 pb-24">
        <h2 className="text-4xl font-black text-blue-200 mb-4">
          Recruitment
        </h2>

        <p className="max-w-3xl mx-auto text-blue-100/70 leading-relaxed">
          We are currently expanding our roster with players who take raiding seriously.
          We are looking for individuals who value improvement, respect team structure,
          and understand the importance of preparation.
        </p>

        <p className="max-w-3xl mx-auto text-blue-100/70 mt-4">
          If you are searching for a guild where performance matters and progression is earned,
          not given — Glory Boys is built for you.
        </p>

        <div className="mt-8 inline-block px-8 py-3 border border-blue-400 text-blue-200 rounded-xl">
          Recruitment via Discord (invite coming soon)
        </div>
      </section>
    </div>
  );
}
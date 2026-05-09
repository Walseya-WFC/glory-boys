export default function GloryBoysGuildSite() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#cfe6ff",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* HERO */}
      <section className="relative z-10 text-center py-28 px-6 border-b border-blue-900/30">

        {/* CREST */}
        <div className="mb-6">
          <div className="w-28 h-28 mx-auto rounded-full border border-blue-300/30 bg-black/60 flex items-center justify-center shadow-[0_0_35px_rgba(120,180,255,0.25)]">
            ❄️
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest text-blue-100 drop-shadow-[0_0_15px_rgba(80,140,255,0.6)]">
          Glory Boys
        </h1>

        <p className="mt-6 text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
          A hardened World of Warcraft progression guild forged in discipline, execution, and relentless improvement.
          We do not play to participate — we play to dominate.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-200 mb-4">
          Who We Are
        </h2>

        <p className="text-blue-100/70 text-lg leading-relaxed">
          Glory Boys is a high-performance raiding guild focused on endgame PvE content.
          Every member is expected to perform at maximum efficiency, understand mechanics deeply,
          and maintain consistency across all raid tiers.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-2">Discipline</h3>
          <p className="text-blue-100/70">
            No excuses, no randomness — only structured execution.
          </p>
        </div>

        <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-2">Mastery</h3>
          <p className="text-blue-100/70">
            Every player knows their role beyond basic rotation.
          </p>
        </div>

        <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-2">Consistency</h3>
          <p className="text-blue-100/70">
            Performance is expected every raid night, not occasionally.
          </p>
        </div>

      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-bold text-blue-200 mb-6">
          Recruitment
        </h2>

        <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
          We are currently recruiting experienced and dedicated players for core raid progression.
          If you lack discipline or consistency, this is not the place for you.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-200">Tanks</h3>
            <p className="text-blue-100/70 mt-2">
              Leadership, awareness, and absolute control of encounter pacing.
            </p>
          </div>

          <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-200">Healers</h3>
            <p className="text-blue-100/70 mt-2">
              Precision healing and reactive decision-making under pressure.
            </p>
          </div>

          <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-200">DPS</h3>
            <p className="text-blue-100/70 mt-2">
              Maximum output with perfect mechanic execution.
            </p>
          </div>

        </div>
      </section>

      {/* RAID PROGRESSION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-200 mb-8 text-center">
          Raid Progression
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-black/70 border border-green-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-2">Normal</h3>
            <p className="text-blue-100/70">
              Full clear — all bosses defeated with clean execution.
            </p>
          </div>

          <div className="bg-black/70 border border-yellow-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Heroic</h3>
            <p className="text-blue-100/70">
              Full clear — coordinated performance under pressure.
            </p>
          </div>

          <div className="bg-black/70 border border-red-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-2">Mythic</h3>
            <p className="text-blue-100/70">
              Nearly complete — all bosses down except final encounter.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="relative z-10 text-center px-6 py-24">

        <h2 className="text-4xl md:text-5xl font-black text-blue-200 mb-6">
          Join The Glory Boys
        </h2>

        <p className="text-blue-100/70 max-w-3xl mx-auto text-lg leading-relaxed">
          We are building something elite. Not casual. Not average.  
          If you want to improve, push limits, and raid at a high level — this is your place.
        </p>

        <div className="mt-10 inline-block px-10 py-4 border border-blue-400 text-blue-200 rounded-xl">
          Recruitment Open
        </div>

      </section>

    </div>
  );
}
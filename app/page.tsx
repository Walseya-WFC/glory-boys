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
          A hardened World of Warcraft progression guild forged in discipline,
          execution, and relentless improvement. We do not play to participate —
          we play to dominate.
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
            No excuses. Clean execution only.
          </p>
        </div>

        <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-2">Mastery</h3>
          <p className="text-blue-100/70">
            Deep class understanding and encounter control.
          </p>
        </div>

        <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-200 mb-2">Consistency</h3>
          <p className="text-blue-100/70">
            Every raid night is performance night.
          </p>
        </div>

      </section>

      {/* RECRUITMENT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-bold text-blue-200 mb-6">
          Recruitment
        </h2>

        <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
          We are actively recruiting skilled and committed players for progression raiding.
          Tanks, Healers, and DPS roles are all open.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-200">Tanks</h3>
            <p className="text-blue-100/70 mt-2">
              Leadership and encounter control under pressure.
            </p>
          </div>

          <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-200">Healers</h3>
            <p className="text-blue-100/70 mt-2">
              Precision healing and reaction-based gameplay.
            </p>
          </div>

          <div className="bg-black/70 border border-blue-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-200">DPS</h3>
            <p className="text-blue-100/70 mt-2">
              Maximum damage with perfect mechanics execution.
            </p>
          </div>

        </div>
      </section>

      {/* RAID PROGRESSION - BLIZZARD STYLE */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-200 mb-10 text-center">
          Raid Progression
        </h2>

        <div className="space-y-5">

          {[
            {
              raid: "Current Raid Tier",
              status: "All Bosses Defeated",
              color: "green",
            },
            {
              raid: "Heroic Difficulty",
              status: "Full Clear (All Bosses)",
              color: "blue",
            },
            {
              raid: "Normal Difficulty",
              status: "Full Clear (All Bosses)",
              color: "green",
            },
            {
              raid: "Mythic Difficulty",
              status: "All Bosses Defeated (Final Boss Cleared)",
              color: "purple",
            },
          ].map((r) => (
            <div
              key={r.raid}
              className="bg-black/70 border border-blue-900/40 rounded-lg px-6 py-4 flex items-center justify-between"
            >

              {/* LEFT */}
              <div>
                <div className="text-blue-200 font-semibold text-lg">
                  {r.raid}
                </div>
                <div className="text-blue-100/60 text-sm">
                  Glory Boys Guild Progress
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <div
                  className={`font-bold text-sm ${
                    r.color === "green"
                      ? "text-green-300"
                      : r.color === "blue"
                      ? "text-blue-300"
                      : "text-purple-300"
                  }`}
                >
                  {r.status}
                </div>

                <div className="w-44 h-2 bg-gray-800 rounded mt-2 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500" />
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 text-center px-6 py-24">

        <h2 className="text-4xl md:text-5xl font-black text-blue-200 mb-6">
          Join The Glory Boys
        </h2>

        <p className="text-blue-100/70 max-w-3xl mx-auto text-lg leading-relaxed">
          We are building an elite progression environment focused on performance,
          discipline, and long-term mastery. If you are serious — you belong here.
        </p>

        <div className="mt-10 inline-block px-10 py-4 border border-blue-400 text-blue-200 rounded-xl">
          Recruitment Open
        </div>

      </section>

    </div>
  );
}
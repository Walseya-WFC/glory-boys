export default function GloryBoysGuildSite() {
  const raids = [
    {
      name: "The Voidspire",
      bosses: [
        "Eldritch Sentinel",
        "Voidborne Council",
        "Reality Fracture",
        "Xal'Ator the Unbound",
        "Echo of Nothing",
        "The Spire Core"
      ]
    },
    {
      name: "The Dreamrift",
      bosses: ["Lunara, the Dream Devourer"]
    },
    {
      name: "March on Quel'Danas",
      bosses: ["Sunwell Warden Kaelith", "Abyssal Magister Veyron"]
    }
  ];

  const guildRanks = [
    { name: "Guild Master", count: 1 },
    { name: "Officer", count: 3 },
    { name: "Raiders", count: 18 },
    { name: "Trial", count: 5 }
  ];

  return (
    <div
      className="min-h-screen relative text-blue-100"
      style={{
        backgroundImage:
          "url('https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/85" />

      {/* HERO / INSPECT PANEL */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-20 gap-10">

        {/* LEFT: CHARACTER PANEL */}
        <div className="md:w-1/3 bg-black/70 border border-purple-900/40 rounded-xl p-6 shadow-[0_0_40px_rgba(120,0,200,0.15)]">

          <div className="text-center mb-6">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-b from-purple-900 to-black flex items-center justify-center border border-purple-500/30">
              <span className="text-4xl">☠️</span>
            </div>

            <h1 className="text-3xl font-black mt-4 tracking-widest text-purple-200">
              Glory Boys
            </h1>

            <p className="text-sm text-blue-100/60 mt-2">
              Mythic Progression Guild
            </p>
          </div>

          {/* RANK SYSTEM */}
          <div className="space-y-3">
            <h2 className="text-blue-200 font-bold mb-2">Guild Structure</h2>

            {guildRanks.map((r) => (
              <div
                key={r.name}
                className="flex justify-between text-sm border-b border-purple-900/20 pb-2"
              >
                <span>{r.name}</span>
                <span className="text-purple-300">{r.count}</span>
              </div>
            ))}
          </div>

          {/* INSPECT STYLE STATS */}
          <div className="mt-6 text-sm space-y-2 text-blue-100/70">
            <div>Raid Focus: Mythic PvE</div>
            <div>Core Philosophy: Perfection > Completion</div>
            <div>Status: Active Progression</div>
          </div>
        </div>

        {/* RIGHT: RAID PANEL */}
        <div className="md:w-2/3 space-y-6">

          <h2 className="text-3xl font-bold text-blue-200 mb-4">
            Midnight Season 1 Progression
          </h2>

          {raids.map((raid) => (
            <details
              key={raid.name}
              className="bg-black/70 border border-blue-900/40 rounded-xl p-5 cursor-pointer group"
            >
              <summary className="list-none flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-blue-200 group-hover:text-purple-300">
                    {raid.name}
                  </h3>
                  <p className="text-sm text-blue-100/60">
                    Click to view boss progression
                  </p>
                </div>

                <span className="text-green-300 font-bold">
                  Cleared
                </span>
              </summary>

              <div className="mt-4 pl-2 border-l border-purple-900/40 space-y-2">
                {raid.bosses.map((boss) => (
                  <div
                    key={boss}
                    className="text-sm text-blue-100/80 flex justify-between"
                  >
                    <span>{boss}</span>
                    <span className="text-green-300">✓ Defeated</span>
                  </div>
                ))}
              </div>
            </details>
          ))}

          {/* ARMORY STYLE SUMMARY */}
          <div className="bg-black/70 border border-purple-900/40 rounded-xl p-5 mt-8">
            <h3 className="text-xl font-bold text-purple-300 mb-3">
              Overall Status
            </h3>

            <div className="text-blue-100/70 text-sm space-y-2">
              <div>✔ All Raid Tiers Cleared</div>
              <div>✔ Full Mythic Progression Complete</div>
              <div>✔ High-End Execution Standard Maintained</div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="relative z-10 text-center py-16">
        <h2 className="text-4xl font-black text-purple-200">
          Join The Glory Boys
        </h2>

        <p className="text-blue-100/60 mt-3">
          Discipline. Execution. Domination.
        </p>

        <div className="mt-6 inline-block px-8 py-3 border border-purple-400 text-purple-200 rounded-xl">
          Recruitment Open
        </div>
      </div>
    </div>
  );
}
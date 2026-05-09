export default function GloryBoysGuildSite() {
  const expansions = [
    {
      expansion: "Classic",
      raids: [
        "Molten Core",
        "Blackwing Lair",
        "Temple of Ahn'Qiraj",
        "Naxxramas"
      ]
    },
    {
      expansion: "The Burning Crusade",
      raids: [
        "Karazhan",
        "Serpentshrine Cavern",
        "Black Temple",
        "Sunwell Plateau"
      ]
    },
    {
      expansion: "Wrath of the Lich King",
      raids: [
        "Naxxramas",
        "Ulduar",
        "Trial of the Crusader",
        "Icecrown Citadel",
        "Ruby Sanctum"
      ]
    },
    {
      expansion: "Cataclysm",
      raids: [
        "Blackwing Descent",
        "Firelands",
        "Dragon Soul"
      ]
    },
    {
      expansion: "Mists of Pandaria",
      raids: [
        "Mogu'shan Vaults",
        "Throne of Thunder",
        "Siege of Orgrimmar"
      ]
    },
    {
      expansion: "Warlords of Draenor",
      raids: [
        "Highmaul",
        "Blackrock Foundry",
        "Hellfire Citadel"
      ]
    },
    {
      expansion: "Legion",
      raids: [
        "The Emerald Nightmare",
        "Nighthold",
        "Tomb of Sargeras",
        "Antorus"
      ]
    },
    {
      expansion: "Battle for Azeroth",
      raids: [
        "Uldir",
        "Battle of Dazar'alor",
        "Ny'alotha"
      ]
    },
    {
      expansion: "Shadowlands",
      raids: [
        "Castle Nathria",
        "Sanctum of Domination",
        "Sepulcher of the First Ones"
      ]
    },
    {
      expansion: "Dragonflight",
      raids: [
        "Vault of the Incarnates",
        "Aberrus",
        "Amirdrassil"
      ]
    },
    {
      expansion: "The War Within",
      raids: [
        "Nerub-ar Palace"
      ]
    },
    {
      expansion: "Midnight",
      raids: [
        "The Voidspire",
        "The Dreamrift",
        "March on Quel'Danas"
      ]
    }
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images7.alphacoders.com/340/340211.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#dbeafe",
        fontFamily: "serif"
      }}
    >
      {/* LIGHT DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="text-center pt-24 pb-20 px-6">

          {/* HORDE + ALLIANCE */}
          <div className="flex justify-center items-center gap-8 mb-8 text-5xl">
            <div className="drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
              ☠️
            </div>

            {/* GUILD CREST */}
            <div className="w-36 h-36 rounded-full border border-red-900/70 bg-black/60 flex items-center justify-center shadow-[0_0_50px_rgba(120,0,0,0.8)]">
              <div className="text-6xl">🩸</div>
            </div>

            <div className="drop-shadow-[0_0_20px_rgba(0,100,255,0.7)]">
              🛡️
            </div>
          </div>

          {/* TITLE */}
          <h1 className="blood-title text-7xl md:text-9xl font-black uppercase tracking-[0.2em]">
            Glory Boys
          </h1>

          {/* SUBTITLE */}
          <p className="mt-8 max-w-4xl mx-auto text-xl md:text-2xl text-blue-100/90 leading-relaxed">
            Forged through discipline, perfected through execution, and united
            through loyalty. Glory Boys is a high-end progression guild focused
            on PvE excellence, Mythic raiding, achievement hunting, mount
            farming, PvP domination, and building a respected community where
            every member matters.
          </p>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="bg-black/50 border border-blue-900/40 rounded-3xl p-10 backdrop-blur-sm">

            <h2 className="text-4xl font-bold text-blue-200 mb-6">
              About The Guild
            </h2>

            <div className="space-y-5 text-lg text-blue-100/85 leading-relaxed">

              <p>
                Glory Boys is built around precision gameplay, strategic
                coordination, and relentless improvement. We strive for
                perfection in every raid encounter while maintaining a strong,
                welcoming environment for both veterans and ambitious players.
              </p>

              <p>
                Outside of progression raiding, our guild actively organizes:
              </p>

              <ul className="list-disc list-inside space-y-2 text-blue-100/80">
                <li>Achievement Farming Runs</li>
                <li>Rare Mount Farming</li>
                <li>Pet & Toy Collection Events</li>
                <li>Legacy Raid Clears</li>
                <li>Mythic+ Push Groups</li>
                <li>Rated Battlegrounds & Arena Teams</li>
                <li>Community Help For New Players</li>
              </ul>

              <p>
                We believe a guild should feel like a family — competitive when
                needed, supportive always.
              </p>

            </div>
          </div>
        </section>

        {/* RECRUITMENT */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                icon: "🛡️",
                role: "Tanks",
                desc: "Fearless frontliners with leadership mentality and encounter awareness."
              },
              {
                icon: "✨",
                role: "Healers",
                desc: "Focused support players capable of handling intense Mythic pressure."
              },
              {
                icon: "⚔️",
                role: "DPS",
                desc: "High-performance damage dealers dedicated to optimization and mechanics."
              }
            ].map((role) => (
              <div
                key={role.role}
                className="bg-black/50 border border-red-900/40 rounded-3xl p-8 text-center backdrop-blur-sm"
              >
                <div className="text-5xl mb-4">{role.icon}</div>

                <h3 className="text-3xl font-bold text-red-200 mb-3">
                  {role.role}
                </h3>

                <p className="text-blue-100/80 text-lg leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* RAID PROGRESSION */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-5xl font-black text-center text-blue-200 mb-12">
            Raid Progression
          </h2>

          <div className="space-y-10">

            {expansions.map((expansion) => (
              <div
                key={expansion.expansion}
                className="bg-black/50 border border-blue-900/40 rounded-3xl overflow-hidden backdrop-blur-sm"
              >

                {/* EXPANSION HEADER */}
                <div className="bg-gradient-to-r from-red-950/80 via-black to-blue-950/80 px-8 py-5 border-b border-blue-900/40">
                  <h3 className="text-3xl font-black tracking-wide text-blue-100">
                    {expansion.expansion}
                  </h3>
                </div>

                {/* RAID LIST */}
                <div className="p-6 space-y-4">

                  {expansion.raids.map((raid) => (
                    <div
                      key={raid}
                      className="bg-black/40 border border-blue-900/20 rounded-2xl p-5"
                    >

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>
                          <div className="text-2xl font-bold text-blue-100">
                            {raid}
                          </div>

                          <div className="text-blue-200/70 mt-1">
                            Full Guild Clear Completed
                          </div>
                        </div>

                        {/* DIFFICULTIES */}
                        <div className="flex flex-wrap gap-3">

                          <div className="px-4 py-2 rounded-xl bg-green-900/60 border border-green-500/40 text-green-200 font-bold">
                            Normal 100%
                          </div>

                          <div className="px-4 py-2 rounded-xl bg-yellow-900/60 border border-yellow-500/40 text-yellow-200 font-bold">
                            Heroic 100%
                          </div>

                          <div className="px-4 py-2 rounded-xl bg-red-900/60 border border-red-500/40 text-red-200 font-bold">
                            Mythic 100%
                          </div>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* FOOTER */}
        <section className="text-center px-6 pb-24 pt-10">

          <h2 className="text-5xl font-black text-red-200 mb-6">
            Join The Brotherhood
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-blue-100/85 leading-relaxed">
            Glory Boys is more than a guild — it is a symbol of discipline,
            loyalty, progression, and ambition. Whether pushing Mythic content,
            farming rare collectibles, or helping fellow adventurers, we face
            Azeroth together as one united force.
          </p>

          <div className="mt-10 inline-block px-10 py-4 rounded-2xl border border-red-800/60 bg-black/50 text-red-100 text-xl font-bold shadow-[0_0_30px_rgba(120,0,0,0.5)]">
            Recruitment Open — Tanks, Healers & DPS Wanted
          </div>

        </section>

      </div>
    </div>
  )
}
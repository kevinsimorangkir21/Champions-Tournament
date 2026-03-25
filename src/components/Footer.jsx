export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] text-white/70 pt-16 pb-10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">
        
        {/* 🔹 Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt="Tournament" className="w-9 h-9" />
            <span className="text-lg font-semibold text-white">
              TOURNAMENT
            </span>
          </div>

          <p className="text-sm leading-relaxed">
            The ultimate esports competition platform. Compete with top teams,
            climb the bracket, and claim your victory.
          </p>

          <p className="text-sm mt-4 text-white/40">
            © 2026 Tournament. All rights reserved.
          </p>
        </div>

        {/* 🔹 Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Schedule", "Teams", "Event", "News"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Follow Us
          </h4>
          <p className="text-sm mb-4 text-white/50">
            Stay updated with the latest matches and announcements.
          </p>

          <div className="flex gap-4">
            {[
              { icon: "twitter", url: "#" },
              { icon: "instagram", url: "#" },
              { icon: "youtube", url: "#" },
              { icon: "twitch", url: "#" },
            ].map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-9 h-9 flex items-center justify-center
                  rounded-full border border-white/10
                  hover:bg-white/10 hover:text-white
                  transition-all duration-300
                "
              >
                <i className={`bi bi-${icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔻 Bottom */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/40">
        Built for competitive gaming ⚔️
      </div>

      {/* 🔥 Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
    </footer>
  );
}
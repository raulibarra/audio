export const gamesData = [
    {
        id: "project_00",
        title: "Degen Rivals",
        subtitle: "Multiplayer PVP Vehicle Combat Game | Unity & C# | WebGL",
        description: "Led audio implementation and core multiplayer gameplay systems. Owned complete features end-to-end, from sound design to gameplay programming.",
        techStack: ["Unity 6", "C#", "Photon Quantum", "WebGL"],
        metadata: [
            { label: "Role", value: "Technical Sound Designer & Gameplay Programmer" },
            { label: "Company", value: "Tomorrow Media / Tevaera" },
            { label: "Audio Tech", value: "Custom C# Manager, Unity Audio Mixer" }
        ],
        contributions: [
            {
                title: "Custom Audio Manager (C#)",
                challenge: "Needed a performant audio system for WebGL without middleware overhead.",
                solution: "Programmed a custom manager using Unity's Audio Mixer with object pooling, ducking, and Addressables integration."
            },
            {
                title: "Dynamic Vehicle Audio",
                challenge: "Realistic engine sounds required complex RPM modulation.",
                solution: "Engineered a system using RPM-driven pitch modulation and gear-switching logic linked to vehicle physics."
            },
            { title: "Sound Design", text: "Created 15+ weapon SFX and 10+ environmental effects with variations." },
            { title: "Multiplayer Gameplay", text: "Programmed networked vehicle handling, weapon systems, and player feedback with audio-visual sync." }
        ],
        media: [
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/SmWhDKrFvuw?si=r2JMQvpTMuH3rxCe" }
        ],
        technicalImages: [
            { caption: "Custom Audio Manager Script (C#)", src: "" },
            { caption: "Unity Audio Mixer Routing", src: "" }
        ],
        uniqueValue: "Dual audio + gameplay expertise eliminates programmer dependency and accelerates development."
    },
    {
        id: "project_01",
        title: "Power Rangers: Morphin Legends",
        subtitle: "Turn-Based RPG | Unity & C# | Mobile (iOS, Android)",
        description: "Led audio implementation for a turn-based RPG featuring iconic Power Rangers characters, creating dynamic sound systems and composing original music.",
        techStack: ["Unity", "C#", "Scriptable Objects", "Mobile"],
        metadata: [
            { label: "Role", value: "Technical Sound Designer & Senior Game Developer" },
            { label: "Company", value: "nWay / Globant" },
            { label: "Audio Tech", value: "Custom Impact System" }
        ],
        contributions: [
            {
                title: "Dynamic Impact System",
                challenge: "Combat felt repetitive with generic impact sounds.",
                solution: "Developed a matrix-based system selecting SFX based on attacker weapon vs. defender material (e.g., Sword vs. Metal)."
            },
            { title: "Music Composition", text: "Composed and implemented original soundtrack inspired by authentic 90's Power Rangers TV show style." },
            { title: "Gameplay Programming", text: "Contributed to core gameplay features as senior game developer." }
        ],
        media: [
            { type: "soundcloud", title: "🎵 Audio Demo Reel", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1914916004%3Fsecret_token%3Ds-05fAPX0Mws9&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/QYcHgdB5_II?si=Lez81MG7jLr5olPp" }
        ],
        technicalImages: [
            { caption: "Impact System Matrix (Scriptable Object)", src: "" }
        ],
        uniqueValue: "Combined audio design with gameplay programming to build intelligent audio systems that respond to game state without requiring middleware."
    },
    {
        id: "project_02",
        title: "Dolby Atmos Gaming Experience",
        subtitle: "FPS Demo Showcasing Spatial Audio | Unity & C# | Mobile",
        description: "Led game development for an official Dolby demo showcasing Dolby Atmos spatial audio capabilities across multiple gameplay scenarios.",
        techStack: ["Unity", "Wwise", "Dolby Atmos", "C#"],
        metadata: [
            { label: "Role", value: "Technical Sound Designer & Lead Developer" },
            { label: "Company", value: "Somatone Interactive" },
            { label: "Audio Tech", value: "Wwise + Dolby Atmos Plugin" }
        ],
        contributions: [
            {
                title: "Core Audio System Architecture",
                challenge: "Showcasing spatial audio on mobile devices.",
                solution: "Integrated Wwise with Dolby Atmos plugin for binaural rendering and object-based audio positioning."
            },
            {
                title: "Dynamic Footstep System",
                challenge: "Footsteps needed to match diverse ground materials accurately.",
                solution: "Developed context-aware system using mesh tags and raycasting to trigger material-specific Wwise switches."
            },
            { title: "Sound Design", text: "Designed and integrated audio for weapons, environments, footsteps, enemies, and UI with 3D spatial positioning." }
        ],
        media: [
            { type: "soundcloud", title: "🎧 Dolby Atmos Binaural SFXs (Use Headphones)", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925388608%3Fsecret_token%3Ds-VpMhsjQqXi9&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/8hthPXT1RqQ?si=65hZx-UtYXBarp9o" }
        ],
        technicalImages: [
            { caption: "Wwise Project Hierarchy", src: "" },
            { caption: "Dolby Atmos Profiler", src: "" }
        ],
        uniqueValue: "Expertise in spatial audio middleware (Wwise, Dolby Atmos) combined with gameplay programming enables end-to-end feature ownership."
    },
    {
        id: "project_03",
        title: "Crystal Corruption",
        subtitle: "Top-Down Co-op PvPvE | Unity & C# | PC",
        description: "Composed adaptive music and programmed a custom interactive music playback system supporting horizontal resequencing.",
        techStack: ["Unity", "C#", "Interactive Music"],
        metadata: [
            { label: "Role", value: "Technical Sound Designer (Freelance)" },
            { label: "Client", value: "Amber Wing" },
            { label: "Audio Tech", value: "Custom Interactive Music System" }
        ],
        contributions: [
            {
                title: "Custom Music System (C#)",
                challenge: "Needed complex music transitions without FMOD/Wwise.",
                solution: "Programmed a system supporting horizontal resequencing, beat-synced transitions, and cue points."
            },
            { title: "Advanced Audio Features", text: "Implemented seamless looping with reverb tail handling and custom editor inspector." },
            { title: "Music Composition", text: "Composed layered interactive music designed for modular resequencing." }
        ],
        media: [
            { type: "soundcloud", title: "🎵 Interactive Music & Sound Design", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1899041031&color=%233c4179&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/dKC6MHtdR4A?si=_TwJT1UQw7Vf8_4_" }
        ],
        technicalImages: [
            { caption: "Custom Music System Inspector", src: "" }
        ],
        uniqueValue: "Built custom interactive music system from scratch without middleware, demonstrating deep Unity audio architecture knowledge."
    },
    {
        id: "project_04",
        title: "Star Quest",
        subtitle: "Top-Down Space Shooter | Unity & C# | Mobile",
        description: "Architected core audio system for a mobile space shooter, integrating Wwise middleware with custom C# components.",
        techStack: ["Unity", "Wwise", "C#", "Mobile"],
        metadata: [
            { label: "Role", value: "Technical Sound Designer & Audio Programmer" },
            { label: "Company", value: "Somatone Interactive / Cosmic Games" },
            { label: "Audio Tech", value: "Wwise Integration + C# Wrappers" }
        ],
        contributions: [
            {
                title: "Audio System Architecture",
                challenge: "Bridge game code with Wwise efficiently.",
                solution: "Designed reusable C# wrapper components for weapon SFX and vehicle impact audio systems."
            },
            { title: "Custom Audio Components", text: "Programmed specialized audio components for context-aware weapon fire and dynamic vehicle collision SFX." }
        ],
        media: [
            { type: "soundcloud", title: "🎵 Demo SFXs", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925404421%3Fsecret_token%3Ds-jjgxXcEvoxj&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/BUwxfJFIewI?si=v384wWca_Bz2HLj0" }
        ],
        technicalImages: [
            { caption: "Wwise Profiler Session", src: "" }
        ],
        uniqueValue: "Experience with professional audio middleware (Wwise) integration, building custom C# wrapper systems."
    },
    {
        id: "project_05",
        title: "Ambersky 2088",
        subtitle: "VR Experience | FMOD | Location-Based Entertainment",
        description: "Managed FMOD audio project for a location-based VR experience, implementing 3D spatial audio with binaural rendering.",
        techStack: ["FMOD Studio", "VR", "Google Resonance"],
        metadata: [
            { label: "Role", value: "Technical Sound Designer" },
            { label: "Company", value: "Somatone Interactive / Sandbox VR" },
            { label: "Audio Tech", value: "FMOD + Google Resonance" }
        ],
        contributions: [
            { title: "FMOD Project Management", text: "Architected and maintained complete FMOD Studio project, establishing audio event structure and routing." },
            {
                title: "VR Spatial Audio Implementation",
                challenge: "Immersive 3D audio for room-scale VR.",
                solution: "Integrated Google Resonance Audio plugin for binaural spatialization and occlusion."
            }
        ],
        media: [
            { type: "soundcloud", title: "🎧 Binaural SFXs Sample (Use Headphones)", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925394578%3Fsecret_token%3Ds-T24canYY1kL&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Experience Footage", src: "https://www.youtube.com/embed/DCFdkyu7sNY?si=UUikNP8wdrWMnUK0" }
        ],
        technicalImages: [
            { caption: "FMOD Event Structure", src: "" }
        ],
        uniqueValue: "VR spatial audio expertise with FMOD middleware and binaural rendering plugins."
    }
];

export const personalData = [
    {
        id: "project00",
        title: "Echoes of the Forgotten Isle",
        subtitle: "Adaptive Music System & Biome-Based Spatial Audio",
        description: "Technical showcase demonstrating state-driven music systems, spatial audio optimization, and modular sound design architecture.",
        techStack: ["Unity", "Wwise", "C#", "Google Resonance"],
        metadata: [
            { label: "Role", value: "Full Stack Game Dev & Audio" },
            { label: "Audio Tech", value: "Wwise + Custom C# Systems" }
        ],
        contributions: [
            {
                title: "Architected state-driven adaptive music system",
                challenge: "Seamless transitions between exploration and combat.",
                solution: "Used Wwise with real-time modal shifts and C# event callbacks."
            },
            { title: "Engineered biome-based acoustic architecture", text: "Modular ambient soundscape layers with custom 3D positioning." },
            { title: "Integrated Google Resonance spatial audio", text: "Custom C# occlusion system for enemy positional cues." }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158166097&color=%23245c84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/3710091?dark=true" }
        ],
        technicalImages: [
            { caption: "Wwise Music Switch Container", src: "" },
            { caption: "C# Music State Manager", src: "" }
        ],
        uniqueValue: "Implemented end-to-end game development including gameplay mechanics and audio implementation.",
        soundcloudHeight: 166
    },
    {
        id: "project01",
        title: "Simple FPS & MetaSounds Demo",
        subtitle: "MetaSounds Audio Pipeline & Custom Node Architecture",
        description: "Technical showcase demonstrating Unreal Engine 5 MetaSounds custom node development and C++/Blueprint integration.",
        techStack: ["Unreal Engine 5", "MetaSounds", "C++", "Blueprints"],
        metadata: [
            { label: "Role", value: "Audio Programmer & Sound Designer" },
            { label: "Audio Tech", value: "MetaSounds + C++ Nodes" }
        ],
        contributions: [
            {
                title: "Developed custom MetaSound nodes in C++",
                challenge: "Native MetaSounds lacked specific random container functionality.",
                solution: "Wrote custom C++ nodes for procedural SFX playback with randomized pitch/volume."
            },
            { title: "Architected horizontal resequencing music system", text: "Tempo-synced transitions and state management using MetaSounds." },
            { title: "Integrated animation event notifiers", text: "Event-driven audio system linked to character animation state machine." }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528494316&color=%23384055&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/1784074?dark=true" }
        ],
        technicalImages: [
            { caption: "MetaSounds Graph", src: "" },
            { caption: "C++ Custom Node Code", src: "" }
        ],
        uniqueValue: "Built complete gameplay systems in C++ and Blueprints including enemy AI behavior and weapon mechanics.",
        soundcloudHeight: 166
    },
    {
        id: "project02",
        title: "Angry Bots - Interactive Audio Demo",
        subtitle: "Wwise Integration: RTPC-Driven Dynamic Mixing",
        description: "Technical showcase demonstrating professional Wwise middleware integration, RTPC-controlled adaptive music, and data-driven audio design.",
        techStack: ["Unity", "Wwise", "C#"],
        metadata: [
            { label: "Role", value: "Audio Programmer & Sound Designer" },
            { label: "Audio Tech", value: "Wwise RTPCs & Switches" }
        ],
        contributions: [
            { title: "Architected Wwise project structure", text: "RTPC-controlled dual-layer music system responding to kill count." },
            { title: "Engineered state-driven audio architecture", text: "Seamless music transitions using Wwise switches and game states." },
            { title: "Implemented spatial ambience system", text: "Inside/outside environment switching based on player position." }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293640167&color=%232d2c34&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/307450?dark=true" }
        ],
        technicalImages: [
            { caption: "Wwise RTPC Curve", src: "" }
        ],
        uniqueValue: "Migrated legacy Unity 4 project to Unity 2022 with modern C# architecture and Wwise integration.",
        soundcloudHeight: 166
    },
    {
        id: "project03",
        title: "Adaptive Music Game Demo",
        subtitle: "Vertical Resequencing System",
        description: "Technical showcase demonstrating vertical layering music system with real-time parameter tracking and Fabric middleware integration.",
        techStack: ["Unity", "Fabric", "C#"],
        metadata: [
            { label: "Role", value: "Audio Programmer & Sound Designer" },
            { label: "Audio Tech", value: "Fabric Middleware" }
        ],
        contributions: [
            { title: "Architected vertical resequencing music system", text: "Dual-layer composition responding to fire rate intensity." },
            { title: "Engineered gameplay-audio coupling mechanism", text: "Analyzed bullet burst frequency to drive music layer transitions." }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1883581733&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/286289?dark=true" }
        ],
        technicalImages: [],
        uniqueValue: "Demonstrated vertical resequencing as a complementary technique to horizontal resequencing.",
        soundcloudHeight: 166
    },
    {
        id: "project05",
        title: "Your Love as a Gift",
        subtitle: "Custom Audio Manager: Object Pooling",
        description: "Technical showcase demonstrating custom C# audio system architecture with object pooling and state-based music transitions.",
        techStack: ["Unity", "C#", "Custom Audio System"],
        metadata: [
            { label: "Role", value: "Audio Programmer & Sound Designer" },
            { label: "Audio Tech", value: "Custom C# Manager" }
        ],
        contributions: [
            {
                title: "Architected custom C# audio manager",
                challenge: "Performance constraints required minimal garbage collection.",
                solution: "Implemented AudioSource pooling with dynamic allocation."
            },
            { title: "Engineered state-driven adaptive music system", text: "Smooth cross-fade transitions between character-specific themes." }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528503268&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/577853?dark=true" }
        ],
        technicalImages: [
            { caption: "Object Pooling Script", src: "" }
        ],
        uniqueValue: "Built production-ready audio system from scratch without middleware.",
        soundcloudHeight: 166
    }
];

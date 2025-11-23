export const gamesData = [
    {
        id: "project_00",
        title: "Degen Rivals",
        subtitle: "Multiplayer PVP Vehicle Combat Game | Unity & C# | WebGL",
        description: "Led audio implementation and core multiplayer gameplay systems. Owned complete features end-to-end, from sound design to gameplay programming.",
        metadata: [
            { label: "Technical Sound Designer & Gameplay Programmer (Contractor)", value: "" },
            { label: "Company", value: "Tomorrow Media / Tevaera" },
            { label: "Tech Stack", value: "Unity 6.2, C#, Photon Quantum, ECS, Addressables" },
            { label: "Audio", value: "Custom C# manager with Unity Audio Mixer (no middleware)" }
        ],
        contributions: [
            { title: "Custom Audio Manager (C#)", text: "Programmed audio management system leveraging Unity's Audio Mixer with ducking effects, multi-variation SFX playback, pitch/volume randomization, object pooling, and Addressables integration for WebGL optimization." },
            { title: "Dynamic Vehicle Audio", text: "Engineered realistic engine simulation using RPM-driven pitch modulation and gear-switching logic." },
            { title: "Sound Design", text: "Created 15+ weapon SFX and 10+ environmental effects with variations." },
            { title: "Multiplayer Gameplay", text: "Programmed networked vehicle handling, weapon systems, and player feedback with audio-visual sync." }
        ],
        media: [
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/SmWhDKrFvuw?si=r2JMQvpTMuH3rxCe" }
        ],
        uniqueValue: "Dual audio + gameplay expertise eliminates programmer dependency and accelerates development."
    },
    {
        id: "project_01",
        title: "Power Rangers: Morphin Legends",
        subtitle: "Turn-Based RPG | Unity & C# | Mobile (iOS, Android)",
        description: "Led audio implementation for a turn-based RPG featuring iconic Power Rangers characters, creating dynamic sound systems and composing original music inspired by 90's TV show soundtracks.",
        metadata: [
            { label: "Technical Sound Designer & Senior Game Developer", value: "" },
            { label: "Company", value: "nWay / Globant" },
            { label: "Tech Stack", value: "Unity, C#, Scriptable Objects, Addressables" },
            { label: "Audio", value: "Custom impact system with dynamic material-based SFX selection" }
        ],
        contributions: [
            { title: "Dynamic Impact System", text: "Developed custom SFX system that dynamically selects sounds based on attacker's weapon type (sword, fists, etc.) and opponent's material properties (flesh, rock, metal), enhancing combat immersion and feedback clarity." },
            { title: "Music Composition", text: "Composed and implemented original soundtrack inspired by authentic 90's Power Rangers TV show style, creating nostalgic atmosphere while maintaining modern production quality." },
            { title: "Gameplay Programming", text: "Contributed to core gameplay features as senior game developer." }
        ],
        media: [
            { type: "soundcloud", title: "🎵 Audio Demo Reel", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1914916004%3Fsecret_token%3Ds-05fAPX0Mws9&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925383982%3Fsecret_token%3Ds-qMuMhMoBNMc&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/QYcHgdB5_II?si=Lez81MG7jLr5olPp" }
        ],
        uniqueValue: "Combined audio design with gameplay programming to build intelligent audio systems that respond to game state without requiring middleware."
    },
    {
        id: "project_02",
        title: "Dolby Atmos Gaming Experience",
        subtitle: "FPS Demo Showcasing Spatial Audio | Unity & C# | Mobile",
        description: "Led game development for an official Dolby demo showcasing Dolby Atmos spatial audio capabilities across multiple gameplay scenarios. Combined audio programming with gameplay development to create an immersive FPS experience.",
        metadata: [
            { label: "Technical Sound Designer & Game Developer (Lead)", value: "" },
            { label: "Company", value: "Somatone Interactive" },
            { label: "Tech Stack", value: "Unity, C#, Wwise, Dolby Atmos for Mobile Plugin" },
            { label: "Audio", value: "Dolby Atmos spatial audio with Wwise middleware integration" }
        ],
        contributions: [
            { title: "Core Audio System Architecture", text: "Designed and implemented audio framework integrating Wwise with Dolby Atmos spatialization for binaural rendering and object-based audio." },
            { title: "Dynamic Footstep System", text: "Developed context-aware footstep system using mesh tags and raycasting to trigger material-specific SFX based on surface properties." },
            { title: "Sound Design & Implementation", text: "Designed and integrated audio for weapons, environments, footsteps, enemies, and UI with 3D spatial positioning." },
            { title: "Gameplay Programming", text: "Developed core gameplay mechanics, enemy AI logic, and audio-responsive systems." }
        ],
        media: [
            { type: "soundcloud", title: "🎧 Dolby Atmos Binaural SFXs (Use Headphones)", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925388608%3Fsecret_token%3Ds-VpMhsjQqXi9&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/8hthPXT1RqQ?si=65hZx-UtYXBarp9o" }
        ],
        uniqueValue: "Expertise in spatial audio middleware (Wwise, Dolby Atmos) combined with gameplay programming enables end-to-end feature ownership for immersive audio experiences."
    },
    {
        id: "project_03",
        title: "Crystal Corruption",
        subtitle: "Top-Down Co-op PvPvE | Unity & C# | PC",
        description: "Composed adaptive music and programmed a custom interactive music playback system supporting horizontal resequencing with beat-synced transitions and dynamic BPM handling.",
        metadata: [
            { label: "Technical Sound Designer (Freelance)", value: "" },
            { label: "Client", value: "Amber Wing" },
            { label: "Tech Stack", value: "Unity, C#" },
            { label: "Audio", value: "Custom interactive music system with horizontal resequencing" }
        ],
        contributions: [
            { title: "Custom Music System (C#)", text: "Programmed interactive music component supporting horizontal resequencing with per-clip BPM and time signature configuration, enabling precise beat-synced transitions, cue point triggers, and cross-fade capabilities." },
            { title: "Advanced Audio Features", text: "Implemented seamless looping with reverb tail handling, beat-synced segment transitions, and custom editor inspector displaying real-time beat/section/time data for sound designers." },
            { title: "Music Composition", text: "Composed layered interactive music designed for modular resequencing and dynamic gameplay intensity shifts." },
            { title: "Sound Design", text: "Designed and implemented character ability sound effects integrated with the custom audio system." }
        ],
        media: [
            { type: "soundcloud", title: "🎵 Interactive Music & Sound Design", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1899041031&color=%233c4179&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true" },
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1946966639&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/dKC6MHtdR4A?si=_TwJT1UQw7Vf8_4_" }
        ],
        uniqueValue: "Built custom interactive music system from scratch without middleware, demonstrating deep Unity audio architecture knowledge and C# audio programming expertise."
    },
    {
        id: "project_04",
        title: "Star Quest",
        subtitle: "Top-Down Space Shooter | Unity & C# | Mobile (iOS, Android)",
        description: "Architected core audio system for a mobile space shooter, integrating Wwise middleware with custom C# components for dynamic weapon and vehicle audio.",
        metadata: [
            { label: "Technical Sound Designer & Audio Programmer", value: "" },
            { label: "Company", value: "Somatone Interactive / Cosmic Games" },
            { label: "Tech Stack", value: "Unity, C#, Wwise" },
            { label: "Audio", value: "Wwise middleware integration with custom C# wrapper systems" }
        ],
        contributions: [
            { title: "Audio System Architecture", text: "Designed and implemented core audio framework integrating Wwise middleware with Unity, creating reusable C# wrapper components for weapon SFX and vehicle impact audio systems." },
            { title: "Custom Audio Components", text: "Programmed specialized audio components for context-aware weapon fire and dynamic vehicle collision SFX with intensity-based triggering." },
            { title: "Sound Design & Implementation", text: "Designed and integrated audio for multiple spaceship types, weapon systems, and environmental effects optimized for mobile performance." }
        ],
        media: [
            { type: "soundcloud", title: "🎵 Demo SFXs", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925404421%3Fsecret_token%3Ds-jjgxXcEvoxj&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Demo Reel", src: "https://www.youtube.com/embed/BUwxfJFIewI?si=v384wWca_Bz2HLj0" }
        ],
        uniqueValue: "Experience with professional audio middleware (Wwise) integration, building custom C# wrapper systems that bridge game code with audio design tools."
    },
    {
        id: "project_05",
        title: "Ambersky 2088",
        subtitle: "VR Experience | FMOD | Location-Based Entertainment",
        description: "Managed FMOD audio project for a location-based VR experience, implementing 3D spatial audio with binaural rendering for immersive creature encounters.",
        metadata: [
            { label: "Technical Sound Designer", value: "" },
            { label: "Company", value: "Somatone Interactive / Sandbox VR" },
            { label: "Tech Stack", value: "FMOD Studio, Google Resonance Audio" },
            { label: "Audio", value: "VR spatial audio with binaural spatialization (Google Resonance)" }
        ],
        contributions: [
            { title: "FMOD Project Management", text: "Architected and maintained complete FMOD Studio project, establishing audio event structure, bus routing, and integration pipeline for team collaboration." },
            { title: "VR Spatial Audio Implementation", text: "Integrated Google Resonance Audio plugin for binaural spatialization, configuring 3D positioning, distance attenuation, and environmental occlusion for immersive VR audio." },
            { title: "Sound Design", text: "Designed and implemented creature movement, attack sounds, and environmental audio with spatial positioning optimized for room-scale VR experiences." },
            { title: "Audio Pipeline", text: "Managed asset integration from multiple team members, maintaining consistent naming conventions and event structure." }
        ],
        media: [
            { type: "soundcloud", title: "🎧 Binaural SFXs Sample (Use Headphones)", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925394578%3Fsecret_token%3Ds-T24canYY1kL&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "youtube", title: "🎮 Experience Footage", src: "https://www.youtube.com/embed/DCFdkyu7sNY?si=UUikNP8wdrWMnUK0" }
        ],
        uniqueValue: "VR spatial audio expertise with FMOD middleware and binaural rendering plugins, delivering immersive location-based entertainment experiences."
    }
];

export const personalData = [
    {
        id: "project00",
        title: "Echoes of the Forgotten Isle",
        subtitle: "Adaptive Music System & Biome-Based Spatial Audio Architecture",
        description: "Technical showcase demonstrating state-driven music systems, spatial audio optimization, and modular sound design architecture for open-world environments.",
        metadata: [
            { label: "Audio / Gameplay Programmer, Sound Designer, Composer", value: "" },
            { label: "Engine & Tools", value: "Unity, C#, Wwise, Google Resonance Audio" },
            { label: "Genre", value: "3D Third-Person Action/Adventure" },
            { label: "Audio Approach", value: "State-driven adaptive music, spatial audio, biome-based ambiences" }
        ],
        contributions: [
            { title: "Architected state-driven adaptive music system", text: "using Wwise with real-time modal shifts and seamless exploration-to-combat transitions, implementing music state callbacks via C# event system" },
            { title: "Engineered biome-based acoustic architecture", text: "for 5 distinct environments with modular ambient soundscape layers, implementing custom 3D positioning for large complex areas (rivers, waterfalls) more efficient and controllable than AkAmbient Large Mode" },
            { title: "Integrated Google Resonance spatial audio", text: "with custom C# occlusion system for enemy positional cues, enhancing directional awareness and environmental reverberation" },
            { title: "Designed modular sound system", text: "for enemy AI (footsteps, vocalizations, attacks) with randomized variations and pitch modulation, reducing perceived repetition while maintaining memory efficiency" }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158166097&color=%23245c84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/3710091?dark=true" } // Note: Itch.io embeds might need special handling or just use iframe
        ],
        uniqueValue: "Implemented end-to-end game development including gameplay mechanics, AI behavior trees, level design, and camera systems alongside audio implementation - demonstrating full-stack technical capability and cross-discipline integration for seamless audio-gameplay synchronization.",
        soundcloudHeight: 166
    },
    {
        id: "project01",
        title: "Simple FPS & MetaSounds Demo",
        subtitle: "MetaSounds Audio Pipeline: Custom Node Architecture & Event-Driven Implementation",
        description: "Technical showcase demonstrating Unreal Engine 5 MetaSounds custom node development, procedural audio systems, and C++/Blueprint integration for real-time audio control.",
        metadata: [
            { label: "Audio / Gameplay Programmer, Sound Designer, Composer", value: "" },
            { label: "Engine & Tools", value: "Unreal Engine 5, C++, Blueprints, MetaSounds" },
            { label: "Genre", value: "3D First-Person Shooter" },
            { label: "Audio Approach", value: "Custom MetaSounds nodes, horizontal resequencing, event-driven triggers" }
        ],
        contributions: [
            { title: "Developed custom MetaSound nodes in C++", text: "for procedural SFX playback with randomized pitch/volume variation, replicating middleware functionality (random containers) directly in Unreal's native audio engine" },
            { title: "Architected horizontal resequencing interactive music system", text: "using MetaSounds with tempo-synced transitions and state management, implementing beat-accurate crossfades synchronized to gameplay events" },
            { title: "Integrated animation event notifiers", text: "with MetaSounds triggers for footstep timing, creating event-driven audio system linked to character animation state machine for precise synchronization" },
            { title: "Implemented dynamic mixing architecture", text: "using Unreal's Sound Class system with custom ducking/prioritization logic, optimizing voice allocation and CPU performance for combat scenarios" }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528494316&color=%23384055&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/1784074?dark=true" }
        ],
        uniqueValue: "Built complete gameplay systems in C++ and Blueprints including enemy AI behavior, weapon mechanics, and UI systems - demonstrating proficiency in Unreal Engine's architecture and the ability to integrate audio systems deeply with gameplay code for optimal performance and synchronization.",
        soundcloudHeight: 166
    },
    {
        id: "project02",
        title: "Angry Bots - Interactive Audio Demo",
        subtitle: "Wwise Integration: RTPC-Driven Dynamic Mixing & Layered Music System",
        description: "Technical showcase demonstrating professional Wwise middleware integration, RTPC-controlled adaptive music, and data-driven audio design for Unity projects.",
        metadata: [
            { label: "Audio / Gameplay Programmer, Sound Designer, Composer", value: "" },
            { label: "Engine & Tools", value: "Unity 2022 (upgraded from Unity 4), C#, Wwise" },
            { label: "Genre", value: "Top-Down Shooter" },
            { label: "Audio Approach", value: "RTPC-driven layering, state-based transitions, spatial ambience" }
        ],
        contributions: [
            { title: "Architected Wwise project structure", text: "with RTPC-controlled dual-layer music system responding to kill count, implementing smooth parameter interpolation and beat-synced transitions across 4 gameplay sections" },
            { title: "Engineered state-driven audio architecture", text: "using Wwise switches and game states for seamless music transitions (including rhythm changes in final section), demonstrating advanced middleware configuration and callback integration" },
            { title: "Implemented spatial ambience system", text: "with inside/outside environment switching based on player position, using Wwise's 3D positioning and attenuation curves for realistic acoustic transitions" },
            { title: "Designed randomized SFX system", text: "with multi-variation containers and pitch modulation for weapons, enemies, and environmental sounds, optimizing asset reuse and reducing memory footprint while maintaining audio variety" }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293640167&color=%232d2c34&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/307450?dark=true" }
        ],
        uniqueValue: "Migrated legacy Unity 4 project (UnityScript) to Unity 2022 with modern C# architecture and Wwise integration - demonstrating expertise in codebase modernization, version compatibility management, and middleware integration for legacy projects.",
        soundcloudHeight: 166
    },
    {
        id: "project03",
        title: "Adaptive Music Game Demo",
        subtitle: "Vertical Resequencing System: Real-Time Gameplay-Responsive Music Architecture",
        description: "Technical showcase demonstrating vertical layering music system with real-time parameter tracking and Fabric middleware integration for interactive composition.",
        metadata: [
            { label: "Audio / Gameplay Programmer, Sound Designer, Composer", value: "" },
            { label: "Engine & Tools", value: "Unity, C#, Fabric Audio Middleware" },
            { label: "Genre", value: "2D Survival Shooter" },
            { label: "Audio Approach", value: "Vertical resequencing, real-time parameter control, gameplay-reactive music" }
        ],
        contributions: [
            { title: "Architected vertical resequencing music system", text: "with dual-layer composition responding to fire rate intensity, implementing real-time parameter tracking via C# gameplay event system integrated with Fabric middleware" },
            { title: "Engineered gameplay-audio coupling mechanism", text: "analyzing bullet burst frequency to drive music layer transitions, demonstrating data-driven audio design linked to player behavior metrics" },
            { title: "Integrated Fabric middleware pipeline", text: "for interactive music and SFX playback, configuring parameter bindings and transition logic for seamless audio-gameplay synchronization" },
            { title: "Designed modular weapon and character SFX system", text: "with randomized variations to enhance immersion and reduce repetition, optimizing asset management within Fabric's event-driven architecture" }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1883581733&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/286289?dark=true" }
        ],
        uniqueValue: "Demonstrated vertical resequencing as a complementary technique to horizontal resequencing (showcased in other projects), proving versatility in adaptive music implementation strategies and middleware-agnostic audio programming skills.",
        soundcloudHeight: 166
    },
    {
        id: "project05",
        title: "Your Love as a Gift",
        subtitle: "Custom Audio Manager: Object Pooling & Event-Driven Architecture",
        description: "Technical showcase demonstrating custom C# audio system architecture with object pooling, state-based music transitions, and modular component design without middleware dependencies.",
        metadata: [
            { label: "Audio / Gameplay Programmer, Sound Designer, Composer", value: "" },
            { label: "Engine & Tools", value: "Unity, C# (Custom Audio System)" },
            { label: "Genre", value: "2D Interactive Experience" },
            { label: "Audio Approach", value: "Custom audio manager, object pooling, state-driven transitions" }
        ],
        contributions: [
            { title: "Architected custom C# audio manager", text: "implementing AudioSource pooling with dynamic allocation for performance optimization, reducing instantiation overhead and garbage collection spikes during runtime" },
            { title: "Engineered state-driven adaptive music system", text: "with smooth cross-fade transitions between character-specific themes, implementing custom fade curves and music callback events without middleware dependencies" },
            { title: "Designed modular music composition architecture", text: "with shared melodic motifs across themes (major scale) except zombie character (minor scale), demonstrating data-driven compositional approach for scalable audio variety" },
            { title: "Implemented retro-inspired chiptune SFX pipeline", text: "with optimized waveform synthesis, showcasing procedural audio design and asset efficiency for nostalgic game aesthetics" }
        ],
        media: [
            { type: "soundcloud", title: "", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528503268&color=%233c4179&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" },
            { type: "itch", title: "", src: "https://itch.io/embed/577853?dark=true" }
        ],
        uniqueValue: "Built production-ready audio system from scratch without middleware, demonstrating deep understanding of Unity's audio architecture, memory management best practices, and the ability to create scalable audio solutions for projects with platform or technical constraints.",
        soundcloudHeight: 166
    }
];

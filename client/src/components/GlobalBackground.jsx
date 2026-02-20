export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-10] pointer-events-none" aria-hidden="true">
            {/* 1. Base: Deep navy instead of pure black */}
            <div className="absolute inset-0 bg-[#050510]"></div>

            {/* 2. Radial Gradient Spotlights */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.08)_0%,transparent_70%)]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,0,255,0.06)_0%,transparent_70%)]"></div>
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.04)_0%,transparent_70%)]"></div>

            {/* 3. Refined Dot Grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-[0.35]"></div>

            {/* 4. Noise Texture Overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>

            {/* 5. Top vignette (fades into content) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,122,255,0.06),transparent)]"></div>
        </div>
    );
}

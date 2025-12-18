import React, { useEffect, useRef, useState } from "react";

// BirthdayExperience.jsx // Single-file React component (Tailwind CSS recommended) that implements // a mobile-friendly, visually rich birthday greeting flow. // Save this file in a React app (Create React App or Next.js) and import it // into a route or page. Tailwind CSS classes are used for styling but // plain CSS fallbacks are included so it still looks good without Tailwind.

export default function BirthdayExperience() { const [stage, setStage] = useState(0); // stage: 0 = landing, 1 = excited->greeting intro, 2 = greeting with "thanks", // 3 = interactive decorations screen, 4 = cake & cut, 5 = final card

const [glow, setGlow] = useState(false); const [decorations, setDecorations] = useState(false); const [showCake, setShowCake] = useState(false); const [cakeCut, setCakeCut] = useState(false); const confettiRef = useRef(null);

useEffect(() => { // small auto-focus for accessibility when a new stage opens const id = setTimeout(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, 50); return () => clearTimeout(id); }, [stage]);

useEffect(() => { // Start confetti effect when decorations toggle on if (decorations) spawnConfetti(); }, [decorations]);

function spawnConfetti() { const el = confettiRef.current; if (!el) return; // create colorful confetti pieces for (let i = 0; i < 30; i++) { const piece = document.createElement("span"); piece.className = "confetti-piece"; piece.style.left = ${Math.random() * 100}%; piece.style.background = hsl(${Math.floor(Math.random() * 360)}, 85%, 60%); piece.style.transform = rotate(${Math.random() * 360}deg); el.appendChild(piece); // remove later setTimeout(() => piece.remove(), 4500 + Math.random() * 2000); } }

return ( <div className="min-h-screen w-full bg-gradient-to-b from-purple-900 via-indigo-800 to-pink-700 text-white flex items-center justify-center p-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}> {/* container */} <div className="max-w-xl w-full rounded-2xl bg-black/20 backdrop-blur-md shadow-2xl p-6 sm:p-8">

{/* Landing */}
    {stage === 0 && (
      <section className="text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">Why just a single text message?</h1>
        <p className="mt-4 text-sm sm:text-base opacity-90">Here's something special for you — swipe in or tap the button below to begin ✨</p>
        <button
          className="mt-8 w-48 mx-auto block rounded-full py-3 px-6 font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg transform active:scale-95"
          onClick={() => setStage(1)}
          aria-label="I am excited — start"
        >
          I am excited
        </button>
      </section>
    )}

    {/* Greeting intro (female friend) */}
    {stage === 1 && (
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Happy Birthday, beautiful friend 🎉</h2>
        <p className="mt-4 text-sm sm:text-base opacity-90">Today is all about you — here's a little celebration made with care and lots of love.</p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            className="rounded-full px-6 py-3 bg-rose-500 text-white font-semibold shadow-lg active:scale-95"
            onClick={() => setStage(2)}
            aria-label="Open greeting"
          >
            Open Greeting
          </button>
          <button
            className="rounded-full px-4 py-3 bg-transparent border border-white/30 text-white/90"
            onClick={() => setStage(0)}
            aria-label="Go back"
          >
            Back
          </button>
        </div>
      </section>
    )}

    {/* Greeting with THANKS button */}
    {stage === 2 && (
      <section className="text-center">
        <div className="mx-auto w-40 h-40 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center shadow-2xl transform -translate-y-2">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 21s-6.716-4.5-8.5-8.667C2.5 8.5 6.14 4.5 12 4.5s9.5 4 8.5 7.833C18.716 16.5 12 21 12 21z" fill="#fff" opacity="0.92" />
          </svg>
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold">To the one who brightens our days ✨</h3>
        <p className="mt-2 text-sm sm:text-base opacity-90 px-4">May your year ahead be full of joy, bold dreams, and gentle surprises.</p>

        <button
          className="mt-8 rounded-full px-6 py-3 bg-emerald-400 text-black font-semibold shadow-lg active:scale-95"
          onClick={() => setStage(3)}
          aria-label="Thanks — continue to celebration"
        >
          Thanks
        </button>
      </section>
    )}

    {/* Interactive decorations screen */}
    {stage === 3 && (
      <section className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold">Let's make this moment magical ✨</h3>
        <p className="mt-2 text-sm sm:text-base opacity-90">Tap the buttons below — light, decorations, or cake — and enjoy the surprises.</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => { setGlow(g => !g); }}
            className={`rounded-full px-5 py-3 font-semibold text-black shadow-lg ${glow ? 'bg-yellow-300' : 'bg-yellow-400'}`}
            aria-pressed={glow}
          >
            {glow ? 'Lights On' : 'Light Up'}
          </button>

          <button
            onClick={() => { setDecorations(d => !d); }}
            className={`rounded-full px-5 py-3 font-semibold shadow-lg ${decorations ? 'bg-pink-300 text-black' : 'bg-pink-500 text-white'}`}
            aria-pressed={decorations}
          >
            {decorations ? 'Hide Decorations' : 'Decorations'}
          </button>

          <button
            onClick={() => { setShowCake(true); setStage(4); }}
            className="rounded-full px-5 py-3 bg-rose-600 text-white font-semibold shadow-lg"
          >
            Cake
          </button>
        </div>

        {/* visual area */}
        <div className="mt-6 relative h-60 sm:h-72 w-full flex items-center justify-center">
          {/* Glow overlay */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity ${glow ? 'opacity-90' : 'opacity-0'}`}>
            <div className="w-full h-full" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,240,200,0.18), transparent 8%), radial-gradient(circle at 80% 80%, rgba(255,200,255,0.12), transparent 12%)' }} />
          </div>

          {/* Decorations (confetti) */}
          <div ref={confettiRef} className="pointer-events-none absolute inset-0 z-10"></div>

          {/* center decorative vignette */}
          <div className="relative z-20 w-44 sm:w-56 h-44 sm:h-56 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
            <div>
              <h4 className="text-lg font-bold">Celebrate!</h4>
              <p className="text-xs opacity-90 mt-1">Tap buttons above to change the scene</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="text-sm opacity-90" onClick={() => setStage(2)}>Back</button>
          <button className="text-sm opacity-90" onClick={() => setStage(5)}>Skip to Card</button>
        </div>
      </section>
    )}

    {/* Cake & cut stage */}
    {stage === 4 && (
      <section className="text-center relative">
        <h3 className="text-xl sm:text-2xl font-bold">Make a wish & slice the cake 🎂</h3>
        <p className="mt-2 text-sm sm:text-base opacity-90">Tap the knife to cut the cake — a small animation will play for the magic moment.</p>

        <div className="mt-6 flex flex-col items-center gap-6">
          <div className="relative w-56 h-48 flex items-end justify-center">
            {/* cake base */}
            <div className={`cake ${cakeCut ? 'cut' : ''}`} style={{ zIndex: 10 }}>
              <div className="cake-top" />
              <div className="cake-layer" />
            </div>

            {/* knife */}
            <button
              aria-label="Cut cake"
              onClick={() => { if (!cakeCut) { setCakeCut(true); setTimeout(() => setStage(5), 2200); } }}
              className="absolute -top-6 right-2 bg-white/10 rounded-full p-2 shadow-md active:scale-95"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M2 22l12-12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 4l6 6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="text-sm opacity-90">Tip: Tap the knife once to cut. You'll be taken to the final card.</div>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="text-sm opacity-90" onClick={() => setStage(3)}>Back</button>
        </div>
      </section>
    )}

    {/* Final card — full-screen feeling but the card centered */}
    {stage === 5 && (
      <section className="text-center relative">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.03), transparent 5%), radial-gradient(circle at 90% 90%, rgba(0,0,0,0.12), transparent 20%)' }} />
        </div>

        <div className="mx-auto max-w-md w-full">
          <div className="rounded-2xl bg-gradient-to-br from-white/95 to-white/80 text-black p-6 sm:p-10 shadow-2xl transform transition-all" style={{ backdropFilter: 'saturate(120%) blur(6px)' }}>
            <h2 className="text-2xl font-extrabold">A Beautiful Future Awaits ✨</h2>
            <p className="mt-4 text-sm leading-relaxed">Dearest friend — on your special day I wish you endless laughter, steady strength, and a heart that keeps finding wonders. May the path ahead be bright and filled with brave choices, soft comforts, and friendships that last a lifetime.</p>

            <ul className="text-left mt-4 space-y-2 text-sm">
              <li>• May hope guide your mornings.</li>
              <li>• May courage meet you in hard choices.</li>
              <li>• May joy be the soundtrack of this year.</li>
            </ul>

            <div className="mt-6 flex justify-center">
              <button className="rounded-full px-5 py-3 bg-indigo-600 text-white font-semibold" onClick={() => setStage(0)}>Celebrate Again</button>
            </div>
          </div>
        </div>
      </section>
    )}

  </div>

  {/* Styles — minimal CSS in JS for key visuals to avoid external files */}
  <style>{`
    .confetti-piece{
      position: absolute;
      top: -10px;
      width: 8px;
      height: 14px;
      opacity: 0.95;
      border-radius: 2px;
      animation: confetti-fall 3.5s ease-in forwards;
    }
    @keyframes confetti-fall{
      0%{ transform: translateY(-20px) rotate(0deg); opacity: 1 }
      100%{ transform: translateY(260px) rotate(720deg); opacity: 0 }
    }

    /* cake visuals */
    .cake{ width: 200px; height: 120px; display:flex; align-items:center; justify-content:center; position:relative; }
    .cake-top{ position:absolute; top:14px; width:160px; height:36px; border-radius:20px; background:linear-gradient(180deg,#ffe9f0,#ffb3d1); box-shadow:0 6px 12px rgba(0,0,0,0.18); }
    .cake-layer{ position:absolute; bottom:0; width:180px; height:80px; border-radius:20px; background:linear-gradient(180deg,#ff9ab3,#ff6f98); box-shadow:0 8px 18px rgba(0,0,0,0.2); }

    .cake.cut .cake-top{ transform-origin:left center; animation: CakeTopSplit 1.6s forwards; }
    .cake.cut .cake-layer{ transform-origin:left center; animation: CakeLayerSplit 1.6s forwards; }

    @keyframes CakeTopSplit{
      0%{ transform: translateX(0) rotate(0deg); }
      50%{ transform: translateX(-12px) rotate(-4deg); }
      100%{ transform: translateX(-90px) rotate(-12deg); opacity:0; }
    }
    @keyframes CakeLayerSplit{
      0%{ transform: translateX(0) rotate(0deg); }
      50%{ transform: translateX(-10px) rotate(-2deg); }
      100%{ transform: translateX(-88px) rotate(-10deg); opacity:0; }
    }

    /* small responsive fallback for non-tailwind users */
    @media (max-width: 640px){
      .max-w-xl{ padding: 18px !important; }
    }
  `}</style>

  {/* extra decorative floating orbs when glow is on */}
  {glow && (
    <div className="pointer-events-none absolute inset-0 -z-20">
      <div style={{ position: 'absolute', width: 140, height: 140, borderRadius: 9999, background: 'rgba(255,200,120,0.06)', left: '6%', top: '6%', filter: 'blur(36px)' }} />
      <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: 9999, background: 'rgba(160,120,255,0.05)', right: '6%', bottom: '8%', filter: 'blur(28px)' }} />
    </div>
  )}

</div>

); }

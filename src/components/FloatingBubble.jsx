// src/components/FloatingBubble.jsx - CLEAN VERSION
export default function FloatingBubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ?
      </button>
    </div>
  );
}

interface Props {
  /** Retained for API compatibility with ported slides. Ignored. */
  opacity?: number;
  /** Retained for API compatibility. Ignored. */
  dim?: number;
}

/**
 * Shared slide background — ONE engineering grid on the opaque #060606 canvas,
 * identical on every slide in the deck (Tether discipline: a single background,
 * everywhere). No glow, no vignette, no video — that drift is what broke the
 * deck's consistency. Matches the grid used by the cover and the openers.
 */
export function OrangeSphereBackground(_props: Props) {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  );
}

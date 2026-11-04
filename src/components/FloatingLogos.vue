<template>
  <div class="floating-bg" aria-hidden="true">

    <!-- Go Gopher -->
    <div class="fl" style="left:4%;top:14%;animation:fl-a 16s ease-in-out 0s infinite">
      <svg viewBox="0 0 60 66" width="52" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <ellipse cx="30" cy="38" rx="24" ry="20" style="fill:var(--surface)" />
        <ellipse cx="11" cy="24" rx="7" ry="9" style="fill:var(--surface)" />
        <ellipse cx="49" cy="24" rx="7" ry="9" style="fill:var(--surface)" />
        <ellipse cx="21" cy="33" rx="8" ry="9" style="fill:var(--surface)" />
        <ellipse cx="39" cy="33" rx="8" ry="9" style="fill:var(--surface)" />
        <circle cx="22" cy="35" r="3.5" style="fill:var(--ink)" stroke="none" />
        <circle cx="40" cy="35" r="3.5" style="fill:var(--ink)" stroke="none" />
        <ellipse cx="30" cy="48" rx="10" ry="7" style="fill:var(--surface)" />
        <circle cx="27" cy="47" r="2" style="fill:var(--ink)" stroke="none" />
        <circle cx="33" cy="47" r="2" style="fill:var(--ink)" stroke="none" />
        <rect x="26" y="53" width="4" height="7" rx="1.5" style="fill:var(--surface)" />
        <rect x="30" y="53" width="4" height="7" rx="1.5" style="fill:var(--surface)" />
      </svg>
    </div>

    <!-- GitHub Octocat -->
    <div class="fl" style="left:87%;top:9%;animation:fl-b 18s ease-in-out -5s infinite">
      <svg viewBox="0 0 60 66" width="46" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <circle cx="30" cy="28" r="22" style="fill:var(--surface)" />
        <path d="M14 13 Q10 3 18 7" />
        <path d="M46 13 Q50 3 42 7" />
        <circle cx="22" cy="26" r="3.5" style="fill:var(--ink)" stroke="none" />
        <circle cx="38" cy="26" r="3.5" style="fill:var(--ink)" stroke="none" />
        <path d="M22 36 Q30 42 38 36" />
        <path d="M14 48 Q6 52 10 60" />
        <path d="M22 52 Q22 60 16 64" />
        <path d="M30 54 L30 64" />
        <path d="M38 52 Q38 60 44 64" />
        <path d="M46 48 Q54 52 50 60" />
      </svg>
    </div>

    <!-- Terraform T-diamond -->
    <div class="fl" style="left:3%;top:50%;animation:fl-c 14s ease-in-out -8s infinite">
      <svg viewBox="0 0 50 58" width="42" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <path d="M25 3 L47 15 L47 43 L25 55 L3 43 L3 15 Z" style="fill:var(--surface)" />
        <line x1="13" y1="22" x2="37" y2="22" stroke-width="4" />
        <line x1="25" y1="22" x2="25" y2="44" stroke-width="4" />
      </svg>
    </div>

    <!-- Docker whale -->
    <div class="fl" style="left:88%;top:60%;animation:fl-d 20s ease-in-out -2s infinite">
      <svg viewBox="0 0 72 56" width="54" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <path d="M8 36 Q8 20 24 20 L50 20 Q63 20 63 32 Q63 44 50 44 L18 44 Q8 44 8 36 Z" style="fill:var(--surface)" />
        <path d="M57 34 Q68 24 70 36 Q72 46 62 42" style="fill:var(--surface)" />
        <path d="M23 20 Q21 10 25 6" />
        <path d="M18 19 Q14 8 18 4" />
        <rect x="22" y="22" width="11" height="9" rx="2" style="fill:var(--surface)" />
        <rect x="35" y="22" width="11" height="9" rx="2" style="fill:var(--surface)" />
        <circle cx="22" cy="35" r="2.5" style="fill:var(--ink)" stroke="none" />
      </svg>
    </div>

    <!-- Kubernetes steering wheel -->
    <div class="fl" style="left:83%;top:27%;animation:fl-e 17s ease-in-out -6s infinite">
      <svg viewBox="0 0 60 60" width="46" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" filter="url(#doodle)">
        <circle cx="30" cy="30" r="27" style="fill:var(--surface)" />
        <circle cx="30" cy="30" r="6" style="fill:var(--surface)" />
        <line x1="30" y1="3" x2="30" y2="24" />
        <line x1="51" y1="11" x2="39" y2="22" />
        <line x1="58" y1="34" x2="38" y2="31" />
        <line x1="47" y1="53" x2="35" y2="38" />
        <line x1="13" y1="53" x2="25" y2="38" />
        <line x1="2" y1="34" x2="22" y2="31" />
        <line x1="9" y1="11" x2="21" y2="22" />
      </svg>
    </div>

    <!-- TypeScript TS box -->
    <div class="fl" style="left:7%;top:72%;animation:fl-a 15s ease-in-out -10s infinite">
      <svg viewBox="0 0 60 60" width="44" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" filter="url(#doodle)">
        <rect x="4" y="4" width="52" height="52" rx="8" style="fill:var(--surface)" />
        <line x1="10" y1="25" x2="34" y2="25" stroke-width="4" />
        <line x1="22" y1="25" x2="22" y2="48" stroke-width="4" />
        <path d="M44 25 C37 25 37 36 44 36 C51 36 51 47 44 47" stroke-width="4" />
      </svg>
    </div>

    <!-- Vue.js V chevron -->
    <div class="fl" style="left:91%;top:42%;animation:fl-b 19s ease-in-out -3s infinite">
      <svg viewBox="0 0 60 54" width="40" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <path d="M2 4 L30 50 L58 4" />
        <path d="M14 4 L30 36 L46 4" />
      </svg>
    </div>

    <!-- Redis 3D cube -->
    <div class="fl" style="left:47%;top:7%;animation:fl-e 22s ease-in-out -14s infinite">
      <svg viewBox="0 0 56 54" width="40" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <path d="M28 2 L54 16 L28 30 L2 16 Z" style="fill:var(--surface)" />
        <path d="M54 16 L54 38 L28 52 L28 30 Z" style="fill:var(--surface)" />
        <path d="M2 16 L2 38 L28 52 L28 30 Z" style="fill:var(--surface)" />
      </svg>
    </div>

    <!-- GCP cloud -->
    <div class="fl" style="left:58%;top:78%;animation:fl-c 21s ease-in-out -9s infinite">
      <svg viewBox="0 0 72 54" width="52" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <path d="M18 40 Q5 40 5 30 Q5 20 16 18 Q18 8 28 8 Q35 2 44 6 Q52 2 56 10 Q66 10 66 22 Q70 40 58 40 Z" style="fill:var(--surface)" />
        <circle cx="22" cy="46" r="3" style="fill:var(--surface)" />
        <circle cx="32" cy="49" r="3" style="fill:var(--surface)" />
        <circle cx="42" cy="49" r="3" style="fill:var(--surface)" />
        <circle cx="52" cy="46" r="3" style="fill:var(--surface)" />
      </svg>
    </div>

    <!-- PostgreSQL elephant -->
    <div class="fl" style="left:76%;top:80%;animation:fl-d 16s ease-in-out -11s infinite">
      <svg viewBox="0 0 62 66" width="46" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#doodle)">
        <ellipse cx="34" cy="28" rx="22" ry="20" style="fill:var(--surface)" />
        <path d="M14 20 Q0 10 6 26 Q8 36 16 30" style="fill:var(--surface)" />
        <path d="M44 46 Q52 54 48 62 Q44 66 40 62" style="fill:var(--surface)" />
        <circle cx="26" cy="24" r="3" style="fill:var(--surface)" />
        <circle cx="26" cy="24" r="1.5" style="fill:var(--ink)" stroke="none" />
        <path d="M38 46 Q46 52 50 46" />
      </svg>
    </div>

  </div>
</template>

<style scoped>
.floating-bg {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.fl {
  position: absolute;
  opacity: 0.08;
}

@keyframes fl-a {
  0%,100% { transform: translate(0,0)      rotate(0deg); }
  25%      { transform: translate(18px,-24px) rotate(6deg); }
  50%      { transform: translate(8px,16px)   rotate(-4deg); }
  75%      { transform: translate(-18px,-6px) rotate(5deg); }
}

@keyframes fl-b {
  0%,100% { transform: translate(0,0)       rotate(0deg); }
  33%      { transform: translate(-22px,18px) rotate(-8deg); }
  66%      { transform: translate(14px,-20px) rotate(5deg); }
}

@keyframes fl-c {
  0%,100% { transform: translate(0,0)        rotate(0deg); }
  20%      { transform: translate(16px,22px)  rotate(8deg); }
  40%      { transform: translate(24px,-12px) rotate(-3deg); }
  60%      { transform: translate(-10px,20px) rotate(6deg); }
  80%      { transform: translate(-20px,-16px) rotate(-6deg); }
}

@keyframes fl-d {
  0%,100% { transform: translate(0,0)        rotate(0deg); }
  50%      { transform: translate(-16px,-22px) rotate(-9deg); }
}

@keyframes fl-e {
  0%,100% { transform: translate(0,0)       rotate(0deg); }
  30%      { transform: translate(22px,12px)  rotate(5deg); }
  70%      { transform: translate(-8px,-18px) rotate(-7deg); }
}

@media (prefers-reduced-motion: reduce) {
  .fl { animation: none !important; }
}
</style>

<template>
  <div class="floating-bg" aria-hidden="true">
    <div
      v-for="logo in logos"
      :key="logo.slug"
      class="fl"
      :style="logo.style"
    >
      <svg
        :viewBox="logo.viewBox || '0 0 24 24'"
        :width="logo.size"
        :height="logo.size"
        xmlns="http://www.w3.org/2000/svg"
        :fill="'#' + logo.hex"
        role="img"
      >
        <path :d="logo.path" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import {
  siGo,
  siGithub,
  siTypescript,
  siVuedotjs,
  siDocker,
  siKubernetes,
  siTerraform,
  siGooglecloud,
  siPostgresql,
  siRedis,
} from 'simple-icons'

const logos = [
  {
    slug: 'go',
    path: siGo.path,
    hex: siGo.hex,
    size: 52,
    style: 'left:4%;top:14%;animation:fl-a 16s ease-in-out 0s infinite',
  },
  {
    slug: 'github',
    path: siGithub.path,
    hex: 'var(--ink)',
    size: 46,
    style: 'left:87%;top:9%;animation:fl-b 18s ease-in-out -5s infinite',
  },
  {
    slug: 'terraform',
    path: siTerraform.path,
    hex: siTerraform.hex,
    size: 42,
    style: 'left:3%;top:50%;animation:fl-c 14s ease-in-out -8s infinite',
  },
  {
    slug: 'docker',
    path: siDocker.path,
    hex: siDocker.hex,
    size: 54,
    style: 'left:88%;top:60%;animation:fl-d 20s ease-in-out -2s infinite',
  },
  {
    slug: 'kubernetes',
    path: siKubernetes.path,
    hex: siKubernetes.hex,
    size: 46,
    style: 'left:83%;top:27%;animation:fl-e 17s ease-in-out -6s infinite',
  },
  {
    slug: 'typescript',
    path: siTypescript.path,
    hex: siTypescript.hex,
    size: 44,
    style: 'left:7%;top:72%;animation:fl-a 15s ease-in-out -10s infinite',
  },
  {
    slug: 'vue',
    path: siVuedotjs.path,
    hex: siVuedotjs.hex,
    size: 42,
    style: 'left:91%;top:42%;animation:fl-b 19s ease-in-out -3s infinite',
  },
  {
    slug: 'redis',
    path: siRedis.path,
    hex: siRedis.hex,
    size: 40,
    style: 'left:47%;top:7%;animation:fl-e 22s ease-in-out -14s infinite',
  },
  {
    slug: 'gcp',
    path: siGooglecloud.path,
    hex: siGooglecloud.hex,
    size: 50,
    style: 'left:58%;top:78%;animation:fl-c 21s ease-in-out -9s infinite',
  },
  {
    slug: 'postgresql',
    path: siPostgresql.path,
    hex: siPostgresql.hex,
    size: 46,
    style: 'left:76%;top:80%;animation:fl-d 16s ease-in-out -11s infinite',
  },
]
</script>

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
  opacity: 0.12;
}

@keyframes fl-a {
  0%,100% { transform: translate(0,0)       rotate(0deg); }
  25%      { transform: translate(18px,-24px) rotate(6deg); }
  50%      { transform: translate(8px,16px)   rotate(-4deg); }
  75%      { transform: translate(-18px,-6px) rotate(5deg); }
}

@keyframes fl-b {
  0%,100% { transform: translate(0,0)        rotate(0deg); }
  33%      { transform: translate(-22px,18px)  rotate(-8deg); }
  66%      { transform: translate(14px,-20px)  rotate(5deg); }
}

@keyframes fl-c {
  0%,100% { transform: translate(0,0)         rotate(0deg); }
  20%      { transform: translate(16px,22px)   rotate(8deg); }
  40%      { transform: translate(24px,-12px)  rotate(-3deg); }
  60%      { transform: translate(-10px,20px)  rotate(6deg); }
  80%      { transform: translate(-20px,-16px) rotate(-6deg); }
}

@keyframes fl-d {
  0%,100% { transform: translate(0,0)          rotate(0deg); }
  50%      { transform: translate(-16px,-22px)  rotate(-9deg); }
}

@keyframes fl-e {
  0%,100% { transform: translate(0,0)        rotate(0deg); }
  30%      { transform: translate(22px,12px)  rotate(5deg); }
  70%      { transform: translate(-8px,-18px) rotate(-7deg); }
}

@media (prefers-reduced-motion: reduce) {
  .fl { animation: none !important; }
}
</style>

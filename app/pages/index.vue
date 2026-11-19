<script setup lang="ts">
useSeoMeta({
  title: 'Home | Aldis Valdehueza',
  description: 'Meet Aldis S. Valdehueza, an aspiring full-stack web developer from Butuan City.'
})
</script>

<template>
  <div class="page-shell">
    <section class="grid items-center gap-12 pb-14 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-20">
      <div class="relative z-10">
        <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe5d3] bg-[#edf1e4] px-3.5 py-2 text-xs font-semibold text-[#52644d]">
          <span class="size-2 rounded-full bg-[#86a66f]"></span>
          Hello from Butuan City, Philippines
        </div>

        <p class="eyebrow mb-4">Aspiring full-stack web developer</p>
        <h1 class="max-w-2xl font-serif text-5xl font-medium leading-[1.03] tracking-[-0.045em] text-[#24352d] sm:text-6xl lg:text-7xl">
          Hi, I'm Aldis<span class="text-[#c36c4e]">.</span>
          <span class="mt-2 block text-[#76876e]">I make ideas work on the web.</span>
        </h1>
        <p class="mt-7 max-w-xl text-base leading-7 text-[#68746a] sm:text-lg sm:leading-8">
          I'm Aldis S. Valdehueza, an IT student who enjoys turning thoughtful ideas into useful digital experiences. I'm learning, building, and finding my way across the full stack.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <NuxtLink to="/profile" class="inline-flex items-center gap-2 rounded-full bg-[#314b3e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24392f]">
            Get to know me
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4">
              <path d="M4.5 10h11m-4.5-4.5 4.5 4.5-4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <span class="px-2 text-sm text-[#7c8579]">Currently studying at CSU · BSIT '28</span>
        </div>

        <div class="mt-12 flex items-center gap-4 border-t border-[#e4e3d9] pt-6">
          <div class="flex -space-x-2">
            <span class="grid size-9 place-items-center rounded-full border-2 border-[#f5f3ed] bg-[#dfe7cc] text-sm">⌘</span>
            <span class="grid size-9 place-items-center rounded-full border-2 border-[#f5f3ed] bg-[#f0dfd0] text-sm">✳</span>
            <span class="grid size-9 place-items-center rounded-full border-2 border-[#f5f3ed] bg-[#e6e8df] text-sm">↗</span>
          </div>
          <p class="text-sm leading-5 text-[#758075]">
            Curious by nature,<br class="sm:hidden">
            <span class="font-medium text-[#435348]">always building what's next.</span>
          </p>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[31rem]">
        <div class="absolute -right-2 top-8 size-24 rounded-full bg-[#e7c7a8]/60 blur-2xl sm:-right-4"></div>
        <div class="absolute -left-4 bottom-12 size-28 rounded-full bg-[#d8e2c1]/80 blur-2xl"></div>
        <div class="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#e9eddf] p-3 shadow-[0_28px_70px_rgba(49,75,62,0.12)] sm:rounded-[2.5rem] sm:p-4">
          <div class="relative overflow-hidden rounded-[1.5rem] bg-[#dce5d2] sm:rounded-[2rem]">
            <img src="/aldis.jpg" alt="Portrait of Aldis Valdehueza" class="aspect-[4/4.5] w-full object-cover">
            <div class="absolute inset-x-4 bottom-4 rounded-2xl border border-white/65 bg-[#fbfaf6]/90 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">
              <p class="eyebrow">A little about me</p>
              <div class="mt-2 flex items-end justify-between gap-3">
                <div>
                  <p class="font-serif text-xl font-medium text-[#24352d] sm:text-2xl">Student. Maker. Musubi fan.</p>
                  <p class="mt-1 text-sm text-[#778176]">Learning something new every day.</p>
                </div>
                <span class="grid size-10 shrink-0 place-items-center rounded-full bg-[#e9eddf] text-lg text-[#536b51]" aria-hidden="true">✦</span>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute -left-4 top-12 hidden -rotate-6 rounded-xl border border-[#e5e2d5] bg-white px-4 py-3 shadow-lg shadow-[#24352d]/5 sm:block">
          <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#829078]">Currently</p>
          <p class="mt-1 font-serif text-sm text-[#314b3e]">Turning coffee into code</p>
        </div>
      </div>
    </section>

    <section class="mb-8 grid gap-4 rounded-[1.75rem] border border-[#e6e5dc] bg-white/60 p-5 sm:grid-cols-3 sm:p-7">
      <div class="sm:border-r sm:border-[#e6e5dc] sm:pr-5">
        <p class="eyebrow">What I'm learning</p>
        <p class="mt-2 font-serif text-xl text-[#314b3e]">Web development</p>
      </div>
      <div class="sm:border-r sm:border-[#e6e5dc] sm:px-5">
        <p class="eyebrow">Where I study</p>
        <p class="mt-2 font-serif text-xl text-[#314b3e]">Caraga State University</p>
      </div>
      <div class="sm:pl-5">
        <p class="eyebrow">What keeps me curious</p>
        <p class="mt-2 font-serif text-xl text-[#314b3e]">People, products &amp; good ideas</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' }
]
</script>

<template>
  <header class="page-shell pt-5 sm:pt-7">
    <div class="flex items-center justify-between border-b border-[#e4e3d9] pb-5">
      <NuxtLink to="/" class="group inline-flex items-center gap-3" aria-label="Aldis Valdehueza home">
        <span class="grid size-10 place-items-center rounded-full bg-[#314b3e] font-serif text-sm font-bold text-[#eef1d9] transition group-hover:bg-[#c36c4e]">
          AV
        </span>
        <span>
          <span class="block font-serif text-base font-semibold leading-tight text-[#24352d]">Aldis Valdehueza</span>
          <span class="mt-1 block text-[10px] font-semibold uppercase tracking-[0.17em] text-[#788276]">Personal portfolio</span>
        </span>
      </NuxtLink>

      <nav aria-label="Main navigation" class="flex items-center gap-1 rounded-full border border-[#e4e3d9] bg-white/60 p-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-current="route.path === link.to ? 'page' : undefined"
          class="rounded-full px-4 py-2 text-sm font-medium transition sm:px-5"
          :class="route.path === link.to ? 'bg-[#314b3e] text-white' : 'text-[#5d695e] hover:bg-[#e9eddf] hover:text-[#24352d]'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

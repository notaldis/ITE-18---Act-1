<script setup lang="ts">
useSeoMeta({
  title: 'Profile | Aldis Valdehueza',
  description: 'Personal information, education, projects, skills, interests, and hobbies of Aldis S. Valdehueza.'
})

const skills = [
  { group: 'Web development', items: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Vue.js', 'Tailwind CSS'] },
  { group: 'Programming & databases', items: ['Java', 'Python', 'C', 'PostgreSQL'] },
  { group: 'Tools & workflow', items: ['Git', 'GitHub', 'VS Code', 'Figma'] }
]

const projects = [
  { name: 'MineOps', detail: 'A Figma prototype for a mining equipment and inventory tracker.' },
  { name: 'Iskolar Laundry System', detail: 'A laundry system project.' },
  { name: 'Student Database', detail: 'A distributed Java RMI database application backed by PostgreSQL.' }
]

const hobbies = [
  { number: '01', title: 'Cycling', detail: 'Commuting around campus and riding through Butuan City with Velo.' },
  { number: '02', title: 'Cooking', detail: 'Making everyday meals from scratch and perfecting custom glazes for homemade spam musubi.' },
  { number: '03', title: 'Music', detail: "Indie, acoustic, and classics—from Laufey and Queen to Bob Marley, Kenny Rogers, and The Mowgli's." },
  { number: '04', title: 'Creative storytelling', detail: 'Putting together short reflective videos and sharing little life lessons.' }
]
</script>

<template>
  <div class="page-shell pb-4">
    <section class="pb-10 pt-12 sm:pb-14 sm:pt-16">
      <p class="eyebrow">A closer look</p>
      <div class="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h1 class="section-title max-w-3xl text-5xl sm:text-6xl">The person behind<br class="hidden sm:block"> the projects<span class="text-[#c36c4e]">.</span></h1>
          <p class="mt-5 max-w-2xl text-base leading-7 text-[#68746a] sm:text-lg">
            A student, aspiring developer, cyclist, and home cook—always curious about what I can learn or make next.
          </p>
        </div>
        <span class="inline-flex w-fit items-center gap-2 rounded-full border border-[#dfe5d3] bg-[#edf1e4] px-4 py-2 text-sm font-medium text-[#52644d]">
          <span class="size-2 rounded-full bg-[#86a66f]"></span>
          Open to learning &amp; collaboration
        </span>
      </div>
    </section>

    <section aria-labelledby="personal-heading" class="grid gap-6 lg:grid-cols-2">
      <div class="soft-card relative overflow-hidden p-6 sm:p-8">
        <div class="absolute -right-10 -top-10 size-40 rounded-full bg-[#e4ead8]"></div>
        <div class="relative">
          <p class="eyebrow">01 / Personal information</p>
          <h2 id="personal-heading" class="mt-3 font-serif text-2xl font-medium">A little more about me</h2>
          <dl class="mt-7 space-y-5">
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Full name</dt>
              <dd class="mt-1 text-sm font-medium text-[#35473b]">Aldis S. Valdehueza</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Date of birth</dt>
              <dd class="mt-1 text-sm font-medium text-[#35473b]"><time datetime="2005-11-21">November 21, 2005</time></dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Location</dt>
              <dd class="mt-1 text-sm font-medium text-[#35473b]">Butuan City, Agusan del Norte, Philippines</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Current focus</dt>
              <dd class="mt-1 text-sm font-medium text-[#35473b]">Aspiring Full-Stack Web Developer</dd>
            </div>
          </dl>
          <div class="mt-7 border-t border-[#e8e8df] pt-5">
            <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Find me online</p>
            <p class="mt-2 text-sm leading-6 text-[#68746a]">Find my work, connect with me, or send me an email.</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <a href="https://github.com/notaldis" target="_blank" rel="noopener noreferrer" class="rounded-full bg-[#f0f1eb] px-3 py-1.5 text-xs font-medium text-[#677265] transition hover:bg-[#e6eadc]">GitHub</a>
              <a href="https://www.linkedin.com/in/aldis-valdehueza-23183133a/" target="_blank" rel="noopener noreferrer" class="rounded-full bg-[#f0f1eb] px-3 py-1.5 text-xs font-medium text-[#677265] transition hover:bg-[#e6eadc]">LinkedIn</a>
              <a href="mailto:aldisvaldehueza@gmail.com" class="rounded-full bg-[#f0f1eb] px-3 py-1.5 text-xs font-medium text-[#677265] transition hover:bg-[#e6eadc]">Email</a>
            </div>
          </div>
        </div>
      </div>

      <div class="soft-card p-6 sm:p-8">
        <p class="eyebrow">02 / Educational background</p>
        <div class="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p class="font-serif text-2xl font-medium text-[#314b3e]">Bachelor of Science in Information Technology</p>
            <p class="mt-2 text-sm font-medium text-[#59695b]">Caraga State University (CSU)</p>
            <p class="text-sm text-[#798276]">College of Computing and Information Sciences (CCIS)</p>
          </div>
          <span class="w-fit shrink-0 rounded-full bg-[#edf1e4] px-3 py-1.5 text-xs font-semibold text-[#52644d]">3rd year · Class of 2028</span>
        </div>

        <div class="mt-8 border-t border-[#e8e8df] pt-6">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Selected academic projects</p>
          <div class="mt-4 grid gap-3">
            <article v-for="(project, index) in projects" :key="project.name" class="flex gap-4 rounded-2xl bg-[#f7f7f2] p-4">
              <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-[#e6eadc] font-serif text-sm text-[#566b50]">0{{ index + 1 }}</span>
              <div>
                <h3 class="text-sm font-semibold text-[#35473b]">{{ project.name }}</h3>
                <p class="mt-1 text-sm leading-6 text-[#778176]">{{ project.detail }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="skills-heading" class="mt-6">
      <div class="soft-card p-6 sm:p-8">
        <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p class="eyebrow">03 / Skills &amp; interests</p>
            <h2 id="skills-heading" class="mt-2 font-serif text-2xl font-medium">Tools I'm growing with</h2>
          </div>
          <p class="text-sm text-[#7c8579]">A toolkit in progress, one project at a time.</p>
        </div>
        <div class="mt-7 grid gap-6 md:grid-cols-3">
          <div v-for="group in skills" :key="group.group">
            <h3 class="text-sm font-semibold text-[#52644d]">{{ group.group }}</h3>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="skill in group.items" :key="skill" class="rounded-full border border-[#e5e7dd] bg-[#f8f8f3] px-3 py-1.5 text-xs font-medium text-[#59675b]">{{ skill }}</span>
            </div>
          </div>
        </div>
        <div class="mt-7 rounded-2xl bg-[#f2f3ec] p-5">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[#879082]">Things that interest me</p>
          <p class="mt-2 text-sm leading-7 text-[#68746a]">Full-stack web architecture <span class="px-1 text-[#b3b9aa]">·</span> UI/UX design <span class="px-1 text-[#b3b9aa]">·</span> Tech community events <span class="px-1 text-[#b3b9aa]">·</span> Student entrepreneurship, including running <em class="font-medium text-[#52644d]">Spam Missubibi</em> on campus</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="hobbies-heading" class="mt-12 sm:mt-16">
      <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p class="eyebrow">04 / Off the screen</p>
          <h2 id="hobbies-heading" class="section-title mt-2">Things I enjoy</h2>
        </div>
        <p class="text-sm text-[#7c8579]">A few favorite ways to spend a day.</p>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <article v-for="hobby in hobbies" :key="hobby.number" class="soft-card flex gap-5 p-5 sm:p-6">
          <span class="font-serif text-xl text-[#b8c2a8]">{{ hobby.number }}</span>
          <div>
            <h3 class="font-serif text-xl font-medium text-[#314b3e]">{{ hobby.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-[#778176]">{{ hobby.detail }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

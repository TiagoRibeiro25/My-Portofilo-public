<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Identity from "./components/Identity.vue";
import Accounts from "./components/Accounts.vue";
import Border from "./components/Border.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <div class="first" id="first">
    <div class="second">
      <NavBar />
      <Identity />
      <Border />
      <Accounts />
      <Border />
      <About />
      <Border />
      <Projects />
      <Border />
      <Contact />
      <Border />
    </div>
  </div>
</template>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #181a1b;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --color-primary: #181a1b;
  --color-secondary: #646cff;
  --color-tertiary: #f2f2f2;
}

html {
  scroll-behavior: smooth;
}

h2 {
  font-size: 2.4em;
  line-height: 1.1;
  margin-bottom: 20px;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

#app {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.first {
  border: 3px solid var(--color-secondary);
}

.second {
  border: 3px solid var(--color-secondary);
  margin: 7px;
}

@media screen and (max-width: 856px) {
  #app {
    padding: 0.5rem;
  }
}
</style>

<template>
  <div>
    <h1 class="name">
      Hello, I'm <span class="name-highlight">Tiago Ribeiro</span>
    </h1>
    <p class="description">I'm a {{ dev }} from Portugal</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Identity",
  data() {
    return {
      dev: "",
    };
  },

  created() {
    const words = [
      "Frontend Developer",
      "Backend Developer",
      "Gamer Enthusiast",
    ];

    this.updateText(words, 0, 0);
  },

  methods: {
    updateText(words: string[], index: number, count: number) {
      if (count === 0) this.dev = "";

      const word = words[index];
      const letter = word[count] === " " ? ` ${word[count]}` : word[count];
      this.dev += letter;

      let time = 100;

      if (count === word.length - 1) {
        count = -1;
        index++;
        time = 1500;
      }

      if (index === words.length) {
        index = 0;
        time = 1500;
      }

      setTimeout(() => {
        this.updateText(words, index, count + 1);
      }, time);
    },
  },
};
</script>

<style scoped>
.name {
  font-size: 3.2em;
  line-height: 1.1;
}

.name-highlight {
  animation: highlight 1.5s ease-in-out infinite;
}

.description {
  font-size: 1.2em;
  line-height: 1.5;
}

/* Animations */
@keyframes highlight {
  0% {
    color: var(--color-tertiary);
  }
  50% {
    color: var(--color-secondary);
  }
  100% {
    color: var(--color-tertiary);
  }
}
</style>

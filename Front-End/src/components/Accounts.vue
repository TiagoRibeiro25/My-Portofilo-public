<template>
  <h2>My Accounts</h2>
  <a href="https://github.com/TiagoRibeiro25" target="_blank">
    <font-awesome-icon icon="fa-brands fa-github" style="color: white" />
  </a>
  <a
    href="https://open.spotify.com/user/rgcb95ufripshahmeobrv4i7c"
    target="_blank"
  >
    <font-awesome-icon
      icon="fa-brands fa-spotify"
      style="color: limegreen"
    />
  </a>
  <a href="https://www.freecodecamp.org/25GOLD25" target="_blank">
    <font-awesome-icon
      icon="fa-brands fa-free-code-camp"
      style="color: white"
    />
  </a>
  <a href="#" @click="copyDiscordID">
    <font-awesome-icon
      icon="fa-brands fa-discord"
      style="color: #5460e6"
    />
  </a>
  <a href="https://steamcommunity.com/id/-_GOLD_-/" target="_blank">
    <font-awesome-icon icon="fa-brands fa-steam" style="color: white" />
  </a>
  <span :style="{ visibility: visibility ? 'visible' : 'hidden' }">
    Discord ID copied to clipboard!
  </span>
</template>

<script lang="ts">
export default {
  name: "Accounts",
  data() {
    return {
      discordID: "-|GOLD|-#5063",
      visibility: false,
    };
  },

  methods: {
    copyDiscordID() {
      navigator.clipboard.writeText(this.discordID);
      this.visibility = true;
      setTimeout(() => {
        this.visibility = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
a {
  margin-right: 20px;
  font-size: 2.4em;
}

a:hover {
  border-bottom: 2px solid var(--color-tertiary);
}

span {
  display: block;
  margin-top: 10px;
  margin-bottom: -40px;
  color: var(--color-secondary);
  /* visibility: hidden; */
}
</style>

<template>
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-code" size="2x" />
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  background-color: var(--color-primary);
  border-bottom: 3px solid var(--color-secondary);
  border-top: 3px solid var(--color-secondary);
  margin: 50px;
  padding: 0 3px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border: 3px solid var(--color-secondary);
  margin: 7px -3px;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: var(--color-tertiary);
  text-decoration: none;
  font-size: 1.6rem;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #535bf2;
  transition: color 0.17s ease-in-out;
}

@media (max-width: 840px) {
  ul {
    flex-direction: column;
    padding: 5px 0;
    border: none;
    margin: 0;
  }
  li {
    padding: 10px 0;
  }
  a {
    font-size: 1.4rem;
  }
}
</style>

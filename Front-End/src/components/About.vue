<template>
  <div id="about">
    <h2>About Me</h2>
    <ul>
      <li>I'm a college student who is passionate about programming.</li>
      <br /><br />
      <li>I'm currently studying Web Development at ESMAD in Portugal.</li>
      <br /><br />
      <li>
        I have a strong interest in web development, and I'm currently
        learning Vue and React. I do have some experience with Node.js and
        Express for backend development, and I'm also familiar with MongoDB
        and MySQL for database management.
      </li>
      <br /><br />
      <li>
        Even though I'm still a student, I'm always looking for new
        opportunities to learn and grow as a developer. I'm also interested
        in working on open source projects, so if you have any ideas, feel
        free to <a href="#contact">contact me</a>.
      </li>

      <br /><br />
      <li>
        I don't have much experience when it comes to UI/UX design, but I
        do try to make my best effort to make my projects look as good as
        possible, so go easy on me on that regard 😊
      </li>
      <br /><br />

      <li>
        In my free time, I like to play video games, watch movies and TV
        shows and learn new Frameworks and Libraries. I also enjoy
        listening to music. I'm also a big fan the band PowerWolf.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "About",
};
</script>

<style scoped>
ul {
  width: 700px;
  margin: 0 auto;
}

li {
  font-size: 1.3em;
  transition: 0.5s;
  border-radius: 15px;
}

li:hover {
  color: #a0a4ef;
  cursor: default;
  border: 1px solid #a0a4ef;
  scale: 1.1;
  padding: 15px;
  transition: 0.5s;
}

a {
  color: var(--color-secondary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #535bf2;
  transition: color 0.17s ease-in-out;
}

@media screen and (max-width: 856px) {
  ul {
    width: 90%;
  }

  li {
    font-size: 1.1em;
    width: 90%;
    margin: 0 auto;
  }

  li:hover {
    border: 0px solid #a0a4ef;
    scale: 1;
    padding: 0;
    transition: 0.5s;
  }
}
</style>

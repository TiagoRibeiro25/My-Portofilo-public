<template>
  <div id="projects">
    <h2>Projects</h2>
    <div class="projects">
      <div class="card" v-for="project in projects" :key="project.title">
        <div class="card-img">
          <img :src="project.image" alt="{{project.title}}" />
        </div>
        <div class="card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" rel="noopener noreferrer"
            >View Project</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import guessImg from "../assets/guess.png";
import sliderImg from "../assets/slider.png";

export default {
  name: "Projects",

  data() {
    return {
      projects: [
        {
          title: "Guess the Country",
          description:
            "A simple hangman style game where you with 5 lives and you have to guess the country name by typing in the letters. Every time you guess a letter wrong, you lose a life.",
          link: "https://guess-country.cyclic.app",
          github: "https://github.com/TiagoRibeiro25/guess",
          tools: ["Vanilla JS", "HTML", "CSS", "Node.js", "Express.js"],
          image: guessImg,
        },
        {
          title: "Image Slider",
          description:
            "A simple is a matching puzzle that challenges a player to slide pieces along certain routes to establish a certain final configuration.",
          link: "https://image-slider-2022.herokuapp.com/",
          github: "https://github.com/TiagoRibeiro25/Image-slider",
          tools: ["Vanilla JS", "HTML", "CSS", "P5.js"],
          image: sliderImg,
        },
      ],
    };
  },
};
</script>

<style scoped>
a:hover {
  color: #535bf2;
  transition: color 0.17s ease-in-out;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 400px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;
  padding: 20px;
  border: 3px solid var(--color-secondary);
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
}

.card-img {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.card-img img {
  width: 100%;
  border-radius: 10px;
}

.card-content {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.card-content h3 {
  margin-bottom: 10px;
}

.card-content p {
  margin-bottom: 10px;
  height: 100px;
  overflow: hidden;
}

.card-content a {
  display: inline-block;
  padding: 10px 20px;
  border: 3px solid var(--color-secondary);
  border-radius: 10px;
  text-decoration: none;
  color: var(--color-secondary);
  transition: all 0.3s ease;
}

.card-content a:hover {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

@media screen and (max-width: 768px) {
  .card {
    width: 70%;
  }

  .card-content a {
    margin-bottom: -10px;
  }
}
</style>

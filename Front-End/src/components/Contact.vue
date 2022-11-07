<template>
  <div id="contact">
    <h2>Contact Me</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="name" required />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
        />
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          maxlength="500"
          v-model="message"
          placeholder="Max 500 characters allowed..."
          required
        ></textarea>
      </div>
      <span :style="{ visibility: response ? 'visible' : 'hidden' }">
        {{ response }}
      </span>
      <input
        type="submit"
        class="contact-btn"
        value="Send"
        :disabled="!isFormValid"
      />
    </form>
  </div>
  <div class="go-up">
    <a href="#first">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "Contact",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      response: "",
    };
  },

  methods: {
    async submitForm() {
      console.log("Sending request to server...");
      const request = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });

      const data = await request.json();
      this.response = data.message;
      console.log("Response received from server");

      if (data.status === "error") {
        console.log("Error: " + data.message);
      } else {
        console.log("Success: " + data.message);
      }
    },
  },

  computed: {
    isFormValid() {
      if (this.name && this.email && this.message) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.form-control {
  margin-bottom: 20px;
}

.form-control label {
  display: block;
  margin-bottom: 10px;
}

.form-control input,
.form-control textarea {
  width: 95%;
  padding: 10px;
  border: 3px solid var(--color-secondary);
  border-radius: 10px;
  outline: none;
}

.form-control textarea {
  resize: none;
}

.contact-btn {
  width: 100%;
  padding: 10px;
  border: 3px solid var(--color-secondary);
  border-radius: 10px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.25s;
}

.contact-btn:hover {
  background-color: var(--color-primary);
  color: var(--color-secondary);
}

.contact-btn:focus,
.contact-btn:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.go-up {
  width: 25px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  padding: 10px;
  margin-left: 60px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.25s;
}

.go-up > a {
  color: var(--color-primary);
}

.go-up:hover {
  background-color: var(--color-primary);
  border: 3px solid var(--color-secondary);
  transition: 0.5s;
}

.go-up:hover > a > i {
  color: var(--color-secondary);
  transition: 0.5s;
}

/* disabled input */
input:disabled {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  cursor: not-allowed;
}

span {
  margin-bottom: 15px;
  margin-top: -10px;
  color: var(--color-secondary);
  visibility: hidden;
}

@media (max-width: 620px) {
  .contact-form {
    width: 80%;
  }

  .go-up {
    margin-left: 30px;
  }
}
</style>

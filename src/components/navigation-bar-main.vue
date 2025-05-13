<template>
  <nav class="navigation-bar">
    <!-- Add your navigation bar content here -->
    <span>Sandreville</span>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Community</a></li>
      <li><a href="#contact">Travel</a></li>
      <li><a href="#contact">Recommendation</a></li>
    </ul>
    <img src="/src/assets/menu-svg.svg" alt="Menu" width="30" height="30" />
  </nav>
</template>

<script>
export default {
  name: "NavigationBarMain",
  data() {
    return {
      // Add your component data here
    };
  },
  methods: {
    // Add your component methods here
  },
};
</script>

<style scoped>
/* Add your component styles here */
.navigation-bar {
  /* Example styles */
  background-color: aquamarine;
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 5rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}
li {
  color: black;
}
</style>

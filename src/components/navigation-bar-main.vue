<template>
  <nav class="navigation-bar">
    <!-- Add your navigation bar content here -->
    <span>Sandreville</span>
    <ul>
      <li v-for="nav_name in nav_names" :key="nav_name.text"><a :href="nav_name.href"><span id="nav_name">{{ nav_name.text }}</span></a></li>
    </ul>
    <img src="/src/assets/svg/menu-svg.svg" alt="Menu" width="30" @click="showMenu = true"/>

  </nav>
  <menu_drawer :show="showMenu" @close="showMenu = false" />
</template>

<script>

import menu_drawer from './menu_drawer.vue';

export default {

  name: "NavigationBarMain",
  components: {
    menu_drawer,
  },
  data() {
    return {
      nav_names: [
        { text: "Home",
          href: "#home" 
        },
        { text: "About",
          href: "#about" 
        },
        { text: "Community",
          href: "#community" 
        },
        { text: "Blogs",
          href: "#blogs"
        },
        { text: "Explore",
          href: "#explore"
        },
        { text: "Recommendation",
          href: "#recommendation"
        },
      ],
      showMenu: false,
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
  background-color: #BAF2C1;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
span{
  font-size: 1.5rem;
  font-weight: bold;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  /* gap: 2rem; */
}
span:hover, #nav_name:hover, img:hover {
  color: darkgreen;
  cursor: pointer;
}
a{
  font-weight: bold;
  color: black;
  text-decoration: none;
}
#nav_name{
  color: black;
  text-decoration: none;
  font-size: 1rem;
}
</style>

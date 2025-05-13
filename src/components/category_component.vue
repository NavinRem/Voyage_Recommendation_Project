<template>
  <div class="category-component">
    <h2>Categories</h2>
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  data() {
    return {
      categories: [
        { id: 1, name: "Adventure" },
        { id: 2, name: "Relaxation" },
        { id: 3, name: "Cultural" },
        { id: 4, name: "Nature" },
      ],
    };
  },
  methods: {
    selectCategory(category) {
      this.$emit("categorySelected", category);
    },
  },
};
</script>

<style scoped>
.category-component {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.category-component ul {
  list-style: none;
  padding: 0;
}

.category-component li {
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.category-component li:hover {
  background-color: #e0e0e0;
}
</style>

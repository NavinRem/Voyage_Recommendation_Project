<script setup>
import { computed, ref } from "vue";
import olivia_profile from "@/assets/image/olivia_profile.png";
import my_profile from "@/assets/svg/my_profile.svg";
import destination from "@/assets/svg/destination.svg";
import services from "@/assets/svg/service.svg";
import ai_assistant from "@/assets/svg/headset.svg";
import feedback from "@/assets/svg/feedback.svg";
import mobile_app from "@/assets/svg/device-mobile.svg";
import setting from "@/assets/svg/setting.svg";

// Define props
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  profile: {
    type: Object,
    default: () => ({
      name: "Guest-User",
      role: "Guest-User",
      image: "../assets/svg/anonymous-user.svg",
    }),
  },
  menu_lists: {
    type: Array,
  },
});

// Define emits
const emit = defineEmits(["close"]);

// Local data - profiles array
const profiles = ref([
  {
    name: "Olivia Rubinhood",
    role: "Blogger, Traveller",
    image: olivia_profile,
  },
]);

const menu_lists = ref([
  {
    svg: my_profile,
    text: "My Profile",
  },
  {
    svg: destination,
    text: "Destination",
  },
  {
    svg: services,
    text: "Services",
  },
  {
    svg: ai_assistant,
    text: "AI Assistant",
  },
  {
    svg: feedback,
    text: "Feedback",
  },
  {
    svg: mobile_app,
    text: "Mobile App",
  },
  {
    svg: setting,
    text: "Setting",
  },

]);

// Computed currentProfile
const currentProfile = computed(() => {
  if (props.show && profiles.value.length > 0) {
    return profiles.value[0];
  }
  return props.profile;
});

// Close handler for overlay or menu button
function closeMenu() {
  emit("close");
}
</script>

<template>
  <div v-show="show" class="menu_drawer_container">
    <div class="nav_bar_piece">
      <img
        src="../assets/svg/menu-svg.svg"
        alt="menu"
        width="30px"
        @click="$emit('close')"
      />
    </div>
    <transition name="slide-fade">
      <div v-show="show" class="menu_content">
        <div class="profile">
          <img :src="currentProfile.image" alt="User Profile" width="50px" />
          <span id="profile_name">{{ currentProfile.name }}</span>
          <p id="profile_role">{{ currentProfile.role }}</p>
        </div>
        <div class="menu_list">
          <ul>
            <li v-for="menu_name in menu_lists" :key="menu_name"><img :src="menu_name.svg" alt="menu_list_svg" width="35px"><span>{{ menu_name.text }}</span></li>
          </ul>
        </div>
        <button id="sign_InUp_btn">Sign up</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.menu_drawer_container {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  background-color: #fff;
}
.nav_bar_piece {
  background-color: #baf2c1;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: right;
}
img {
  cursor: pointer;
}

.menu_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
}

.profile {
  display: flex;
  flex-direction: column;
}

#profile_name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
}
#profile_name:hover {
  color: darkgreen;
  cursor: pointer;
}
#profile_role {
  font-size: 1rem;
  color: #555;
  margin-top: 5px;
}

#sign_InUp_btn {
  background-color: #baf2c1;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
}

#sign_InUp_btn:hover {
  background-color: #228b22;
  color: white;
  transition: all 0.3s ease;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  gap: 10px;
  border-radius: 10px;
}
li:hover {
  background-color: #baf2c1;
  transition: all 0.3s ease;
}
li span {
  font-size: 1.2rem;
}

/* 🔽 Transition classes for slide-fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

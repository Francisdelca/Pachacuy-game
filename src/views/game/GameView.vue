<template>
  <div class="hello">
    <ion-phaser v-bind:game.prop="game" />
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  background-color: #000;
}
</style>

<script lang="ts" setup>
import Phaser from "phaser";
// import { ref } from "vue";
import MainLevel from "@/game/scenes/mainLevel/MainLevel";

const game = new Phaser.Game({
  width: "100%",
  height: "100%",
  backgroundColor: "#2f2f2f",
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  scene: [MainLevel],
});

game.scene.start("Boot");

</script>
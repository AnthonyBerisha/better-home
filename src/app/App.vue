<template>
  <div>
    <h1>Better Home</h1>
    <div>Collection</div>
    {{ bookmarks }}
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, Ref } from "vue";
  import browser, { Bookmarks } from "webextension-polyfill";

  const bookmarks: Ref<Bookmarks.BookmarkTreeNode[] | null> = ref(null);

  onMounted(async () => {
    // Can access web-extension api through Vue files
    // Sends a message to the background script every time the popup is opened
    browser.runtime.sendMessage({ from: "App.vue" });

    bookmarks.value = await chrome.bookmarks.getTree();

    console.log(bookmarks.value);
  });
</script>

<style lang="scss"></style>

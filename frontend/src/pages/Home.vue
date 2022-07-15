<script lang="ts">
import { defineComponent } from "vue";
import SearchField from "../components/home/SearchField.vue";
import ImageSearchResponse from "../models/ImageSearchResponse";
import ImageItem from "../models/ImageItem";

export default defineComponent({
  components: { SearchField },
  data() {
    return {
      imageItems: <ImageItem[]>[],
    };
  },
  methods: {
    onSearchStart() {},
    onSearchDone(result: ImageSearchResponse) {
      this.imageItems = result.items;
    },
  },
});
</script>

<template>
  <main class="container mx-auto grid h-screen w-full place-items-center p-2">
    <section class="grid w-full grid-cols-1 gap-4">
      <header>
        <h1 class="text-center text-2xl font-medium">
          Image Search Abstraction Layer
        </h1>
      </header>

      <section class="grid max-w-xs grid-cols-1">
        <button class="">Recent Searches</button>
      </section>

      <SearchField
        @search-images-start="onSearchStart"
        @search-images-done="onSearchDone"
      />

      <section
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <template v-for="item in imageItems">
          <a
            :href="item.image.contextLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="item.image.thumbnailLink"
              class="aspect-square w-full rounded-xl object-cover shadow transition-all hover:shadow-md"
            />
          </a>
        </template>
      </section>
    </section>
  </main>
</template>

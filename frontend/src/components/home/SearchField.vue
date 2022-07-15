<script lang="ts">
import { defineComponent } from "vue";
import ImageSearchResponse from "../../models/ImageSearchResponse";
import ImageSearchService from "../../services/ImageSearchService";

const imageSearchService = new ImageSearchService();

export default defineComponent({
  emits: {
    searchImagesStart: () => true,
    searchImagesDone: (_: ImageSearchResponse) => true,
  },
  data() {
    return {
      isLoading: false,
      searchKeyword: "",
      data: null as ImageSearchResponse | null,
      timeout: -1,
    };
  },
  watch: {
    searchKeyword(_, keyword: string) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.searchImage(keyword), 250);
    },
  },
  methods: {
    async searchImage(keyword: string) {
      this.$emit("searchImagesStart");
      this.isLoading = true;
      const response = await imageSearchService.search(keyword);
      this.$emit("searchImagesDone", response);
      this.isLoading = false;
    },
  },
});
</script>

<template>
  <input
    v-model.trim="searchKeyword"
    :disabled="isLoading"
    type="text"
    class="w-full rounded-lg border border-slate-200 px-2 py-3 shadow transition-all hover:shadow-md"
    placeholder="Search..."
  />
</template>

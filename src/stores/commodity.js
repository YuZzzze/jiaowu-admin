import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCommodityStore = defineStore('counter', () => {
  const searchOptions = ref({
    search: '',
    select: ''
  });

  const shouldRefresh = ref(false);

  const setSearchOptions = (options) => {
    searchOptions.value = options;
    changeShouldRefresh(true);
  };

  const changeShouldRefresh = (value) => {
    shouldRefresh.value = value;
  };

  return { searchOptions, setSearchOptions, shouldRefresh, changeShouldRefresh };
});

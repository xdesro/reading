<template>
  <div class="now">
    <h2 class="now__title">Now Reading</h2>
    <h3 class="now__book" v-if="list.length">{{ list[0].title }}</h3>
    <h3 class="now__book" v-else>N/A</h3>
    <ul class="now__stack" v-if="list.length">
      <li v-for="book in list" :key="book.isbn">
        <img class="now__cover" :src="`/covers/${book.isbn}.jpg`" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
};
</script>

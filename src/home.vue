<template>
  <main class="home" data-taxi-view>
    <Logo class="logo--home" />
    <ol class="books">
      <li class="book-list-item" v-for="book in books" :key="book.isbn">
        <a class="book-list-item__link" :href="`/${slugify(book.title)}`">
          <article>
            <img class="book-list-item__cover" :src="`/img/${book.isbn}.jpg`" />
            <span class="visually-hidden">{{ book.title }}</span>
            <h1 class="book-list-item__title">{{ book.title }}</h1>
            <p class="book-list-item__author">{{ book.author }}</p>
            <time class="book-list-item__completed" v-if="book.dateCompleted">{{ book.dateCompleted }}</time>
          </article>
        </a>
      </li>
    </ol>
    <div class="footer">
      <LayoutControls />
      <NowReading />
    </div>
    <script src="/js/home.js"></script>
  </main>
</template>

<script>
import LayoutControls from './_includes/LayoutControls.vue';
import Logo from './_includes/Logo.vue';
import NowReading from './_includes/NowReading.vue';

export default {
  data() {
    return {
      permalink: '/index.html',
      eleventyComputed: {
        booksByDate: (data) => {
          return data.books.sort((a, b) => {
            if (!a.dateCompleted) return -1;
            return new Date(b.dateCompleted) - new Date(a.dateCompleted);
          });
        },
      },
    };
  },

  components: {
    LayoutControls,
    Logo,
    NowReading,
  },
};
</script>

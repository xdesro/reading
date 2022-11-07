<template>
  <main class="home" data-taxi-view>
    <Logo class="logo--home" />
    <ol class="books">
      <BookListItem v-for="book in booksByDate" :book="book" :key="book.isbn" />
    </ol>
    <div class="footer">
      <LayoutControls />
      <NowReading :list="nowReadingList" />
    </div>
    <script src="/js/home.js"></script>
  </main>
</template>

<script>
import BookListItem from './_includes/BookListItem.vue';
import LayoutControls from './_includes/LayoutControls.vue';
import Logo from './_includes/Logo.vue';
import NowReading from './_includes/NowReading.vue';

export default {
  data() {
    return {
      permalink: '/index.html',
      eleventyComputed: {
        booksByDate: (data) => {
          return [...data.books]
            .sort((a, b) => {
              return new Date(b.dateCompleted) - new Date(a.dateCompleted);
            })
            .filter((book) => !book.nowReading);
        },
        nowReadingList: (data) => {
          return [...data.books].filter((book) => book.nowReading);
        },
      },
    };
  },

  components: {
    BookListItem,
    LayoutControls,
    Logo,
    NowReading,
  },
};
</script>

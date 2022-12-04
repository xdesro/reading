<template>
  <main class="book-layout" :style="`--color-accent: ${book.colors[0]}`" data-taxi-view>
    <nav class="book-nav">
      <Logo class="book-nav__logo" />
      <a href="/" class="book-nav__return">Go Back.</a>
    </nav>
    <div class="book-cover">
      <img :src="`/covers/${book.isbn}.jpg`" alt="" />
    </div>
    <h1 :class="`book-title${book.title.length > 30 ? ' book-title--small' : ''}`">
      {{ book.title }}
    </h1>
    <div class="author">{{ book.author }}</div>
    <blockquote class="take" v-if="book.take">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 40 32">
        <path
          fill-rule="evenodd"
          d="M13.162.185C9.205.68 6.247 2.032 3.807 4.457c-1.68 1.67-2.626 3.325-3.305 5.78-.369 1.332-.383 1.697-.441 11.57L0 32h18.868V12.56h-6.616l.09-.795c.116-1.025.549-1.6 1.598-2.123.718-.357 1.158-.432 2.888-.494l2.04-.072V0l-2.291.022c-1.26.012-2.797.085-3.415.163ZM33.48.194c-1.564.194-4.033.89-5.4 1.523-4.404 2.037-6.988 5.818-7.476 10.94-.099 1.034-.18 5.81-.18 10.612V32h18.849V12.56h-6.571v-.48c0-.264.175-.823.389-1.242.611-1.196 1.589-1.594 4.15-1.688l2.032-.074V0L36.98.022c-1.26.012-2.835.09-3.501.172Z"
          clip-rule="evenodd"
        />
      </svg>
      <p>{{ book.take }}</p>
    </blockquote>
    <Stars class="stars" :rating="book.rating || 0" :colors="book.colors" />
    <dl class="meta">
      <div class="meta__row meta__row--spacer" v-if="book.dateCompleted">
        <dt>Date Completed</dt>
        <dd>{{ book.dateCompleted }}</dd>
      </div>
      <div class="meta__row" v-if="book.metadata.datePublished">
        <dt>Year Published</dt>
        <dd>{{ book.metadata.datePublished }}</dd>
      </div>
      <div class="meta__row" v-if="book.isbn">
        <dt>ISBN</dt>
        <dd>{{ book.isbn }}</dd>
      </div>
    </dl>
    <a class="buy" :href="book.metadata.buy">Buy Now</a>
    <aside v-if="isBookshopLink" class="buy-disclaimer">Buying from Bookshop.org benefits your local bookstore.</aside>
  </main>
</template>

<script>
import slugify from 'slugify';

import Logo from './_includes/Logo.vue';
import Stars from './_includes/Stars.vue';

export default {
  components: { Logo, Stars },
  data() {
    return {
      pagination: {
        size: 1,
        data: 'books',
        alias: 'book',
      },
      title: (data) => data.book.title,
      permalink: (data) => {
        if (!data.book.nowReading) {
          return `/${slugify(data.book.title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          })}/index.html`;
        }
      },
    };
  },
  computed: {
    isBookshopLink() {
      return this.book.metadata?.buy?.includes('bookshop.org');
    },
  },
};
</script>

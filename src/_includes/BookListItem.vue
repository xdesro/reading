<template>
  <li class="book-list-item">
    <a class="book-list-item__link" :href="`/${slugify(book.title)}`" :id="slugify(book.title)">
      <article>
        <img class="book-list-item__cover" :src="`/img/${book.isbn}.jpg`" />
        <span class="visually-hidden">{{ book.title }}</span>
        <h1 class="book-list-item__title">{{ book.title }}</h1>
        <p class="book-list-item__author">{{ book.author }}</p>
        <time class="book-list-item__completed" v-if="book.dateCompleted">{{ book.dateCompleted }}</time>
      </article>
    </a>
  </li>
</template>

<script>
export default {
  props: ['book'],
};
</script>

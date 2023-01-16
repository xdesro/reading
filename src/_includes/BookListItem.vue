<template>
  <li class="book-list-item">
    <a class="book-list-item__link" :href="`/${bookUrl}`" :id="bookUrl">
      <article>
        <picture class="book-list-item__cover" alt="">
          <source type="image/avif" :srcset="img.avif.map((avif) => avif.srcset).join(', ')" />
          <source type="image/webp" :srcset="img.webp.map((webp) => webp.srcset).join(', ')" />
          <source type="image/jpeg" :srcset="img.jpeg.map((jpeg) => jpeg.srcset).join(', ')" />
          <img :srcset="img.jpeg.map((jpeg) => jpeg.srcset).join(', ')" alt="" />
        </picture>
        <span class="visually-hidden">{{ book.title }}</span>
        <h1 class="book-list-item__title">{{ book.title }}</h1>
        <p class="book-list-item__author">{{ book.author }}</p>
        <time class="book-list-item__completed" v-if="book.dateCompleted">{{ book.dateCompleted }}</time>
      </article>
    </a>
  </li>
</template>

<script>
import Image from '@11ty/eleventy-img';
import slugify from 'slugify';

export default {
  props: ['book'],
  async serverPrefetch() {
    const img = await Image(`./src/img/${this.book.isbn}.jpg`, {
      outputDir: 'dist/img/',
      widths: [300, 600],
      formats: ['avif', 'webp', 'jpeg'],
    });
    this.img = img;
  },
  computed: {
    bookUrl() {
      return slugify(this.book.title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      });
    },
  },
};
</script>

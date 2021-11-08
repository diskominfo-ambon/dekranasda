<template>
<main>
  <b-skeleton-wrapper :loading="!postIsLoaded">
    <template #loading>
      <PostPageSkeleton/>
    </template>

    <div v-if="postIsLoaded">
      <b-container>
        <header class="post-header">
          <b-row>
            <b-col sm="12" md="6" lg="6" offset-lg="1">
              <h1 class="post-title">{{ post.title }}</h1>
              <!-- eslint-disable-next-line no-irregular-whitespace -->
              <span class="post-published"><span class="text-primary"><Icon icon="calendar-week"/> {{ post.created.calendar }}</span> • Sudah dilihat oleh {{ post.views }} pengguna • Admin</span>
              <ShareThisButton uri="https://platform-api.sharethis.com/js/sharethis.js#property=617cb7a3f80065001934eb1b&product=inline-share-buttons"/>
            </b-col>
            <b-col sm="12" md="6" lg="5">
              <div class="post-cover">
                <p>Gambar tidak tersedia</p>
              </div>
            </b-col>
          </b-row>
        </header>
      </b-container>
      <b-container>
        <p>
          {{ post.content }}
        </p>
      </b-container>
    </div>
  </b-skeleton-wrapper>
</main>
</template>

<script>
import ShareThisButton from '~@/components/share-this-button';
import PostPageSkeleton from '~@/components/post-page-skeleton';
import useFetch from '~@/utils/use-fetch';

export default {
  components: {
    ShareThisButton,
    PostPageSkeleton
  },
  data(){
    return {
      post: {}
    }
  },
  computed: {
    postIsLoaded() {
      return Object.keys(this.post).length > 0;
    }
  },
  methods: {
    validateRequestSlug(slug) {
      const rgex = new RegExp(/_\d+$/ig);

      return rgex.test(slug);
    },
    fetchPostById(id) {
      return useFetch(`/posts/${id}`);
    }
  },
  async mounted() {

    try {
      if (!this.validateRequestSlug(this.$route.params.slug)) {
        throw new Error('Error [404]: Post not found.');
      }

      const [, id] = this.$route.params.slug.split('_');
      const post = await this.fetchPostById(id);

      setTimeout(() => {
        this.post = post?.data;
      }, 3000);
    } catch {

      this.$router.replace({
        name: 'NotFound',
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/post.scss';
</style>
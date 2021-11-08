<template>
  <div>
    <b-container>
      <header class="post-header">
        <b-row>
          <b-col sm="12" md="6" lg="6" offset-lg="1">
            <b-skeleton width="100%" height="20%"/>
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            <div class="d-flex mt-3">
              <b-skeleton width="10%" class="mr-2"></b-skeleton>
              <b-skeleton width="20%" class="mr-2"></b-skeleton>
              <b-skeleton width="20%"></b-skeleton>
            </div>

            <div class="d-flex mt-3" style="height: 2rem;">
              <b-skeleton width="20%" height="100%" class="mr-2"></b-skeleton>
              <b-skeleton width="20%" height="100%" class="mr-2"></b-skeleton>
              <b-skeleton width="20%" height="100%"></b-skeleton>
            </div>

          </b-col>
          <b-col sm="12" md="6" lg="5">
            <div class="post-cover">
              <b-skeleton width="100%" height="100%"></b-skeleton>
            </div>
          </b-col>
        </b-row>
      </header>
    </b-container>
    <b-container>
      <b-skeleton class="mt-3" width="100%" height="25px"/>
      <div class="d-flex mt-3">
        <b-skeleton class="mr-2" width="60%" height="25px"></b-skeleton>
        <b-skeleton width="40%" height="25px"></b-skeleton>
      </div>

    </b-container>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/sass/post.scss';
</style>
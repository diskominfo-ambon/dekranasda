<template>
<div class="post__card">
  <!-- image -->
  <div class="post__card-cover">
    <b-skeleton width="100%" height="100%"></b-skeleton>
  </div>
  <!-- content -->
  <div class="post__card-body">
    <b-skeleton width="35%" height="35px"></b-skeleton>
    <!-- eslint-disable-next-line no-irregular-whitespace -->
    <div class="d-flex mt-2">
      <b-skeleton width="10%" class="mr-2"></b-skeleton>
      <b-skeleton width="20%" class="mr-2"></b-skeleton>
      <b-skeleton width="20%"></b-skeleton>
    </div>
    <div class="mt-3">
      <b-skeleton class="mt-3" width="100%" height="25px"></b-skeleton>
      <b-skeleton class="mt-3" width="100%" height="25px"></b-skeleton>
      <div class="d-flex mt-3">
        <b-skeleton class="mr-2" width="60%" height="25px"></b-skeleton>
        <b-skeleton width="40%" height="25px"></b-skeleton>
      </div>
    </div>
  </div>
</div>
</template>


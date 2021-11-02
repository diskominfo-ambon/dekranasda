<template>
<b-form>
  <b-form-group
    label="Telusuri produk"
  >
  <div class="form-group__with-categories">
    <b-form-input
      placeholder="Contoh: Kain tenun"
    />
    <!-- categories -->
    <div class="filter__categories">
      <b-dropdown id="dropdown-left" text="Kategori" class="m-2">
        <b-dd-text>
          <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Anyaman
            </b-form-checkbox>
        </b-dd-text>

        <b-dd-text>
          <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Kain
            </b-form-checkbox>
        </b-dd-text>
      </b-dropdown>
    </div>
    <!-- end -->
    <!-- submit -->
    <button class="btn text-primary">
      <Icon icon="search"/>
    </button>
    <!-- end -->
  </div>
  </b-form-group>
</b-form>
</template>
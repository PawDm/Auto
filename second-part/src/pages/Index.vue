<template>
  <q-page class="q-pa-md column justify-center items-center">
    <div v-if="isPageLocked" class="column window-height justify-center">
      <q-spinner-ios
          color="primary"
          size="4em"
        />
    </div>
    <div class="container" v-else>
      <div class="flex justify-between q-pb-md q-px-xl ">
        <q-btn dense @click="showCreateDialog = true">create</q-btn>
        <q-input 
        label="search"
        v-model="searchValue"
        debounce="500"
        outlined
        dense/>
      </div>
    <div v-if="!searchValue" class="q-gutter-sm  flex justify-center " >
      <profile v-for="profile in test.profiles" :key="profile.id" :profileData="profile"/>
    </div>
    <div v-else class="q-gutter-sm  flex justify-center " >
      <profile v-for="profile in test.searchResult" :key="profile.id" :profileData="profile"/>
    </div>
    <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="pageNumber"
      :max="test.dataForPaginations.total_pages"
    />
  </div>
  </div>
  <q-dialog v-model="showCreateDialog">
      <q-card class="dialog-card q-pa-sm">
        <q-card-section class="row items-center q-pa-none">
          <div class="text-body1">create profile</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <create-profile-form/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import profile from 'src/components/profile.vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import CreateProfileForm from 'src/components/create-profile-form.vue'
export default {
  components: { profile, CreateProfileForm },
  name: 'PageIndex',
  data () {
    return {
      pageNumber: 1,
      showCreateDialog: false,
      searchValue: ''
    }
  },
  methods: {
    ...mapActions({
      getDataForPage: 'test/getDataByPageNumber',
      searchProfile: 'test/searchProfile'
    })
  },
  watch: {
    pageNumber: function (newValue) {
      this.getDataForPage(newValue)
    },
    searchValue: function (newValue) {
      this.searchProfile(newValue)
      
      if(newValue === '') {
        this.getDataForPage(this.pageNumber)
      }
      
    }
  },
  computed: {
    ...mapState(['test']),
    ...mapGetters({
      isPageLocked: 'test/isPageLocked',
      totalPages: 'test/totalPages'
    })
  },
  created () {
    this.getDataForPage(this.pageNumber)
  }

}
</script>

<style lang="scss" scoped>
.container{
  max-width: 600px;
  width: 100%;
}
.dialog-card{
  width: 350px;
}
</style>

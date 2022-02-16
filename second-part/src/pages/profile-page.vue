<template>
  <div class="q-pa-md flex flex-center">
  <q-card class="profile-card column items-center">
    <q-card-section>
      <q-avatar size="15em"><img :src="profile.avatar || 'https://img.icons8.com/ios-filled/344/cat-profile.png'"/></q-avatar>
    </q-card-section>
    <q-card-section>
      <div class="text-h5">
      {{profile.first_name + " " + profile.last_name}} 
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-body-2">
      {{profile.email}}
      </div>
    </q-card-section>
  </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'profile-page.vue',
  methods: {
    ...mapActions({
      getProfileByID: 'test/getProfileById'
    })
  },
  created () {
    this.getProfileByID(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      profile: 'test/profile'
    })
  }
}
</script>

<style lang="scss" scoped>
.profile-card{
  max-width: 400px;
  width: 100%;
}

</style>
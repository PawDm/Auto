<template>
  <q-card class="profile-card">
      <q-btn class="delete-btn" dense @click="deleteProfile(profileData.id)" icon="close" unelevated />
      <div @click="showProfile(profileData.id)">
    <q-card-section class="row justify-center q-pa-sm">
      <q-avatar size="100px">
        <img :src="profileData.avatar || 'https://img.icons8.com/ios-filled/344/cat-profile.png'">
      </q-avatar>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <div class="text-body2 text-center">{{profileData.first_name + " " + profileData.last_name}}</div>
      </q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="text-caption text-center">
        {{profileData.email}}
        </div>
      </q-card-section>
      </div>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'profile',
  props: {
    profileData: {
      type: Object,
      require: true
    }
  },
  methods: {
    ...mapActions({
      deleteProfile: 'test/deleteProfile'
    }),
    deleteProfileCard(profileId) {
      this.deleteProfile(profileId)
    },
    showProfile (profileId) {
      this.$router.push(`/profile/${profileId}`)
    }
  }
}
</script>

<style lang="scss">
.profile-card {
  width: 100%;
  max-width: 250px;
  cursor: pointer;
  &:hover{
    background-color: $grey-2
  }
}

.delete-btn {
  position: absolute;
  top:0;
  right: 0;
  z-index: 10;
}

</style>
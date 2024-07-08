<!-- GoogleMaps.vue -->

<template>
  <GoogleMap
    api-key="AIzaSyDBzE5HZl4wMfH8UMNDhz9LPev86GhrI1A"
    style="height: 400px"
    :center="center"
    :zoom="zoom"
  >
    <Marker :options="markerOptions"></Marker>
  </GoogleMap>
</template>

<script>
import { ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  components: { GoogleMap, Marker },
  setup() {
    const center = ref({ lat: 24.20316, lng: 120.67444 })
    const zoom = ref(14)
    const markerOptions = ref({
      position: { lat: 24.20316, lng: 120.67444 }
    })

    return {
      center,
      zoom,
      markerOptions
    }
  }
}
</script>

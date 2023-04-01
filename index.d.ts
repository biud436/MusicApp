declare module '#app' {
    interface NuxtApp {
        $waveSurfer: typeof WaveSurfer;
    }
  }
  declare module 'vue' {
    interface ComponentCustomProperties {
      $waveSurfer: typeof WaveSurfer;
    }
  }
  export { }
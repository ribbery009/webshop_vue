<!-- Footer.vue -->
<template>
  <div class="mx-auto bg-tertiary relative w-full">
    <div class="container mx-auto p-8">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="col-span-1">
          <h3 class="font-bold mb-2 text-white text-xl">Kapcsolat</h3>

          <div class="text-md text-white font-semibold leading-[30px]">
            <span>John Doe |</span><span> Assistant</span><br />
            <a href="tel:+36 30 123 4567" >+36 30 123 4567, </a><a href="mailto: john.doe@marso.hu">john.doe@marso.hu</a>
          </div>
        </div>

        <div class="col-span-1">
          <h3 class="font-bold mb-2 text-white text-xl">Kapcsolat 2</h3>
          <div class="flex flex-col text-sm">
            <div class="text-md text-white font-semibold leading-[30px]">
              <span>John Doe |</span><span> Assistant</span><br />
              <a class="text-white" href="tel:+36 30 123 4567" >+36 30 123 4567, </a><a href="mailto: john.doe@marso.hu">john.doe@marso.hu</a>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <h3 class="font-bold mb-2 text-white text-xl">Kövess minket!</h3>
          <div class="flex space-x-4 justify-center">
            <a href="https://www.facebook.com/marsopont/" target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="facebook-new"
              />
            </a>
            <a href="https://www.facebook.com/marsopont/" target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/144/twitter--v1.png"
                alt="twitter--v1"
              />
            </a>
            <a href="https://www.facebook.com/marsopont/" target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/144/youtube-play.png"
                alt="youtube-play"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>

</style>
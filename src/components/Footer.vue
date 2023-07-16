<!-- Footer.vue -->
<template>

<div class="mx-auto bg-tertiary relative w-full">      <div class="container mx-auto p-8">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-1">
            <h3 class="font-bold mb-2 text-white text-xl">Kapcsolat</h3>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <a class="col-span-1 text-center" href="/gyartok/nokian"
                >Nokian Tyres</a
              >
            </div>
          </div>

          <div class="col-span-1">
            <h3 class="font-bold mb-2 text-white text-xl">Kapcsolat 2</h3>
            <div class="flex flex-col text-sm">
              <a href="/gumiszerviz-szolgaltatasok/konnyufem-felni-javitas"
                >Könnyűfém felni javítás</a
              >
            </div>
          </div>

          <div class="col-span-1">
            <h3 class="font-bold mb-2 text-white text-xl">Kövess minket!</h3>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/marsopont/" target="_blank">
                <i class="marso-icon-facebook icon"></i>
              </a>
              <a href="https://www.facebook.com/marsopont/" target="_blank">
                <i class="fas fa-twitter-square"></i>
              </a>
              <a href="https://www.facebook.com/marsopont/" target="_blank">
                <i class="fas fa-youtube-square"></i>
              </a>
            </div>

            <!-- Feltételezem, hogy itt valami form kerül behelyezésre: -->
            <button type="button" class="mt-4">
              <img
                class="h-8"
                src="/extensions/local/marso/newsletter/newsletter-footer-button-hu_HU.png"
                alt=""
              />
            </button>
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
.marso-icon-facebook:before {
  content: "\e91e";
}
</style>
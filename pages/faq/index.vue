<template>
<div id="accordion-collapse" data-accordion="collapse" data-active-classes="text-primary bg-accent" data-inactive-classes="text-black">
    <span class="text-7xl">FAQ</span>
  <!--Heading 1-->
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center bg-secondary text-3xl justify-between w-full p-5 text-left rounded-t-xl hover:bg-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Heading 1</span>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 bg-focal text-3xl text-black border border-b-0 border-gray-200">
        <p>body 1</p>
    </div>
  </div>
  <!--Heading 2-->
   <h2 id="accordion-collapse-heading-2">
    <button  class="flex items-center bg-secondary text-3xl text-black justify-between w-full p-5 text-left hover:bg-white" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
      <span>Heading 2</span>

    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 bg-focal text-3xl text-black border border-b-0 border-gray-200">
        <p>Body2</p>
    </div>
  </div>
  <!--Heading 3-->
   <h2 id="accordion-collapse-heading-3">
    <button  class="flex items-center bg-secondary text-3xl text-black justify-between w-full p-5 text-left hover:bg-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
      <span>Heading 3</span>

    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 bg-focal text-3xl text-black border border-gray-200">
        <p>Body3</p>
    </div>
  </div>
  <!--Heading 4-->
  <h2 id="accordion-collapse-heading-4">
    <button  class="flex items-center bg-secondary text-3xl text-black justify-between w-full p-5 text-left hover:bg-white" data-accordion-target="#accordion-collapse-body-4" aria-expanded="true" aria-controls="accordion-collapse-body-4">
      <span>Heading 4</span>

    </button>
  </h2>
  <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
    <div class="p-5 bg-focal text-3xl text-black border border-gray-200">
        <p>Body4</p>
    </div>
  </div>
  <!--Heading 5-->
  <h2 id="accordion-collapse-heading-5">
    <button  class="flex items-center bg-secondary text-3xl text-black justify-between w-full p-5 text-left hover:bg-white" data-accordion-target="#accordion-collapse-body-5" aria-expanded="true" aria-controls="accordion-collapse-body-5">
      <span>Heading 5</span>

    </button>
  </h2>
  <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
    <div class="p-5 bg-focal text-3xl text-black border border-gray-200">
        <p>Body5</p>
    </div>
  </div>
</div>
      <!-- <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> -->

</template>

<script setup>
import { onMounted } from 'vue'
import { 
    initAccordions, 
    } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
})
</script>
<template>
    <div class="w-full p-6">
        <div class="bg-white border-transparent rounded-lg shadow-xl">
            <div :class="HeaderColor"
                class="flex flex-row uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h5 class="basis-5/6 font-bold uppercase text-white">{{ TitleText }}</h5>

                <div class="basis-1/6 float-left text-white" role="menu">
                    <a class="button-icon" href="#/nodes/nodes/newslist/bakhshname">آرشیو</a>
                </div>
            </div>
            <div class="p-5">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    TitleText: String,
    HeaderColor: String,
  },
};
</script>

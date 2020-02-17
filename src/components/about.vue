<template>
  <div>This is the about component for {{topic}}</div>
</template>
<script>
export default {
  props: {
    topic: {
      type: String
    }
  }
};
</script>

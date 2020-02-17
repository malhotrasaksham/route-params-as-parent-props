<template>
  <div>This is the home component
    <router-link :to="{name: 'about', params: {topic: 'company'}}">About page</router-link>
  </div>
</template>

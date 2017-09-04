<template>
  <div>
    <router-link to="/">All</router-link>
    <router-link :to="{query: {filter: 'completed'}}">Completed</router-link>
    <router-link :to="{query: {filter: 'active'}}">Active</router-link>
  </div>
</template>

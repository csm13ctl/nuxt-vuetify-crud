<template>
  <div>
    <p>
      <v-card>
        <v-card-actions>
          <back-btn />
          <list-btn path="todos" />
          <v-spacer />
          <edit-btn :id="todo.id" path="todos" />
          <delete-btn :id="todo.id" path="todos" />
          <reload-btn :id="todo.id" path="todos" @reloaded="reloaded" />
        </v-card-actions>
      </v-card>
    </p>
    <p>
      <v-card>
        <v-card-title>{{ todo.title }}</v-card-title>
        <v-card-text>
          <div>
            <v-icon small>mdi-account</v-icon> {{ todo.userId }}<br />
            <v-icon small>mdi-check</v-icon> {{ todo.completed }}
          </div>
        </v-card-text>
      </v-card>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import backBtn from '@/components/button/back'
import listBtn from '@/components/button/list'
import editBtn from '@/components/button/edit'
import deleteBtn from '@/components/button/delete'
import reloadBtn from '@/components/button/reload'

export default {
  components: {
    backBtn,
    listBtn,
    editBtn,
    deleteBtn,
    reloadBtn,
  },
  data() {
    return {
      todo: {
        id: -1,
      },
      userId: this.$route.params.id,
    }
  },
  computed: {
    ...mapGetters('todos', ['getById']),
  },
  async mounted() {
    if (this.$store.state.todos.list.length === 0) {
      await this.fetchList()
    }
    this.todo = this.getById(this.$route.params.id)
  },
  methods: {
    ...mapActions('todos', ['fetchList']),
    reloaded(item) {
      this.todo = item
    },
  },
}
</script>

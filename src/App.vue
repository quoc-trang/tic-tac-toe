<template>
  <div class="wrapper">
    <main class="board">
      <div v-for="(row, rowI) in board" :key="rowI" class="flex gap-x-2">
        <div v-for="(col, colI) in row" :key="colI" class="row" @click="onClick(rowI, colI)">
          <CircleCharacter v-show="board[rowI][colI] === 'O'" />
          <TimeCharacter v-show="board[rowI][colI] === 'X'" />
        </div>
      </div>
    </main>
    <div class="action">
      <button class="font-bold" @click="reset">Play again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimeCharacter from './components/TimeCharacter.vue'
import CircleCharacter from './components/CircleCharacter.vue'

const player = ref('X')

const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

const onClick = (rowI: number, colI: number) => {
  if (board.value[rowI][colI] !== '') return
  board.value[rowI][colI] = player.value

  if (winInARow(rowI) || winInCol(colI) || winInDiagonal()) alert(player.value + ' win')
  player.value = player.value === 'X' ? 'O' : 'X'
}

const reset = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
}

const winInARow = (rowI: number) => {
  return (
    board.value[rowI][0] === board.value[rowI][1] && board.value[rowI][1] === board.value[rowI][2]
  )
}

const winInCol = (colI: number) => {
  return (
    board.value[0][colI] === board.value[1][colI] && board.value[1][colI] === board.value[2][colI]
  )
}

const winInDiagonal = () => {
  return (
    (board.value[0][0] !== '' &&
      board.value[0][0] === board.value[1][1] &&
      board.value[1][1] === board.value[2][2]) ||
    (board.value[0][2] !== '' &&
      board.value[0][2] === board.value[1][1] &&
      board.value[1][1] === board.value[2][0])
  )
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply bg-secondary w-screen h-screen flex justify-center items-center gap-y-5 flex-col;
}

.board {
  @apply border border-primary gap-2 p-5;
}

.row {
  @apply mt-2 border border-primary rounded w-20 h-20 cursor-pointer hover:shadow-md hover:shadow-primary transition-all duration-200 flex justify-center items-center;
}

.action {
  @apply flex gap-x-5;
}

.action button {
  @apply px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-primary duration-200 border-2 border-primary text-white;
}
</style>

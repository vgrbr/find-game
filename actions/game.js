export function next(id) {
  return {
    type: 'NEXT',
    id
  }
}

export function restart() {
  return {
    type: 'RESTART',
  }
}

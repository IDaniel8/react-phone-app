class HandleServerError extends Error {
  constructor(error) {
    super(error.statusText)

    this.statusText = error.statusText
    this.status = error.status
  }
}

export { HandleServerError }

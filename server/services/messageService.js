class messageService {
  send(status, message) {
    return {
      status,
      message
    }
  }
}

export default new messageService
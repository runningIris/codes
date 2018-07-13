export default class Service {
  static getNewColumn = () => {
    return {
      code: 1,
      data: {
        channel: String(parseInt(Math.random() * 1000)),
        list: [
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000),
          parseInt(Math.random() * 1000000)
        ]
      }
    };
  }
}

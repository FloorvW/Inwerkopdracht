export const state = () => ({
  counter: 0,
  messages: [],
  storedFormData: []
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  addMessage(state, newMessage) {
    state.messages.push({
      msg: newMessage,
      id: new Date().getUTCMilliseconds()
    });
  },
  setEchoResponse(state, data) {
    console.log("setEchoResponse: " + data.echo.name);
    state.storedFormData.push(data);
  }
};

export const actions = {
  async echo ({ commit }, formData) {
      console.log(formData)
    let options = {
      url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo/",
      method: "POST",
      headers: {
        "x-api-key": "******************",
      },
      data: formData
    }
    console.log("actions says hello")
    let response = await this.$axios(options);
    commit('setEchoResponse', response.data);
   
  }
}


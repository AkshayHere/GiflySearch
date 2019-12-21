import axios from "axios";

const requests = {

  search(offsets = 0, limit = 8) {
    const currentState = window.store.getState();
    const { searchParams, offset } = currentState;   

    if(offset)
      offsets = offset;

    let url = process.env.REACT_APP_GIPHY_URL + "search?" +
                "api_key="+process.env.REACT_APP_GIPHY_KEY +
                "&q="+searchParams+
                "&limit="+limit+
                "&offset="+offsets+
                "&rating=G&lang=en"

    return axios.get(url, {
    })
      .then(response => {
        console.log(response.data);
        return response;
      })
      .catch(error => {
        console.log(error.response)
      });
  }
};

export default requests;

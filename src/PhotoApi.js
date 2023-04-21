export default class PhotoData {
  api(path, method = "PUT", body = null, token = null) {
    const url = "http://localhost:3022" + path;

    const options = {
      method,

      headers: {
        "Content-Type": "image/jpeg",
      },
    };

    console.log(body);
    if (body != null) {
      options.body = body;
    }

    return fetch(url, options);
  }

  async uploadPicture(picture, id) {
    let response = await this.api(`/upload/${id}`, "PUT", picture);

    return response.json();
  }
}

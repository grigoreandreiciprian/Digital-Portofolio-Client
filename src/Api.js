export default class Data {
  api(path, method = "GET", body = null) {
    const url = "http://localhost:3022" + path;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };

    if (body != null) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options);
  }

  async getProjects() {
    const response = await this.api("/project", "GET", null);

    return response.json();
  }

  async addProject(project) {
    const response = await this.api("/project", "POST", project, "");

    return response.json();
  }

  async findOne(id) {
    const response = await this.api(`/project/${id}`, "GET", null);

    return response.json();
  }

  async updateProject(id, project) {
    const response = await this.api(`/project/update/${id}`, "PUT", project);

    return response.json();
  }

  async deleteProject(id) {
    const response = await this.api(`/project/${id}`, "DELETE");

    return response.json();
  }
}

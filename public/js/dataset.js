export class DataSet{
    constructor(options){
        this.options = {
            host: 'http://localhost:8080/api/',
            model: options.model,
            object: options.object
        }
    }

    query(query, options, params){
        let url = new URL(this.options.host);
        url.pathname+=query;
        return fetch(url, options).then((response) => {
            return response.json();
          });
    }

    read(id){
      return this.query(`${this.options.object}/${id}`, {
          method: 'GET'
      });
    }

    getAllStudents(){
        return this.query(`${this.options.object}/`, {
            method: 'GET'
        });
    }
}
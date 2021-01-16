import axios from 'axios';

const URL = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios
  .get(URL)
  .then((response) => {
    interface Article {
      id: number;
      title: string;
      description: string;
    }

    let data: Article[] = response.data;

    // let data: any = response.data;
    // data = [{ id: 1, title: 'titl', description: 'swsa', test: 'test' }];

    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

export {};

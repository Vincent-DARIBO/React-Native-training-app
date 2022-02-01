import { rest } from 'msw';
import { userData } from '../../data/userData';
//TO DO: trouver comment utiliser le mock de l'API pour tester l'application

export const handlers = [
  rest.get('*', (req, res, ctx) => {
    console.log(
      'handler',
      'get',
      userData // ? 'a list of user' : 'an empty array'
    );
    return res(ctx.status(200), ctx.json(userData));
  }),
  // rest.post('https://localhost:8080/users', (req, res, ctx) => {
  //   let isLoading = true;
  //   if (isLoading) {
  //     console.log('fetching data...');
  //     isLoading = false;
  //   }
  //   return res(ctx.json(userData));
  // }),
];

import * as knex from 'knex';

export class UserModel {

  constructor() { }

  create(db: knex, data: any) {
    return db('users').insert(data)
  }

  read(db: knex) {
    return db('users').orderBy('first_name', 'desc')
  }

  search(db: knex, query: string) {
    const _query = `%${query}%`;
    return db('users')
      .where('first_name', 'like', _query)
      .orderBy('first_name', 'desc')
  }


}

/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docsdocs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    surname: { type: 'string', required: true },
    firstName: { type: 'string', required: true },
    role: { type: 'string', required: true, isIn: ['Responsable pédagogique', 'Etudiant', 'Intervenant'] },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true, encrypt: true },
    avatar: { type: 'string', defaultsTo: 'https://www.tousvoisins.fr/img/avatar-default.png' },
    campus: { type: 'string', isIn: ['Arras', 'Bordeaux', 'Brest', 'Grenoble', 'Lille', 'Lyon', 'Montpellier', 'Nantes', 'Paris'] },
    grade: { type: 'string', isIn: ['B1', 'B2', 'B3', 'I4', 'I5'] },
    rgpd: { type: 'string', defaultsTo: '0' },
    resetPassword: { type: 'string' },
    teams: {
      collection: 'Team',
      via: 'users'
    },
    pool: {
      collection: 'Project',
      via: 'intervenants'
    }
  }
}

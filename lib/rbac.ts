export function can(user, action) {
  const map = {
    COMPANY: ['CREATE_JOB', 'VIEW_CV'],
    RECOMMENDER: ['UPLOAD_CV', 'MATCH'],
    ADMIN: ['ALL']
  }
  return map[user.role]?.includes(action) || user.role === 'ADMIN'
}

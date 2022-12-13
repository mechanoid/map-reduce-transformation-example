const votes = [
  {
    surveyId: 5,
    projectId: 7,
    userHash: 'fdhskfjdhsdfkjhds',
    responses: {
      'question-1': 8,
      'question-2': 5
    }
  },
  {
    surveyId: 5,
    projectId: 7,
    userHash: 'cmxkjalkjlds',
    responses: {
      'question-1': 3,
      'question-2': 7
    }
  }
]
console.log('start', votes)

console.log('\n--------------------------\n')

const responses = votes.map((vote) => vote.responses)
console.log('responses', responses)

// const groupedResponses = responses.reduce((memo:Record<string, number[]>, curr: Record<string, number>): Record<string, number[]> => {
const groupedResponses = responses.reduce((memo, curr) => {
  // Object.keys(curr).forEach((questionId) => {
  //   memo[questionId] = memo[questionId] || []
  //   memo[questionId].push(curr[questionId])
  // })
  Object.entries(curr).forEach(([questionId, responseValue]) => {
    memo[questionId] = memo[questionId] || []
    memo[questionId].push(responseValue)
  })
  return memo
}, {})

console.log('\n--------------------------\n')

console.log('groupedResponses', groupedResponses)

console.log('\n--------------------------\n')

const results = Object.keys(groupedResponses).reduce((memo, curr) => {
  const values = groupedResponses[curr]

  const sum = values.reduce((result, curr) => {
    result += curr
    return result
  }, 0)

  const median = sum / values.length
  // memo[curr] = memo[curr] || []
  memo[curr] ||= []
  memo[curr] = median
  return memo
}, {})

console.log(results)

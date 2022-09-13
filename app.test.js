const soal1Function = require('./soal-1');
const soal2Function = require('./soal-2');
const soal3Function = require('./soal-3');

test('Test soal 1', () => {
  console.log = jest.fn();
  const expectedArrayResult = [
    '1 ->',
    '2 ->',
    '3 -> fish',
    '4 ->',
    '5 -> bash',
    '6 -> fish',
  ]
  soal1Function(6);
  const actualResults = [];
  for(let i = 0; i < console.log.mock.calls.length; i++){
    const call = console.log.mock.calls[i][0];
    actualResults.push(call.trim())
  }
  expect(expectedArrayResult).toEqual(expect.arrayContaining(actualResults))
});

test('Test soal 2', () => {
  const arr = [2,4,8,1,0,19]
  const sortedArr = [0,1,2,4,8,19];
  const result = soal2Function(arr);
  expect(sortedArr).toEqual(expect.arrayContaining(result))
});

test('Test soal 3', () => {
  const str1 = 'ababa'
  const str2 = 'haha hehe'
  const result1 = soal3Function(str1);
  const result2 = soal3Function(str2);
  expect(result1).toEqual(true)
  expect(result2).toEqual(false)
})
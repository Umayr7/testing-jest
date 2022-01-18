const { add, promiseTest, arr, app } = require('../index');
// const { router } = require('../routes/index');
const request = require('supertest');

test('get users data',  async() => {
    await request(app)
    .get('/users')
    .expect(200)
    .then(res => {
        expect(res && res.body && typeof res.body.users == 'object')
    });
});

// test('toBe', () => {
//     expect(add(1,2)).toBe(3)
// });

// test('toEqual', () => {
//     expect(add(1,2)).toEqual(3)
// });

// test('toBeDefined', () => {
//     expect(add(1,2)).toBeDefined()
// });

// test('toBeNull', () => {
//     expect(add(1,2)).not.toBeNull()
// });

// test('toBeGreater', () => {
//     expect(add(1,2)).not.toBeGreaterThan(4)
// });

// test('toBeLess', () => {
//     expect(add(1,2)).toBeLessThanOrEqual(3)
// });

// test('toMatch', () => {
//     expect(add('HELLO ','WORLD')).toMatch(/HELLO/)
// });

// test('promiseTest old way', () => {
//     promiseTest(1, 2)
//     .then(data => {
//         expect(data).toBe('+ve');
//     })
//     .catch(err => {
//         expect(err).toBe('-ve');
//     });
// });

// test('promiseTest easy way', () => {
//     expect(promiseTest(2, 1)).resolves.toBe('+ve')
// });

// test('promiseTest easy way', () => {
//     expect(promiseTest(1, 2)).rejects.toBe('-ve')
// });

// test('toContain', () => {
//     expect(arr()).toContain('Bat')
// });

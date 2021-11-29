const chai = require('chai')
const expect = chai.expect

const calculator = require('../src/calculator')

describe('Calculator', ()=>{
    describe('Addition', ()=>{
        beforeEach( ()=>{
            console.log('Helllo, I am learning unit testing')
        }   )


        it('1+1 is equal to 2', ()=>{
            expect(calculator.add(1,1)).to.equal(2)
        } )

        
        it('1+1 is equal to 2', ()=>{
            expect(calculator.add(1,-1)).to.equal(2)
        } )

        it('1+1 is equal to 2', ()=>{
            expect(calculator.add(1,8)).to.equal(2)
        } )

    })
})

describe('Subtraction', ()=>{

    describe('Subtraction', ()=>{
        it ('5-5 is equal to 0', ()=>{
            expect(calculator.subtract(25,7)).to.equal(19)
        })


    })
})



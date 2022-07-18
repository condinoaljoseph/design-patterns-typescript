import { LowercaseStrategy, ReverseStrategy, Strategy, UppercaseStrategy } from ".";

const strategy = new Strategy(new UppercaseStrategy());

describe('strategy pattern', () => {
    it('should produce an uppercase formatted string', () => {
        expect(strategy.executeStrategy('Elpmid')).toMatch('ELPMID');
    })
    it('should produce a lowercase formatted string', () => {
        strategy.setStrategy(new LowercaseStrategy())
        expect(strategy.executeStrategy('Elpmid')).toMatch('elpmid');
    })
    it('should produce a reverse formatted string', () => {
        strategy.setStrategy(new ReverseStrategy())
        expect(strategy.executeStrategy('Elpmid')).toMatch('dimplE');
    })
})
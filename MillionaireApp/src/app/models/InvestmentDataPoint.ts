export interface InvestmentDataPoint {
    age: number;
    principal : number;
    yearlyGrowth : number;
    totalValue : number;
}

export const placeholderData : InvestmentDataPoint[] = [
    {age: 21,principal: 100,yearlyGrowth: 300, totalValue: 5},
    {age: 22,principal: 400,yearlyGrowth: 300, totalValue: 5},
    {age: 23,principal: 700,yearlyGrowth: 300, totalValue: 5},
    {age: 24,principal: 1000,yearlyGrowth: 300, totalValue: 5},
]

import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Results({input}) {
    const resultData = calculateInvestmentResults(input)
    const initialInvestment = 
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest
                    
                return (
                    <tr key={yearData.year}>
                    <th>{yearData.year}</th>
                    <th>{formatter.format(yearData.valueEndOfYear)}</th>
                    <th>{formatter.format(yearData.interest)}</th>
                    <th>{formatter.format(totalInterest)}</th>
                    <th>{formatter.format(totalAmountInvested)}</th>
                </tr>

                )})}
            </tbody>

        </table>
    )
}
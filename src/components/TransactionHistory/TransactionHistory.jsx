import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency </th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => {
                    return <tr className={css.dataTran} key={transaction.id}>
                        <td className={css.text}>{transaction.type}</td>
                        <td className={css.text}>{transaction.amount}</td>
                        <td className={css.text}>{transaction.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

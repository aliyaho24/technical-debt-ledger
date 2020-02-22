import React from 'react';
import DebtTable from '../../components/DebtTable';

function SummaryPage () {
  return (
    <div>
      <h1 className= "title">Technical Debt Ledger</h1>
      <h3 className="title" style={{marginBottom: '15px'}}>Repo: Responder Request Scheduling Service</h3>
      <DebtTable />
    </div>
  );
}

export default SummaryPage;
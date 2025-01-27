
const CONSTANTS = {
  CHUNK_SIZE:50,
  TR_DEBIT:'DEBIT',
  TR_CREDIT:'CREDIT',
  errorMessage:{
    RECEIVER_BANK_NOT_FOUND:'Receiver account not found',
    SENDER_INSUFFICIENT_BALANCE:'Insufficient funds in sender account',
    NOT_AUTHORIZED:'You are not authorized to access this account',
    TRANSCTION_SUCCESS:'Transaction successful'
  },
  dbTableName:{
    Account:'Account',
    AccountTransaction:'AccountTransaction'
  }
  
};

module.exports = CONSTANTS;
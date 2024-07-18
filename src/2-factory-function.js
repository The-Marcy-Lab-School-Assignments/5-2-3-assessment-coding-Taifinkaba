const bankAccountFactory = (initalBalance = 0) => {
  let balance = initalBalance;

  return {
    checkBalance: () => balance,

    add: amount => {
      balance += amount;
      console.log(`$${amount} added.`);
    },

    subtract: amount => {
      balance -= amount;
      console.log(`$${amount} subtracted.`);
    }
  };

};

module.exports = {
  bankAccountFactory,
};

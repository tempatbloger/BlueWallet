// blue_modules/bblu-network.js
// Konfigurasi jaringan Bitcoin-Blu (BBLU)

const bbluNetwork = {
  messagePrefix: '\x18Bitcoin-Blu Signed Message:\n',
  bech32: 'bb',
  bip32: {
    public: 0x0488b21e,  // 76067358
    private: 0x0488ade4, // 76066276
  },
  pubKeyHash: 25,
  scriptHash: 26,
  wif: 0x80,
};

module.exports = { bbluNetwork };

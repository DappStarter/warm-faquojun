require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food gravity reward stick unhappy install immense army gauge'; 
let testAccounts = [
"0x5d29b57fb579e01c6fa14e2e7bb1e08e18cc1054c0a10251a8bc69611614a30a",
"0x68397c796e86e9274fd960246c8d1404f08680c2fd36ab3a4a55d2759826d562",
"0x6cb3802b21c9d2393aa3f223561f0609600f36426954ea91cb42e3d9a6b87f34",
"0x4ff727c8812d94da68da808a49fa3224f871cef57547e28905e6e2c8097ecf7d",
"0x2230a1ec4777c327d4f97b7fe89ff030942354c2aea538cae98fc11a796dd393",
"0x42b5130863d04a32513b198500d678fe844848307d3ba2175fb73f51fda1490b",
"0x932fff31ecaa34abe9846d1c694c1818fa3e01bd91d2aa471cb385ad7b698ce6",
"0x85c15c7683deae1f900a5672ea6a199e5259952f956d604263d898d2bcf1991d",
"0xdee3aeeeac2d4f199133bd76813233d556b22147c1cfa5050605f3baf6c1b02b",
"0x6c6e53ce2c742d1f6c87d05ba520a550686de1112039b6b151af8a20373b49dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
